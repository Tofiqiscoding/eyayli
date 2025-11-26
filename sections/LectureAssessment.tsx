"use client";

import { useEffect, useState } from "react";

const defaultText = `
Bu bölmədə mühazirə dərslərində tələbənin fəal iştirakı, dərs prosesində
suallara cavab verməsi, mövzu üzrə verilən tematik tapşırıqları vaxtında
və keyfiyyətli şəkildə yerinə yetirməsi əsasında qiymətləndirmə
prinsipləri barədə məlumat verilə bilər.
`;

const LectureAssessment = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("lectureAssessmentText");
    if (saved && saved.trim().length > 0) setText(saved);
  }, []);

  return (
    <div className="section">
      <h2>
        Seminar və Laboratoriya Dərslərinin Qiymətləndirilməsi Sistemi
      </h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default LectureAssessment;
 