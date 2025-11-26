"use client";

import { useEffect, useState } from "react";

const defaultText = `
Bu bölmədə praktiki xarakterli tapşırıqların (laborator işlər, layihələr,
praktik hesablamalar, proqramlaşdırma tapşırıqları və s.) qiymətləndirilməsi
qaydaları qeyd oluna bilər. Burada işin tamlığı, özünə-məxsusluq, texniki
düzgünlük, tərtibat və təqdimat keyfiyyəti kimi meyarlar vurğulana bilər.
`;

const PracticalTasks = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("practicalTasksText");
    if (saved && saved.trim().length > 0) setText(saved);
  }, []);

  return (
    <div className="section">
      <h2>Praktiki xarakterli tapşırıqların qiymətləndirilməsi</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default PracticalTasks;
