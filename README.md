<h1 align="center">FileGuardian 🛡️</h1>
<p align="center"><b>Duplication Detection System (DDS)</b> that saves <b>server bandwidth</b> and <b>storage</b> by detecting and preventing duplicate file uploads.</p>
<p align="center">Built with <b>Express.js</b>, <b>EJS</b>, and <b>MongoDB</b>.</p>

<hr>

<h2>🚀 Features</h2>
<ul>
  <li>🔍 <b>Duplicate Detection</b> – Stops users from uploading the same file multiple times</li>
  <li>⚡ <b>Efficient Storage</b> – Saves only file metadata and hash, not the actual file</li>
  <li>📉 <b>Bandwidth Optimization</b> – Blocks redundant uploads before transfer is completed</li>
  <li>📊 <b>Instant Feedback</b> – Alerts users if a file already exists</li>
  <li>🖥️ <b>Simple Web Interface</b> – Built with EJS templates for easy interaction</li>
</ul>

<h2>🛠️ Tech Stack</h2>
<ul>
  <li><b>Backend</b>: Express.js</li>
  <li><b>Frontend</b>: EJS</li>
  <li><b>Database</b>: MongoDB</li>
  <li><b>Hashing</b>: SHA-256</li>
</ul>

<h2>📂 Project Structure</h2>
<pre>
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
</pre>

<h2>⚙️ Installation & Setup</h2>
<ol>
  <li>Clone the repo:
    <pre>git clone https://github.com/your-username/FileGuardian.git
cd FileGuardian</pre>
  </li>
  <li>Install dependencies:
    <pre>npm install</pre>
  </li>
  <li>Create a <code>.env</code> file with:
    <pre>MONGO_URI=your_mongodb_connection_string
PORT=3000</pre>
  </li>
  <li>Run the server:
    <pre>npm start</pre>
    Visit → <a href="http://localhost:3000">http://localhost:3000</a>
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
<p>Contributions, issues, and feature requests are welcome. Fork the project, make changes, and submit a PR 🚀</p>

<h2>📜 License</h2>
<p>MIT License © 2025 <b>Your Name</b></p>
