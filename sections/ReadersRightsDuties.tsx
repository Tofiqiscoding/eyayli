"use client";

import { useEffect, useState } from "react";

const defaultText = `
Bu bölmədə oxucuların (tələbələrin) kitabxanadan istifadə hüquqları və
onların üzərinə düşən məsuliyyətlər (məsələn, kitabları vaxtında qaytarmaq)
izah oluna bilər.
`;

const ReadersRightsDuties = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("readersRightsDutiesText");
    if (saved && saved.trim().length > 0) setText(saved);
  }, []);

  return (
    <div className="section">
      <h2>Oxucuların hüquq və vəzifələri</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default ReadersRightsDuties;
