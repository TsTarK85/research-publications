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

    // upload succeeded
    alert("Upload successful!");

    // insert metadata (assumes RLS configured)
    await supabase.from("uploads").insert({
      file_name: fileName,
      uploaded_at: new Date(),
    });

    // reset UI
    setFile(null);
    const el = document.getElementById("fileInput");
    if (el) el.value = "";

    setUploading(false);
  }

  return (
    <div className="page-wrapper">
      <header className="header fade-in">
        <h1>Research Publications</h1>
        <p className="subtitle">
          Our research community is dedicated to fostering innovation,
          collaboration, and academic excellence. We provide an open-access
          archive where students, scholars, and independent researchers can
          publish manuscripts, share datasets, and contribute meaningful
          knowledge to the global scientific ecosystem.
          <br />
          <br />
          Whether you're working in AI/ML, engineering, social sciences, or
          interdisciplinary research, our goal is to provide a transparent,
          inclusive, and reliable platform to showcase your work.
        </p>
      </header>

      <section className="upload-section fade-in-delayed">
        <h2>Upload Your Files (Up to 50 MB)</h2>

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
        <div className="footer-inner">
          <div className="footer-left">
            <p className="footer-copy">
              © {new Date().getFullYear()} Research Publications
            </p>
            <p className="footer-sub">Empowering open knowledge & scientific collaboration.</p>
          </div>

          <div className="footer-links" role="navigation" aria-label="social links">
            <a
              className="social-link"
              href="https://www.instagram.com/research.publications/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              {/* Instagram SVG */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Instagram</span>
            </a>

            <a
              className="social-link"
              href="https://chat.whatsapp.com/FGIqiZSWo2x4mucIFb5xJz"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              {/* WhatsApp SVG */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M21 12.1a9 9 0 1 0-2.6 6.2L22 22l-2.1-2.6A8.9 8.9 0 0 0 21 12.1z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 14c-.2.4-1 .8-1.4.8s-.6 0-1.1-.1a5 5 0 0 1-2.4-1.3 5 5 0 0 1-1.3-2.4c0-.5 0-.9-.1-1.1S10.4 8.2 10.8 8c.5-.2.8-.2 1.1-.2.3 0 .6 0 .9.1.3.1.6.2.9.3.3.1.5.3.8.5.2.2.4.3.5.6.1.2.2.5.3.8.1.3.1.6.1 1.1 0 .5-.1 1.2-.3 1.6z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;