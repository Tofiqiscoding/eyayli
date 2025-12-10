"use client";
import { useUniversity } from "@/contexts/UniversityContext";

export default function Uniinfo() {
  const data = useUniversity();

  return (
    <div className="section">
      <h2>Universitet haqqında məlumat</h2>
      <div className="section-content">
        {data.aboutUniversity ? (
          <p style={{ whiteSpace: "pre-wrap" }}>{data.aboutUniversity}</p>
        ) : (
          <p>Default mətn...</p>
        )}
      </div>
    </div>
  );
}