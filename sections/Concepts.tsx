"use client";

import { useEffect, useState } from "react";

const defaultText = `
Bu bölmədə tələbələr üçün əsas anlayışlar, terminlər və tez-tez işlənən ifadələr
sadə dildə izah oluna bilər. Məsələn: kredit, semestr, akademik borc,
kurrikulum və s. haqqında qısa məlumatlar.
`;

const Concepts = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("conceptsText");
    if (saved && saved.trim().length > 0) {
      setText(saved);
    }
  }, []);

  return (
    <div className="section">
      <h2>Əsas anlayışlar</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default Concepts;
