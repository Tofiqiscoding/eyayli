"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function ChangeSpecialty() {
  const data = useUniversity();

  return (
    <div className="section">
      <h2>İxtisas / təhsil forması dəyişikliyi</h2>
      <div className="section-content">
        <p style={{ whiteSpace: "pre-wrap" }}>{data.changeSpecialty || "Default mətn..."}</p>
      </div>
    </div>
  );
}