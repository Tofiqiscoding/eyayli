"use client";

import { useEffect, useState } from "react";

const defaultText = `
Bu bölmədə kitabxananın hüquqları (fondun qorunması, qaydaların tələb olunması və s.)
və vəzifələri (oxuculara xidmət, məlumat təminatı və s.) ümumi şəkildə verilə bilər.
`;

const LibraryRightsDuties = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("libraryRightsDutiesText");
    if (saved && saved.trim().length > 0) setText(saved);
  }, []);

  return (
    <div className="section">
      <h2>Kitabxananın hüquq və vəzifələri</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default LibraryRightsDuties;
