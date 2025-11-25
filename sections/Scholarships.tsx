"use client";

import { useEffect, useState } from "react";

const defaultText = `
Bu bölmədə dövlət və ya universitet təqaüdlərinin təyin olunma qaydası,
meayarlar və müddətləri ümumi şəkildə qeyd oluna bilər.
`;

const Scholarships = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("scholarshipsText");
    if (saved && saved.trim().length > 0) setText(saved);
  }, []);

  return (
    <div className="section">
      <h2>Təqaüdlərin təyin olunması</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default Scholarships;
