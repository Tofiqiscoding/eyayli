"use client";

import { useEffect, useState } from "react";

const defaultText = `
Bu bölmədə təhsilin telebəyönümlü olması, tələbənin fəal iştirakı,
öz məsuliyyətini dərk etməsi, müəllim–tələbə əməkdaşlığının gücləndirilməsi
kimi prinsiplər haqqında məlumat yerləşdirilə bilər.
`;

const StudentCentered = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("studentCenteredText");
    if (saved && saved.trim().length > 0) setText(saved);
  }, []);

  return (
    <div className="section">
      <h2>Tələbəyönümlü təhsil sistemi</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default StudentCentered;
