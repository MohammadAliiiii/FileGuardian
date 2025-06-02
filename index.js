const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
require("dotenv").config();

const User = require("./models/User");
const File = require("./models/File");

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));
// Middleware
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(
  session({
    secret: "secret_key",
    resave: false,
    saveUninitialized: false,
  })
);

// Upload configuration
const upload = multer({ dest: "temp/" });

// Middleware for authentication
function ensureAuth(req, res, next) {
  if (req.session.userId) next();
  else res.redirect("/login");
}

// Routes
app.get("/", ensureAuth, (req, res) => {
  res.render("upload", {
    uploaded: false,
    duplicate: false,
    error: null,
    filename: null,
  });
});

app.get("/signup", (req, res) => {
  res.render("signup", { error: null });
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    req.session.userId = user._id;
    res.redirect("/");
  } catch (err) {
    res.render("signup", { error: "Username already exists" });
  }
});

app.get("/login", (req, res) => {
  res.render("login", { error: null });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (!user) return res.render("login", { error: "Invalid credentials" });
  req.session.userId = user._id;
  res.redirect("/");
});

app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
});

app.post(
  "/upload",
  ensureAuth,
  upload.single("uploadedFile"),
  async (req, res) => {
    try {
      const file = req.file;
      const userId = req.session.userId;

      if (!file) {
        return res.render("upload", {
          uploaded: false,
          duplicate: false,
          error: "No file uploaded",
          filename: null,
        });
      }

      const buffer = fs.readFileSync(file.path);
      const hash = crypto.createHash("sha256").update(buffer).digest("hex");
      fs.unlinkSync(file.path);

      const existing = await File.findOne({ hash: hash, userId: userId });

      if (existing) {
        return res.render("upload", {
          uploaded: false,
          duplicate: true,
          error: null,
          filename: file.originalname,
        });
      }

      const newFile = new File({
        userId,
        originalName: file.originalname,
        mimeType: file.mimetype,
        size: file.size,
        hash,
      });

      await newFile.save();

      res.render("upload", {
        uploaded: true,
        duplicate: false,
        error: null,
        filename: file.originalname,
      });
    } catch (err) {
      console.error(err);
      res.render("upload", {
        uploaded: false,
        duplicate: false,
        error: "Upload failed",
        filename: null,
      });
    }
  }
);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
