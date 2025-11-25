"use client";

import { useEffect, useState } from "react";

const defaultText = `
Bu bölmədə universitetin fəaliyyəti, təhsil prosesinin təşkili və
tələbələrin ümumi statusu ilə bağlı əsas müddəalar göstərilə bilər.
`;

const GeneralProvisions = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("generalText");
    if (saved && saved.trim().length > 0) {
      setText(saved);
    }
  }, []);

  return (
    <div className="section">
      <h2>Ümumi müddəalar</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default GeneralProvisions;
