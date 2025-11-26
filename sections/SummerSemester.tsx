"use client";

import { useEffect, useState } from "react";

const defaultText = `
Bu bölmədə yay semestrinin məqsədi, təşkil olunma qaydaları, neçə fənn
seçmək olacağı, ödəniş və qiymətləndirmə şərtləri ümumi şəkildə izah oluna bilər.
`;

const SummerSemester = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("summerSemesterText");
    if (saved && saved.trim().length > 0) setText(saved);
  }, []);

  return (
    <div className="section">
      <h2>Yay semestrinin təşkili</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default SummerSemester;
