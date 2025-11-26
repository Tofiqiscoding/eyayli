"use client";

import { useEffect, useState } from "react";

const defaultText = `
Bu bölmədə əvvəl təhsil müəssisəsindən xaric olunmuş və ya
təhsilini dayandırmış tələbələrin təhsilə bərpa olunması qaydaları
barədə məlumat verilə bilər. Məsələn:

• Bərpa üçün müraciət müddəti
• Orta bal və akademik borc şərtləri
• Təhsil proqramının dəyişməsi halında uyğunlaşdırma qaydaları
• Hansi semestrdən davam etmə mexanizmi
• Bərpa haqqında əmrin rəsmiləşdirilməsi

və s. kimi məqamlar qeyd oluna bilər.
`;

const Reinstatement = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("reinstatementText");
    if (saved && saved.trim().length > 0) setText(saved);
  }, []);

  return (
    <div className="section">
      <h2>Təhsil müəssisəsinə bərpa olunma</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default Reinstatement;
