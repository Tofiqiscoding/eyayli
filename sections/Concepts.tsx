"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function Concepts() {
  const data = useUniversity();

  return (
    <div className="section">
      <h2>Əsas anlayışlar</h2>
      <div className="section-content">
        <p style={{ whiteSpace: "pre-wrap" }}>{data.concepts || "Default mətn..."}</p>
      </div>
    </div>
  );
}