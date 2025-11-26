"use client";

import { useEffect, useState } from "react";

const defaultText = `
Bu bölmədə nəzəri sualların qiymətləndirilməsi üçün istifadə olunan meyarlar,
tam cavab, qismən cavab və yanlış cavab üçün bal paylanması, anlayışların
dəqiqliyi, məntiqi ardıcıllıq və terminlərin düzgün işlədilməsi kimi
kriteriyalar qeyd oluna bilər.
`;

const TheoreticalCriteria = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("theoreticalCriteriaText");
    if (saved && saved.trim().length > 0) setText(saved);
  }, []);

  return (
    <div className="section">
      <h2>Nəzəri sualın qiymət meyarları</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default TheoreticalCriteria;
