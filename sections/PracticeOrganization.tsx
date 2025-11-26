"use client";

import { useEffect, useState } from "react";

const defaultText = `
Bu bölmədə istehsalat, pedaqoji və ya digər növ təcrübənin təşkili qaydaları,
təcrübənin müddəti, baza müəssisələrin seçilməsi, tələbənin təcrübə
proqramına uyğun fəaliyyət göstərməsi, rəhbər müəllim və kuratorun rolu,
hesabatların tərtibi və yekun qiymətləndirilmə mexanizmi barədə məlumat
yerləşdirilə bilər.
`;

const PracticeOrganization = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("practiceOrganizationText");
    if (saved && saved.trim().length > 0) setText(saved);
  }, []);

  return (
    <div className="section">
      <h2>Təcrübənin təşkili</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default PracticeOrganization;
