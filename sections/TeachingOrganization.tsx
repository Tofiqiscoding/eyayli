"use client";

import { useEffect, useState } from "react";

const defaultText = `
Bu bölmədə tədrisin semestrlər üzrə təşkili, dərs cədvəlləri, həftəlik
yük, fənlərin növləri (mühazirə, seminar, laboratoriya və s.) haqqında
ümumi məlumat verilə bilər.
`;

const TeachingOrganization = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("teachingOrgText");
    if (saved && saved.trim().length > 0) setText(saved);
  }, []);

  return (
    <div className="section">
      <h2>Tədrisin təşkili</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default TeachingOrganization;
