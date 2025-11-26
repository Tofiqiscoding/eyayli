"use client";

import { useEffect, useState } from "react";

const defaultText = `
Bu bölmədə praktiki sualların qiymətləndirilməsi üçün meyarlar açıqlana bilər.
Məsələn, hesablama dəqiqliyi, alqoritmin düzgün qurulması, nəticənin
əsaslandırılması, vaxtdan düzgün istifadə, sxem, cədvəl və qrafiklərin düzgün
tərtibi və s. kimi kriteriyalar göstərilə bilər.
`;

const PracticalCriteria = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("practicalCriteriaText");
    if (saved && saved.trim().length > 0) setText(saved);
  }, []);

  return (
    <div className="section">
      <h2>Praktiki sualın qiymət meyarları</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default PracticalCriteria;
