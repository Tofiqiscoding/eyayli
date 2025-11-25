"use client";

import { useEffect, useState } from "react";

const defaultText = `
Bu bölmədə təhsildə yüksək nəticə göstərən tələbələrin necə həvəsləndirildiyi –
təşəkkür, fəxri fərman, əlavə imkanlar və s. haqqında məlumat verilə bilər.
`;

const Encouragement = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("encouragementText");
    if (saved && saved.trim().length > 0) setText(saved);
  }, []);

  return (
    <div className="section">
      <h2>Təhsildə müvəffəqiyyətə görə həvəsləndirmə</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default Encouragement;
