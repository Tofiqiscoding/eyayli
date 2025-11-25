"use client";

import { useEffect, useState } from "react";

const defaultText = `
Bu bölmədə tələbə mübadilə proqramları, xarici universitetlərlə əməkdaşlıq
və həmin proqramlarda iştirak şərtləri barədə məlumat verilə bilər.
`;

const ExchangePrograms = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("exchangeProgramsText");
    if (saved && saved.trim().length > 0) setText(saved);
  }, []);

  return (
    <div className="section">
      <h2>Mübadilə proqramları</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default ExchangePrograms;
