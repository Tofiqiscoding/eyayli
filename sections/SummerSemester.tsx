"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function SummerSemester() {
  const data = useUniversity();

  return (
    <div className="section">
      <h2>Yay semestrinin təşkili</h2>
      <div className="section-content">
        <p style={{ whiteSpace: "pre-wrap" }}>{data.summerSemester || "Default mətn..."}</p>
      </div>
    </div>
  );
}