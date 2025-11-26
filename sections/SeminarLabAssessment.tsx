"use client";

import { useEffect, useState } from "react";

const defaultText = `
Bu bölmədə seminar və laboratoriya dərslərində tələbənin fəaliyyətinin,
layihə işlərinin, referatların hazırlanması və təqdimat bacarığının
qiymətləndirilməsi qaydaları açıqlana bilər.
Burada həm fərdi, həm də qrup şəklində işlərin meyarları qeyd oluna bilər.
`;

const SeminarLabAssessment = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("seminarLabAssessmentText");
    if (saved && saved.trim().length > 0) setText(saved);
  }, []);

  return (
    <div className="section">
      <h2>
        Seminar / laboratoriya dərsləri və layihə, referat işlərinin
        qiymətləndirilməsi
      </h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default SeminarLabAssessment;
    