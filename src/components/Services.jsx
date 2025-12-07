import React from 'react';

const services = [
  { title: "Review Article Writing", desc: "Expert assistance in framing high-quality review articles from extensive literature surveys." },
  { title: "Research Article Writing", desc: "Drafting original research papers with proper methodology and results interpretation." },
  { title: "Thesis / Dissertation", desc: "End-to-end support for Masters and PhD thesis writing and formatting." },
  { title: "Journal Publications", desc: "Assistance in publishing in Scopus, SCI, and WoS indexed journals." },
  { title: "PhD Assistance", desc: "Complete guidance from topic selection to final defense." },
  { title: "Proposal Writing", desc: "Crafting winning research proposals for grants and university applications." },
  { title: "Plagiarism Removal", desc: "Rewriting content to ensure <10% similarity index using advanced tools." },
  { title: "Proofreading & Editing", desc: "Grammar check, formatting, and language polishing by native experts." },
  { title: "Data Analysis", desc: "Statistical analysis using SPSS, Python, R, and MATLAB." },
  { title: "Patent Filing", desc: "Support for drafting and filing patents for your innovations." },
  { title: "Implementation", desc: "Code development and simulation results for technical projects." },
  { title: "Translation Services", desc: "Translating research work effectively into English for global publication." },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <h2 className="section-title"><span>Our Services</span></h2>
        
        <div className="services-grid">
          {services.map((s, index) => (
            <div className="service-card" key={index}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
