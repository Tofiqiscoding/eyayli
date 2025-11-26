"use client";

import "./Sidebar.css";

export type SectionKey =
  | "uni"
  | "general"
  | "studentCentered"
  | "teachingOrg"
  | "individualPlan"
  | "summerSemester"
  | "lectureAssessment"
  | "seminarLabAssessment"
  | "colloquiumAssessment"
  | "examRules"
  | "theoreticalCriteria"
  | "practicalCriteria"
  | "practicalTasks"
  | "practiceOrganization"
  | "changeSpecialty"
  | "temporarySuspension"
  | "institutionExpulsion"
  | "reinstatement"
  | "rightsDuties"
  | "disciplineResp"
  | "warningCases"
  | "reprimandCases"
  | "severeReprimandCases"
  | "expulsionCases"
  | "disciplineProcedure"
  | "libraryServiceRules"
  | "libraryRightsDuties"
  | "readersRightsDuties"
  | "encouragement"
  | "scholarships"
  | "exchangePrograms"
  | "studentLoan"
  | "socialSupport"
  | "credits"
  | "concepts";

interface Props {
  activeSection: SectionKey;
  onChange: (key: SectionKey) => void;
}

export default function Sidebar({ activeSection, onChange }: Props) {
  return (
    <aside className="sidebar">
      <button
        className={activeSection === "uni" ? "sidebar-item active" : "sidebar-item"}
        onClick={() => onChange("uni")}
      >
        Universitet haqqında
      </button>

      <button
        className={activeSection === "general" ? "sidebar-item active" : "sidebar-item"}
        onClick={() => onChange("general")}
      >
        Ümumi müddəalar
      </button>

      <button
        className={
          activeSection === "studentCentered" ? "sidebar-item active" : "sidebar-item"
        }
        onClick={() => onChange("studentCentered")}
      >
        Telebəyönümlü təhsil sistemi
      </button>

      <button
        className={activeSection === "teachingOrg" ? "sidebar-item active" : "sidebar-item"}
        onClick={() => onChange("teachingOrg")}
      >
        Tədrisin təşkili
      </button>

      <button
        className={activeSection === "individualPlan" ? "sidebar-item active" : "sidebar-item"}
        onClick={() => onChange("individualPlan")}
      >
        Fərdi tədris planı
      </button>

      <button
        className={
          activeSection === "summerSemester" ? "sidebar-item active" : "sidebar-item"
        }
        onClick={() => onChange("summerSemester")}
      >
        Yay semestrinin təşkili
      </button>

      {/* Qiymətləndirmə və imtahan blokları */}
      <button
        className={
          activeSection === "lectureAssessment" ? "sidebar-item active" : "sidebar-item"
        }
        onClick={() => onChange("lectureAssessment")}
      >
        Mühazirə iştirak & tematik tapşırıqlar
      </button>

      <button
        className={
          activeSection === "seminarLabAssessment"
            ? "sidebar-item active"
            : "sidebar-item"
        }
        onClick={() => onChange("seminarLabAssessment")}
      >
        Seminar / laboratoriya & layihələr
      </button>

      <button
        className={
          activeSection === "colloquiumAssessment"
            ? "sidebar-item active"
            : "sidebar-item"
        }
        onClick={() => onChange("colloquiumAssessment")}
      >
        Kollokvium balları
      </button>

      <button
        className={activeSection === "examRules" ? "sidebar-item active" : "sidebar-item"}
        onClick={() => onChange("examRules")}
      >
        İmtahanların təşkili
      </button>

      <button
        className={
          activeSection === "theoreticalCriteria" ? "sidebar-item active" : "sidebar-item"
        }
        onClick={() => onChange("theoreticalCriteria")}
      >
        Nəzəri sual meyarları
      </button>

      <button
        className={
          activeSection === "practicalCriteria" ? "sidebar-item active" : "sidebar-item"
        }
        onClick={() => onChange("practicalCriteria")}
      >
        Praktiki sual meyarları
      </button>

      <button
        className={
          activeSection === "practicalTasks" ? "sidebar-item active" : "sidebar-item"
        }
        onClick={() => onChange("practicalTasks")}
      >
        Praktiki tapşırıqların qiymətləndirilməsi
      </button>

      <button
        className={
          activeSection === "practiceOrganization"
            ? "sidebar-item active"
            : "sidebar-item"
        }
        onClick={() => onChange("practiceOrganization")}
      >
        Təcrübənin təşkili
      </button>

      {/* Tələbənin status dəyişikliyi blokları */}
      <button
        className={
          activeSection === "changeSpecialty" ? "sidebar-item active" : "sidebar-item"
        }
        onClick={() => onChange("changeSpecialty")}
      >
        İxtisas / təhsil forması dəyişikliyi
      </button>

      <button
        className={
          activeSection === "temporarySuspension"
            ? "sidebar-item active"
            : "sidebar-item"
        }
        onClick={() => onChange("temporarySuspension")}
      >
        Təhsilin müvəqqəti dayandırılması
      </button>

      <button
        className={
          activeSection === "institutionExpulsion"
            ? "sidebar-item active"
            : "sidebar-item"
        }
        onClick={() => onChange("institutionExpulsion")}
      >
        Təhsil müəssisəsindən xaric olma
      </button>

      <button
        className={
          activeSection === "reinstatement" ? "sidebar-item active" : "sidebar-item"
        }
        onClick={() => onChange("reinstatement")}
      >
        Təhsil müəssisəsinə bərpa
      </button>

      {/* Qalan bölmələr */}
      <button
        className={activeSection === "rightsDuties" ? "sidebar-item active" : "sidebar-item"}
        onClick={() => onChange("rightsDuties")}
      >
        Tələbənin hüquq və vəzifələri
      </button>

      <button
        className={activeSection === "disciplineResp" ? "sidebar-item active" : "sidebar-item"}
        onClick={() => onChange("disciplineResp")}
      >
        İntizamın pozulmasına görə məsuliyyət
      </button>

      <button
        className={activeSection === "warningCases" ? "sidebar-item active" : "sidebar-item"}
        onClick={() => onChange("warningCases")}
      >
        Xəbərdarlığın edildiyi hallar
      </button>

      <button
        className={activeSection === "reprimandCases" ? "sidebar-item active" : "sidebar-item"}
        onClick={() => onChange("reprimandCases")}
      >
        Töhmətin edildiyi hallar
      </button>

      <button
        className={
          activeSection === "severeReprimandCases"
            ? "sidebar-item active"
            : "sidebar-item"
        }
        onClick={() => onChange("severeReprimandCases")}
      >
        Sonuncu xəbərdarlıq / şiddətli töhmət
      </button>

      <button
        className={activeSection === "expulsionCases" ? "sidebar-item active" : "sidebar-item"}
        onClick={() => onChange("expulsionCases")}
      >
        Universitetdən xaric edilmə halları
      </button>

      <button
        className={
          activeSection === "disciplineProcedure" ? "sidebar-item active" : "sidebar-item"
        }
        onClick={() => onChange("disciplineProcedure")}
      >
        İntizam proseduru
      </button>

      <button
        className={
          activeSection === "libraryServiceRules" ? "sidebar-item active" : "sidebar-item"
        }
        onClick={() => onChange("libraryServiceRules")}
      >
        Kitabxana xidməti qaydaları
      </button>

      <button
        className={
          activeSection === "libraryRightsDuties" ? "sidebar-item active" : "sidebar-item"
        }
        onClick={() => onChange("libraryRightsDuties")}
      >
        Kitabxananın hüquq və vəzifələri
      </button>

      <button
        className={
          activeSection === "readersRightsDuties" ? "sidebar-item active" : "sidebar-item"
        }
        onClick={() => onChange("readersRightsDuties")}
      >
        Oxucuların hüquq və vəzifələri
      </button>

      <button
        className={
          activeSection === "encouragement" ? "sidebar-item active" : "sidebar-item"
        }
        onClick={() => onChange("encouragement")}
      >
        Həvəsləndirmə
      </button>

      <button
        className={activeSection === "scholarships" ? "sidebar-item active" : "sidebar-item"}
        onClick={() => onChange("scholarships")}
      >
        Təqaüdlər
      </button>

      <button
        className={
          activeSection === "exchangePrograms" ? "sidebar-item active" : "sidebar-item"
        }
        onClick={() => onChange("exchangePrograms")}
      >
        Mübadilə proqramları
      </button>

      <button
        className={activeSection === "studentLoan" ? "sidebar-item active" : "sidebar-item"}
        onClick={() => onChange("studentLoan")}
      >
        Təhsil tələbə krediti
      </button>

      <button
        className={activeSection === "socialSupport" ? "sidebar-item active" : "sidebar-item"}
        onClick={() => onChange("socialSupport")}
      >
        Sosial dəstək
      </button>

      <button
        className={activeSection === "credits" ? "sidebar-item active" : "sidebar-item"}
        onClick={() => onChange("credits")}
      >
        Kredit sistemi
      </button>

      <button
        className={activeSection === "concepts" ? "sidebar-item active" : "sidebar-item"}
        onClick={() => onChange("concepts")}
      >
        Əsas anlayışlar
      </button>
    </aside>
  );
}
