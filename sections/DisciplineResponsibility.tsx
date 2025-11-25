"use client";

import { useEffect, useState } from "react";

const defaultText = `
Bu bölmədə intizam qaydalarının pozulmasına görə tələbənin daşıdığı
məsuliyyət formaları ümumi şəkildə izah olunacaq.
`;

const DisciplineResponsibility = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("disciplineRespText");
    if (saved && saved.trim().length > 0) {
      setText(saved);
    }
  }, []);

  return (
    <div className="section">
      <h2>İntizamın pozulmasına görə məsuliyyət</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default DisciplineResponsibility;
