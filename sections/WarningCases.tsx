"use client";

import { useEffect, useState } from "react";

const defaultText = `
Bu bölmədə tələbəyə xəbərdarlıq tədbirinin tətbiq olunduğu hallar sadalanacaq.
Məsələn, yüngül intizam pozuntuları və s.
`;

const WarningCases = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("warningCasesText");
    if (saved && saved.trim().length > 0) {
      setText(saved);
    }
  }, []);

  return (
    <div className="section">
      <h2>Xəbərdarlığın edildiyi hallar</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default WarningCases;
