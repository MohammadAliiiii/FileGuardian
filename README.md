<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FileGuardian - Duplication Detection System</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 0;
      background: #f8f9fa;
      color: #333;
    }
    header {
      background: #222;
      color: #fff;
      padding: 20px;
      text-align: center;
    }
    header h1 {
      margin: 0;
      font-size: 2rem;
    }
    header p {
      margin: 5px 0 0;
      font-size: 1.1rem;
      opacity: 0.8;
    }
    main {
      max-width: 900px;
      margin: 20px auto;
      padding: 20px;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    h2 {
      color: #0056b3;
      margin-top: 30px;
    }
    code, pre {
      background: #f4f4f4;
      padding: 6px 10px;
      border-radius: 5px;
      font-size: 0.9rem;
      display: inline-block;
    }
    pre {
      overflow-x: auto;
      display: block;
    }
    ul {
      margin-left: 20px;
    }
    .footer {
      text-align: center;
      padding: 15px;
      background: #222;
      color: #fff;
      margin-top: 40px;
    }
    .footer a {
      color: #00bfff;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <header>
    <h1>FileGuardian 🛡️</h1>
    <p>A Duplication Detection System (DDS) that saves server bandwidth and storage</p>
  </header>

  <main>
    <h2>🚀 Features</h2>
    <ul>
      <li>🔍 Duplicate Detection – Stops users from uploading the same file multiple times</li>
      <li>⚡ Efficient Storage – Saves only file metadata and hash, not the actual file</li>
      <li>📉 Bandwidth Optimization – Blocks redundant uploads before transfer is completed</li>
      <li>📊 Instant Feedback – Alerts users if a file already exists</li>
      <li>🖥️ Simple Web Interface – Built with EJS templates for easy interaction</li>
    </ul>

    <h2>🛠️ Tech Stack</h2>
    <ul>
      <li><b>Backend</b>: Express.js</li>
      <li><b>Frontend</b>: EJS</li>
      <li><b>Database</b>: MongoDB</li>
      <li><b>Hashing</b>: SHA-256</li>
    </ul>

    <h2>📂 Project Structure</h2>
    <pre><code>
FileGuardian/
│── src/
│   ├── routes/        # Express routes
│   ├── views/         # EJS templates
│   ├── models/        # MongoDB schemas
│   ├── utils/         # Hashing & helper functions
│   └── app.js         # Main Express server
│
│── package.json
│── README.md
    </code></pre>

    <h2>⚙️ Installation & Setup</h2>
    <ol>
      <li>Clone the repo:
        <pre><code>git clone https://github.com/your-username/FileGuardian.git
cd FileGuardian</code></pre>
      </li>
      <li>Install dependencies:
        <pre><code>npm install</code></pre>
      </li>
      <li>Create a <code>.env</code> file with:
        <pre><code>MONGO_URI=your_mongodb_connection_string
PORT=3000</code></pre>
      </li>
      <li>Run the server:
        <pre><code>npm start</code></pre>
        Visit: <code>http://localhost:3000</code>
      </li>
    </ol>

    <h2>📖 How It Works</h2>
    <ol>
      <li>User uploads a file.</li>
      <li>FileGuardian calculates the SHA-256 hash.</li>
      <li>The hash is checked in MongoDB:
        <ul>
          <li>✅ Not found → metadata stored, upload allowed</li>
          <li>❌ Found → upload blocked, user notified</li>
        </ul>
      </li>
    </ol>

    <h2>📌 Roadmap</h2>
    <ul>
      <li>[ ] Add user authentication</li>
      <li>[ ] Cloud storage integration</li>
      <li>[ ] Admin dashboard for duplicates</li>
      <li>[ ] API endpoints for external services</li>
    </ul>

    <h2>🤝 Contributing</h2>
    <p>Contributions, issues, and feature requests are welcome. Fork and submit PRs!</p>

    <h2>📜 License</h2>
    <p>MIT License © 2025 <b>Your Name</b></p>
  </main>

  <div class="footer">
    <p>Made with ❤️ using Express, EJS, and MongoDB</p>
  </div>
</body>
</html>
