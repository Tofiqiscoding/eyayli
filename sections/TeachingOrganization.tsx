"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function TeachingOrganization() {
  const data = useUniversity();

  return (
    <div className="section">
      <h2>Tədrisin təşkili</h2>
      <div className="section-content">
        <p style={{ whiteSpace: "pre-wrap" }}>{data.courseOrganization || "Default mətn..."}</p>
      </div>
    </div>
  );
}