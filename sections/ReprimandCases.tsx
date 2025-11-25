"use client";

import { useEffect, useState } from "react";

const defaultText = `
Bu bölmədə töhmət intizam tədbirinin tətbiq olunduğu hallar izah ediləcək.
`;

const ReprimandCases = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("reprimandCasesText");
    if (saved && saved.trim().length > 0) {
      setText(saved);
    }
  }, []);

  return (
    <div className="section">
      <h2>Töhmətin edildiyi hallar</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default ReprimandCases;
