"use client";

import { useEffect, useState } from "react";

const defaultText = `
Bu bölmədə təhsil tələbə kreditləri, onların şərtləri, geri ödəniş qaydaları
və kimlərin bu imkandan yararlana biləcəyi haqqında ümumi məlumat verilə bilər.
`;

const StudentLoan = () => {
  const [text, setText] = useState(defaultText.trim());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("studentLoanText");
    if (saved && saved.trim().length > 0) setText(saved);
  }, []);

  return (
    <div className="section">
      <h2>Təhsil tələbə krediti</h2>
      <p style={{ whiteSpace: "pre-line" }}>{text}</p>
    </div>
  );
};

export default StudentLoan;
