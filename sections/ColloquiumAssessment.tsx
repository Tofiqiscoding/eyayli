"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function ColloquiumAssessment() {
  const data = useUniversity();

  return (
    <div className="section">
      <h2>Kollokvium nəticələrinə görə balların hesablanması</h2>
      <div className="section-content">
        <p style={{ whiteSpace: "pre-wrap" }}>{data.colloquiumAssessment || "Default mətn..."}</p>
      </div>
    </div>
  );
}