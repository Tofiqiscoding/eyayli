"use client";

import { useEffect, useState } from "react";

const defaultText = `
Bu bölmədə tələbələr tərəfindən təhsil müəssisəsinin, ixtisasın
və ya təhsilalma formasının (əyani/qiyabi və s.) dəyişdirilməsi
qaydaları barədə ümumi məlumat verilə bilər. Məsələn:

• Müraciətin hansı tarixə qədər edilməsi
• Tələb olunan sənədlər
• Akademik borc və orta bal tələbləri
• Fakültə / dekanlıq və qəbul komissiyasının rolu
• Dəyişiklik qərarının rəsmiləşdirilməsi və elektron sistemdə qeydiyyat
`;

const ChangeSpecialty = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("changeSpecialtyText");
    if (saved && saved.trim().length > 0) setText(saved);
  }, []);

  return (
    <div className="section">
      <h2>
        Təhsil müəssisəsinin / ixtisasın / təhsilalma formasının dəyişdirilməsi
      </h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default ChangeSpecialty;
