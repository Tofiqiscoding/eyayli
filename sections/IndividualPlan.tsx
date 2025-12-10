"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function IndividualPlan() {
  const data = useUniversity();

  return (
    <div className="section">
      <h2>Fərdi tədris planı</h2>
      <div className="section-content">
        <p style={{ whiteSpace: "pre-wrap" }}>{data.individualCurriculum || "Default mətn..."}</p>
      </div>
    </div>
  );
}