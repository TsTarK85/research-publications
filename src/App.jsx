import { useState } from "react";
import { supabase } from "./supabaseClient";
import "./styles.css";

function App() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  async function handleUpload() {
    if (!file) return alert("Please select a file");

    setUploading(true);

    const fileName = `${Date.now()}-${file.name}`;

    const { error } = await supabase.storage.from("research-files").upload(fileName, file);

    if (error) {
      alert("Upload failed: " + error.message);
      setUploading(false);
      return;  
    }

    alert("Upload successful!");
    setUploading(false);

    await supabase.from("uploads").insert({
      file_name: fileName,
      uploaded_at: new Date(),
    });

    setFile(null); 
    document.getElementById("fileInput").value = "";
  }

  return (
    <div className="page-wrapper">
      <header className="header fade-in">
        <h1>Academic Research Publication</h1>
        <br />
        <br />
        <p className="subtitle">
          Our research community is dedicated to fostering innovation,
          collaboration, and academic excellence. We aim to create an
          open-access archive where students, scholars, and independent
          researchers can publish their manuscripts, share datasets, and
          contribute meaningful knowledge to the global scientific ecosystem.
          <br />
          <br />
          Whether you're working on AI/ML, engineering, social sciences, or
          interdisciplinary studies, our goal is to provide a transparent,
          inclusive, and reliable platform to showcase your work. Join us in
          building a community that values curiosity, creativity, and the
          pursuit of knowledge.
        </p>
      </header>

      <section className="upload-section fade-in-delayed">
        <h2>Upload Your Files (Upto 50 MB)</h2>

        <div className="upload-box">
          <input
            type="file"
            id="fileInput"
            className="file-input"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <label htmlFor="fileInput" className="file-label">
            {file ? file.name : "Choose a file"}
          </label>

          <button
            className="upload-btn"
            onClick={handleUpload}
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </div>
      </section>

      <footer className="footer fade-in-delayed-2">
        <p>
          © {new Date().getFullYear()} Academic Research Community • Empowering
          open knowledge & scientific collaboration.
        </p>
      </footer>
    </div>
  );
}

export default App;