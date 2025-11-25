"use client";

import { useEffect, useState } from "react";

const defaultText = `
Bu bölmədə sonuncu xəbərdarlıq və şiddətli töhmət intizam tədbirlərinin
hansı hallarda tətbiq olunduğu göstərilir.
`;

const SevereReprimandCases = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("severeReprimandCasesText");
    if (saved && saved.trim().length > 0) {
      setText(saved);
    }
  }, []);

  return (
    <div className="section">
      <h2>Sonuncu xəbərdarlıq və şiddətli töhmət halları</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default SevereReprimandCases;
    