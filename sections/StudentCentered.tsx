"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function StudentCentered() {
  const data = useUniversity();

  return (
    <div className="section">
      <h2>Tələbəyönümlü təhsil sistemi</h2>
      <div className="section-content">
        <p style={{ whiteSpace: "pre-wrap" }}>{data.studentOrientedSystem || "Default mətn..."}</p>
      </div>
    </div>
  );
} 