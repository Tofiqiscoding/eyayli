"use client";

import { useEffect, useState } from "react";

const defaultText = `
Bu bölmədə tələbənin fərdi tədris planının tərtib olunması, fənlərin
seçilməsi, məsləhətçi müəllimlə birlikdə planlaşdırma prosesi haqqında
məlumat yerləşdirilə bilər.
`;

const IndividualPlan = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("individualPlanText");
    if (saved && saved.trim().length > 0) setText(saved);
  }, []);

  return (
    <div className="section">
      <h2>Tələbənin fərdi tədris planı</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default IndividualPlan;
