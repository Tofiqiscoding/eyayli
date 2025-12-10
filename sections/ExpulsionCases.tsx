"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function ExpulsionCases() {
  const data = useUniversity();

  return (
    <div className="section">
      <h2>Universitetdən xaric edilmə halları</h2>
      <div className="section-content">
        <p style={{ whiteSpace: "pre-wrap" }}>{data.expulsionCases || "Default mətn..."}</p>
      </div>
    </div>
  );
}