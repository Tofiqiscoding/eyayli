"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function Credits() {
  const data = useUniversity();

  return (
    <div className="section">
      <h2>Kredit sistemi</h2>
      <div className="section-content">
        <p style={{ whiteSpace: "pre-wrap" }}>{data.credits || "Default mətn..."}</p>
      </div>
    </div>
  );
}