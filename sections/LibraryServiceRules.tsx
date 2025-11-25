"use client";

import { useEffect, useState } from "react";

const defaultText = `
Bu bölmədə universitet kitabxanasından istifadə qaydaları, iş saatları,
kitabların götürülmə və qaytarılma şərtləri qeyd oluna bilər.
`;

const LibraryServiceRules = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("libraryServiceRulesText");
    if (saved && saved.trim().length > 0) setText(saved);
  }, []);

  return (
    <div className="section">
      <h2>Kitabxana xidməti qaydaları</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default LibraryServiceRules;
