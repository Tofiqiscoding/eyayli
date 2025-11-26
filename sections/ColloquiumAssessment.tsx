"use client";

import { useEffect, useState } from "react";

const defaultText = `
Bu bölmədə kollokviumların keçirilmə qaydası, sual sayı, qiymətləndirmə
mezonları və əldə olunan nəticələrə əsasən balların hesablanması haqqında
ümumi məlumat verilə bilər.
`;

const ColloquiumAssessment = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("colloquiumAssessmentText");
    if (saved && saved.trim().length > 0) setText(saved);
  }, []);

  return (
    <div className="section">
      <h2>Kollokvium nəticələrinə görə balların hesablanması</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default ColloquiumAssessment;