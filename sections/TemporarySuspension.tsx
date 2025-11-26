"use client";

import { useEffect, useState } from "react";

const defaultText = `
Bu bölmədə tələbənin təhsilini müvəqqəti dayandırması (akademik
məzuniyyət və ya digər hallarda fasilə) ilə bağlı qaydalar qeyd
oluna bilər. Məsələn:

• Müraciət üçün əsas səbəblər (sağlamlıq, ailə vəziyyəti və s.)
• Müraciət forması və təqdim olunmalı sənədlər
• Fasilənin müddəti və maksimum limit
• Fənlərin və kreditlərin statusu
• Təhsil bərpa olunduqda davam etmə qaydaları
`;

const TemporarySuspension = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("temporarySuspensionText");
    if (saved && saved.trim().length > 0) setText(saved);
  }, []);

  return (
    <div className="section">
      <h2>Tələbənin təhsilini müvəqqəti dayandırması</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default TemporarySuspension;
