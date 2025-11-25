"use client";

import { useEffect, useState } from "react";

const defaultText = `
Bu bölmədə tələbənin universitetdən xaric edilməsinə əsas verən hallar
ümumi formada qeyd edilə bilər.
`;

const ExpulsionCases = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("expulsionCasesText");
    if (saved && saved.trim().length > 0) {
      setText(saved);
    }
  }, []);

  return (
    <div className="section">
      <h2>Universitetdən xaric edilmə halları</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default ExpulsionCases;
