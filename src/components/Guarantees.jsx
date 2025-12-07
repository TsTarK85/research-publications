import React from 'react';

const guarantees = [
  "Team of 500+ Ph.D. Experts",
  "100% Plagiarism Free Work",
  "On-Time Delivery",
  "High Quality Analysis",
  "24*7 Support & Enquiry",
  "Guaranteed Publication Support",
  "Confidentiality Assured",
  "Unlimited Revisions"
];

export default function Guarantees() {
  return (
    <section className="section" id="guarantees" style={{background: 'rgba(255,255,255,0.01)'}}>
      <div className="container">
        <h2 className="section-title"><span>Our Guarantees</span></h2>
        
        <div className="guarantees-list">
          {guarantees.map((item, i) => (
            <div className="guarantee-item" key={i}>
              <span className="g-icon">✓</span>
              <span className="g-text">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
