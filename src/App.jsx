import { useState } from "react";
import { supabase } from "./supabaseClient";
import "./styles.css"; 

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Guarantees from "./components/Guarantees";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  async function handleUpload() {
    if (!file) return alert("Please select a file");

    setUploading(true);

    const fileName = `${Date.now()}-${file.name}`;

    try {
      const { error } = await supabase.storage.from("research-files").upload(fileName, file);

      if (error) {
        throw error;
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

    } catch (error) {
      alert("Upload failed: " + error.message);
      console.error(error);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="app-root">
      <Navbar />
      
      <main>
        <Hero 
          file={file} 
          setFile={setFile} 
          uploading={uploading} 
          handleUpload={handleUpload} 
        />
        
        <Services />
        <Guarantees />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;