"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar, { SectionKey } from "../components/Sidebar";
import { TextSearch } from 'lucide-react';

import "../sections/Sections.css";

import Uniinfo from "../sections/Uniinfo";
import GeneralProvisions from "../sections/GeneralProvisions";
import StudentCentered from "../sections/StudentCentered";
import TeachingOrganization from "../sections/TeachingOrganization";
import IndividualPlan from "../sections/IndividualPlan";
import SummerSemester from "../sections/SummerSemester";
import LectureAssessment from "../sections/LectureAssessment";
import SeminarLabAssessment from "../sections/SeminarLabAssessment";
import ColloquiumAssessment from "../sections/ColloquiumAssessment";
import ExamRules from "../sections/ExamRules";
import TheoreticalCriteria from "../sections/TheoreticalCriteria";
import PracticalCriteria from "../sections/PracticalCriteria";
import PracticalTasks from "../sections/PracticalTasks";
import PracticeOrganization from "../sections/PracticeOrganization";
import ChangeSpecialty from "../sections/ChangeSpecialty";
import TemporarySuspension from "../sections/TemporarySuspension";
import InstitutionExpulsion from "../sections/InstitutionExpulsion";
import Reinstatement from "../sections/Reinstatement";
import RightsDuties from "../sections/RightsDuties";
import DisciplineResponsibility from "../sections/DisciplineResponsibility";
import WarningCases from "../sections/WarningCases";
import ReprimandCases from "../sections/ReprimandCases";
import SevereReprimandCases from "../sections/SevereReprimandCases";
import ExpulsionCases from "../sections/ExpulsionCases";
import DisciplineProcedure from "../sections/DisciplineProcedure";
import LibraryServiceRules from "../sections/LibraryServiceRules";
import LibraryRightsDuties from "../sections/LibraryRightsDuties";
import ReadersRightsDuties from "../sections/ReadersRightsDuties";
import Encouragement from "../sections/Encouragement";
import Scholarships from "../sections/Scholarships";
import ExchangePrograms from "../sections/ExchangePrograms";
import StudentLoan from "../sections/StudentLoan";
import SocialSupport from "../sections/SocialSupport";
import Credits from "../sections/Credits";
import Concepts from "../sections/Concepts";

const SECTION_TITLES: Record<SectionKey, string> = {
  uni: "Universitet haqqında",
  general: "Ümumi müddəalar",
  studentCentered: "Tələbəyönümlü təhsil sistemi",
  teachingOrg: "Tədrisin təşkili",
  individualPlan: "Tələbənin fərdi tədris planı",
  summerSemester: "Yay semestrinin təşkili",

  lectureAssessment:
    "Mühazirə dərslərində fəal iştirak və tematik tapşırıqların qiymətləndirilməsi",
  seminarLabAssessment:
    "Seminar / laboratoriya nəticələri, layihə və referat işlərinin qiymətləndirilməsi",
  colloquiumAssessment:
    "Kollokviumların nəticələrinə görə balların hesablanması",

  examRules: "İmtahanların təşkili və keçirilməsi qaydaları",
  theoreticalCriteria: "Nəzəri sualın qiymət meyarları",
  practicalCriteria: "Praktiki sualın qiymət meyarları",
  practicalTasks: "Praktiki xarakterli tapşırıqların qiymətləndirilməsi",
  practiceOrganization: "Təcrübənin təşkili",

  changeSpecialty:
    "Təhsil müəssisəsinin / ixtisasın / təhsilalma formasının dəyişdirilməsi",
  temporarySuspension: "Tələbənin təhsilini müvəqqəti dayandırması",
  institutionExpulsion: "Təhsil müəssisəsindən xaric olma",
  reinstatement: "Təhsil müəssisəsinə bərpa olunma",

  rightsDuties: "Tələbənin hüquq və vəzifələri",
  disciplineResp: "İntizamın pozulmasına görə məsuliyyət",
  warningCases: "Xəbərdarlığın edildiyi hallar",
  reprimandCases: "Töhmətin edildiyi hallar",
  severeReprimandCases: "Sonuncu xəbərdarlıq / şiddətli töhmət",
  expulsionCases: "Universitetdən xaric edilmə halları",
  disciplineProcedure: "İntizam məsuliyyətinə cəlb etmə proseduru",

  libraryServiceRules: "Kitabxana xidməti qaydaları",
  libraryRightsDuties: "Kitabxananın hüquq və vəzifələri",
  readersRightsDuties: "Oxucuların hüquq və vəzifələri",

  encouragement: "Təhsildə müvəffəqiyyətə görə həvəsləndirmə",
  scholarships: "Təqaüdlərin təyin olunması",
  exchangePrograms: "Mübadilə proqramları",
  studentLoan: "Təhsil tələbə krediti",
  socialSupport:
    "Sosial baxımdan həssas ailələrin üzvü olan tələbələr üçün təhsil haqqı dəstəyi",

  credits: "Kredit sistemi",
  concepts: "Əsas anlayışlar",
};

type SearchResult = {
  key: SectionKey;
  title: string;
};

type HeaderSection = "home" | "about" | "contact";

export default function HomePage() {
  const [active, setActive] = useState<SectionKey>("uni");
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searchMode, setSearchMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [headerSection, setHeaderSection] = useState<HeaderSection>("home");

  
  useEffect(() => {
    const q = searchQuery.trim().toLowerCase();

    if (!q) {
      setResults([]);
      setSearchMode(false);
      return;
    }

    const found: SearchResult[] = Object.entries(SECTION_TITLES)
      .filter(([_, title]) => title.toLowerCase().includes(q))
      .map(([key, title]) => ({
        key: key as SectionKey,
        title,
      }));

    setResults(found);
    setSearchMode(true);
  }, [searchQuery]);

  const handleResultClick = (key: SectionKey) => {
    setHeaderSection("home");
    setActive(key);
    setSearchQuery("");
    setResults([]);
    setSearchMode(false);
    setIsSidebarOpen(false);
  };

  const handleSectionChange = (key: SectionKey) => {
    setHeaderSection("home");
    setActive(key);
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const handleHeaderNavigate = (section: HeaderSection) => {
    setHeaderSection(section);
    setIsSidebarOpen(false);
  };

  return (
    <>
      <Header onNavigate={handleHeaderNavigate} />

      {/* 🔽 Qalan hər şey padding-lə */}
      <div className="page-wrapper">
        {/* 🔍 BURGER + SEARCH BAR */}
        <div className="top-bar">
          <button
            className={`burger-btn ${isSidebarOpen ? "open" : ""}`}
            onClick={toggleSidebar}
            aria-label="Menyunu aç / bağla"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className="search-box">
            <span className="search-icon"><TextSearch /></span>
            <input
              type="text"
              placeholder="Bölmə adı üzrə axtar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        {/* 🔎 Axtarış nəticələri */}
        {searchMode && (
          <div className="search-results">
            {results.length === 0 ? (
              <p className="search-empty">Bu axtarışa uyğun bölmə tapılmadı.</p>
            ) : (
              <>
                <p className="search-info">
                  Tapılan bölmələr: {results.length} ədəd
                </p>
                <ul className="search-list">
                  {results.map((item) => (
                    <li key={item.key}>
                      <button
                        className="search-result-item"
                        onClick={() => handleResultClick(item.key)}
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}

        {/* === ƏSAS LAYOUT (SIDEBAR + CONTENT) === */}
        <div className="main-layout">
          {/* Sidebar */}
          <div className={`sidebar-wrapper ${isSidebarOpen ? "open" : ""}`}>
            <Sidebar activeSection={active} onChange={handleSectionChange} />
          </div>

          {/* Kontent */}
          <div className="main-content">
            {/* HEADER-DƏN GƏLƏN BÖLMƏLƏR */}
            {headerSection === "about" && (
              <div className="section">
                <h2>Haqqında</h2>
                <p>
                  Bu platforma Bakı Biznes Universitetinin tələbələri üçün
                  hazırlanmış rəqəmsal yaddaş kitabçasıdır. Burada universitetin
                  daxili qaydaları, tələbələrin hüquq və vəzifələri, kredit
                  sistemi və qiymətləndirmə mexanizmləri cəmlənmişdir.
                </p>
              </div>
            )}

            {headerSection === "contact" && (
              <div className="section">
                <h2>Əlaqə</h2>
                <p>
                  Suallarınız və təklifləriniz üçün Bakı Biznes Universitetinə
                  müraciət edə bilərsiniz:
                </p>
                <p>
                  Telefon: +994 12 000 00 00 <br />
                  Email: info@bbu.edu.az <br />
                  Ünvan: Bakı şəhəri, Bakı Biznes Universiteti
                </p>
              </div>
            )}

            {/* 📚 ƏSAS KİTAB BÖLMƏLƏRİ — yalnız "home" seçiləndə */}
            {headerSection === "home" && (
              <>
                {active === "uni" && <Uniinfo />}
                {active === "general" && <GeneralProvisions />}
                {active === "studentCentered" && <StudentCentered />}
                {active === "teachingOrg" && <TeachingOrganization />}
                {active === "individualPlan" && <IndividualPlan />}
                {active === "summerSemester" && <SummerSemester />}
                {active === "lectureAssessment" && <LectureAssessment />}
                {active === "seminarLabAssessment" && <SeminarLabAssessment />}
                {active === "colloquiumAssessment" && (
                  <ColloquiumAssessment />
                )}
                {active === "examRules" && <ExamRules />}
                {active === "theoreticalCriteria" && <TheoreticalCriteria />}
                {active === "practicalCriteria" && <PracticalCriteria />}
                {active === "practicalTasks" && <PracticalTasks />}
                {active === "practiceOrganization" && <PracticeOrganization />}
                {active === "changeSpecialty" && <ChangeSpecialty />}
                {active === "temporarySuspension" && (
                  <TemporarySuspension />
                )}
                {active === "institutionExpulsion" && (
                  <InstitutionExpulsion />
                )}
                {active === "reinstatement" && <Reinstatement />}
                {active === "rightsDuties" && <RightsDuties />}
                {active === "disciplineResp" && (
                  <DisciplineResponsibility />
                )}
                {active === "warningCases" && <WarningCases />}
                {active === "reprimandCases" && <ReprimandCases />}
                {active === "severeReprimandCases" && (
                  <SevereReprimandCases />
                )}
                {active === "expulsionCases" && <ExpulsionCases />}
                {active === "disciplineProcedure" && (
                  <DisciplineProcedure />
                )}
                {active === "libraryServiceRules" && <LibraryServiceRules />}
                {active === "libraryRightsDuties" && <LibraryRightsDuties />}
                {active === "readersRightsDuties" && <ReadersRightsDuties />}
                {active === "encouragement" && <Encouragement />}
                {active === "scholarships" && <Scholarships />}
                {active === "exchangePrograms" && <ExchangePrograms />}
                {active === "studentLoan" && <StudentLoan />}
                {active === "socialSupport" && <SocialSupport />}
                {active === "credits" && <Credits />}
                {active === "concepts" && <Concepts />}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
