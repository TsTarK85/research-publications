import React from 'react';

const reviews = [
  { name: "Ms. Sanchita Kapoor", text: "The team helped me publish my paper in a Q1 journal. Their guidance on the statistics part was exceptional." },
  { name: "Mr. Vinson Joshua", text: "I was struggling with my thesis for months. Research Publications streamlined the process and I completed it on time." },
  { name: "Ms. Ankita Sharma", text: "Professional and prompt. They rewrote my manuscript to remove plagiarism completely. Highly recommended." },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title"><span>Testimonials</span></h2>
        <div className="testimonials-row">
          {reviews.map((r, i) => (
            <div className="testimonial-card" key={i}>
              <p className="t-quote">"{r.text}"</p>
              <p className="t-author">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
