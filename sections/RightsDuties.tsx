"use client";

import { useEffect, useState } from "react";

const defaultText = `
Bu bölmədə tələbələrin həm hüquqları, həm də vəzifələri bir yerdə göstərilir.
Məsələn:
• Təhsil almaq və keyfiyyətli dərs tələb etmək hüququ;
• Universitetin daxili intizam qaydalarına riayət etmək vəzifəsi və s.
`;

const RightsDuties = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("rightsDutiesText");
    if (saved && saved.trim().length > 0) {
      setText(saved);
    }
  }, []);

  return (
    <div className="section">
      <h2>Tələbənin hüquq və vəzifələri</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default RightsDuties;
