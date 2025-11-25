"use client";

import { useEffect, useState } from "react";

const defaultText = `
Bu bölmədə tələbənin intizam məsuliyyətinə cəlb olunması zamanı tətbiq olunan
prosedur – araşdırma, izahat alınması, komissiya qərarı və s. mərhələlər qeyd edilə bilər.
`;

const DisciplineProcedure = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("disciplineProcedureText");
    if (saved && saved.trim().length > 0) setText(saved);
  }, []);

  return (
    <div className="section">
      <h2>İntizam məsuliyyətinə cəlb etmə proseduru</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default DisciplineProcedure;
