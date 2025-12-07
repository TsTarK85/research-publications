import React from 'react';

export default function Hero({ file, setFile, uploading, handleUpload }) {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        
        {/* Left Side Content from Reference */}
        <div className="hero-text fade-in">
          <h1>Research Article Writing Assistance & Publication Support</h1>
          <p>
            Even the most talented of research professionals struggle with getting their work 
            and findings down in the form of a high-quality research article or paper. 
            We provide comprehensive support to help you publish in reputed journals.
          </p>
          <a href="#services" className="hero-btn">Explore Services</a>
        </div>

        {/* Right Side - Existing Upload Functionality */}
        <div className="upload-wrapper fade-in-delayed">
          <h2>Upload Your Research</h2>
          <div className="upload-box">
            <input
              type="file"
              id="fileInput"
              className="file-input"
              onChange={(e) => setFile(e.target.files[0])}
            />

            <label htmlFor="fileInput" className="file-label">
              {file ? file.name : "Click to Choose a File (Max 50MB)"}
            </label>

            <button
              className="upload-btn"
              onClick={handleUpload}
              disabled={uploading}
            >
              {uploading ? "Uploading..." : "Upload Securely"}
            </button>
            <p style={{fontSize: '0.8rem', color: 'var(--muted)', textAlign:'center'}}>
              Your data is 100% secure and confidential.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
