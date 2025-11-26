"use client";

import { useEffect, useState } from "react";

const defaultText = `
Bu bölmədə imtahanların təşkili və keçirilməsi qaydaları, imtahan cədvəllərinin
tərtibi, imtahan zalında davranış, imtahan müddəti, şəxsiyyətin təsdiqi, imtahana
buraxılma şərtləri və s. kimi ümumi prinsiplər qeyd oluna bilər.
`;

const ExamRules = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("examRulesText");
    if (saved && saved.trim().length > 0) setText(saved);
  }, []);

  return (
    <div className="section">
      <h2>İmtahanların təşkili və keçirilməsi qaydaları</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default ExamRules;
