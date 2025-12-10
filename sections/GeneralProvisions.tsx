"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function GeneralProvisions() {
  const data = useUniversity();

  return (
    <div className="section">
      <h2>Ümumi müddəalar</h2>
      <div className="section-content">
        <p style={{ whiteSpace: "pre-wrap" }}>{data.generalTerms || "Default mətn..."}</p>
      </div>
    </div>
  );
}