"use client";

import { useEffect, useState } from "react";

const defaultText = `
Bu bölmədə sosial baxımdan həssas əhali qruplarına aid ailələrin üzvü olan
tələbələr üçün təhsil haqqının ödənilməsi ilə bağlı güzəştlər və mexanizmlər
ümumi şəkildə izah oluna bilər.
`;

const SocialSupport = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("socialSupportText");
    if (saved && saved.trim().length > 0) setText(saved);
  }, []);

  return (
    <div className="section">
      <h2>Sosial həssas qruplar üçün təhsil haqqı dəstəyi</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default SocialSupport;
