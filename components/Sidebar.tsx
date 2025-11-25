"use client";

import "./Sidebar.css";

export type SectionKey =
  | "uni"
  | "general"
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

      {/* Bu hissə silindi:
      <h3 className="sidebar-title">Menyu</h3>  */}

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
