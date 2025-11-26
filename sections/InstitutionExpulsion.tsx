"use client";

import { useEffect, useState } from "react";

const defaultText = `
Bu bölmədə tələbənin təhsil müəssisəsindən xaric edilməsinə əsas
verən hallar və prosedur barədə ümumi məlumat verilə bilər. Bu,
qaydaları pozma, akademik borc, maliyyə öhdəliklərinin yerinə
yetirilməməsi və s. kimi səbəbləri əhatə edə bilər.

Burada həmçinin:

• Qərarın kim tərəfindən verilməsi
• Tələbəyə əvvəlcədən xəbərdarlıq olunması
• Apellyasiya (şikayət) imkanı
• Sənədlərin arxivləşdirilməsi və verilməsi

kimi məqamlar qeyd oluna bilər.
`;

const InstitutionExpulsion = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("institutionExpulsionText");
    if (saved && saved.trim().length > 0) setText(saved);
  }, []);

  return (
    <div className="section">
      <h2>Təhsil müəssisəsindən xaric olma</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default InstitutionExpulsion;