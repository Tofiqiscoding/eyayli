"use client";

import { useState, useEffect } from "react";
import "./admin.css";

// API URL
const API_URL = "http://localhost:5013/api/university";

export default function AdminPage() {
  // Login
  const [isLogged, setIsLogged] = useState(false);
  const [loginUser, setLoginUser] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [loginError, setLoginError] = useState("");

  // Bölmə mətnləri
  const [uniText, setUniText] = useState("");
  const [generalText, setGeneralText] = useState("");
  const [studentCenteredText, setStudentCenteredText] = useState("");
  const [teachingOrgText, setTeachingOrgText] = useState("");
  const [individualPlanText, setIndividualPlanText] = useState("");
  const [summerSemesterText, setSummerSemesterText] = useState("");

  const [lectureAssessmentText, setLectureAssessmentText] = useState("");
  const [seminarLabAssessmentText, setSeminarLabAssessmentText] = useState("");
  const [colloquiumAssessmentText, setColloquiumAssessmentText] = useState("");

  const [examRulesText, setExamRulesText] = useState("");
  const [theoreticalCriteriaText, setTheoreticalCriteriaText] = useState("");
  const [practicalCriteriaText, setPracticalCriteriaText] = useState("");
  const [practicalTasksText, setPracticalTasksText] = useState("");
  const [practiceOrganizationText, setPracticeOrganizationText] = useState("");

  const [changeSpecialtyText, setChangeSpecialtyText] = useState("");
  const [temporarySuspensionText, setTemporarySuspensionText] = useState("");
  const [institutionExpulsionText, setInstitutionExpulsionText] = useState("");
  const [reinstatementText, setReinstatementText] = useState("");

  const [rightsDutiesText, setRightsDutiesText] = useState("");
  const [disciplineRespText, setDisciplineRespText] = useState("");
  const [warningCasesText, setWarningCasesText] = useState("");
  const [reprimandCasesText, setReprimandCasesText] = useState("");
  const [severeReprimandCasesText, setSevereReprimandCasesText] = useState("");
  const [expulsionCasesText, setExpulsionCasesText] = useState("");
  const [disciplineProcedureText, setDisciplineProcedureText] = useState("");
  const [libraryServiceRulesText, setLibraryServiceRulesText] = useState("");
  const [libraryRightsDutiesText, setLibraryRightsDutiesText] = useState("");
  const [readersRightsDutiesText, setReadersRightsDutiesText] = useState("");
  const [encouragementText, setEncouragementText] = useState("");
  const [scholarshipsText, setScholarshipsText] = useState("");
  const [exchangeProgramsText, setExchangeProgramsText] = useState("");
  const [studentLoanText, setStudentLoanText] = useState("");
  const [socialSupportText, setSocialSupportText] = useState("");
  const [creditsText, setCreditsText] = useState("");
  const [conceptsText, setConceptsText] = useState("");
  const [saved, setSaved] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginUser === "admin" && loginPass === "admin123") {
      setIsLogged(true);
      setLoginError("");
      setLoginUser("");
      setLoginPass("");
    } else {
      setLoginError("İstifadəçi adı və ya şifrə yanlışdır.");
    }
  };

  // API-dən məlumat yüklə
  const loadFromAPI = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      
      // State-ləri doldur
      setUniText(data.aboutUniversity || "");
      setGeneralText(data.generalTerms || "");
      setStudentCenteredText(data.studentOrientedSystem || "");
      setTeachingOrgText(data.courseOrganization || "");
      setIndividualPlanText(data.individualCurriculum || "");
      setSummerSemesterText(data.summerSemester || "");
      
      setLectureAssessmentText(data.lectureAssessment || "");
      setSeminarLabAssessmentText(data.seminarLabAssessment || "");
      setColloquiumAssessmentText(data.colloquiumAssessment || "");
      
      setExamRulesText(data.examRules || "");
      setTheoreticalCriteriaText(data.theoreticalCriteria || "");
      setPracticalCriteriaText(data.practicalCriteria || "");
      setPracticalTasksText(data.practicalTasks || "");
      setPracticeOrganizationText(data.practiceOrganization || "");
      
      setChangeSpecialtyText(data.changeSpecialty || "");
      setTemporarySuspensionText(data.temporarySuspension || "");
      setInstitutionExpulsionText(data.institutionExpulsion || "");
      setReinstatementText(data.reinstatement || "");
      
      setRightsDutiesText(data.rightsDuties || "");
      setDisciplineRespText(data.disciplineResp || "");
      setWarningCasesText(data.warningCases || "");
      setReprimandCasesText(data.reprimandCases || "");
      setSevereReprimandCasesText(data.severeReprimandCases || "");
      setExpulsionCasesText(data.expulsionCases || "");
      setDisciplineProcedureText(data.disciplineProcedure || "");
      
      setLibraryServiceRulesText(data.libraryServiceRules || "");
      setLibraryRightsDutiesText(data.libraryRightsDuties || "");
      setReadersRightsDutiesText(data.readersRightsDuties || "");
      
      setEncouragementText(data.encouragement || "");
      setScholarshipsText(data.scholarships || "");
      setExchangeProgramsText(data.exchangePrograms || "");
      setStudentLoanText(data.studentLoan || "");
      setSocialSupportText(data.socialSupport || "");
      
      setCreditsText(data.credits || "");
      setConceptsText(data.concepts || "");
      
      console.log("✅ Məlumatlar API-dən yükləndi");
    } catch (error) {
      console.error("❌ Yükləmə xətası:", error);
    }
  };

  // Login olanda məlumatları yüklə
  useEffect(() => {
    if (!isLogged) return;
    loadFromAPI();
  }, [isLogged]);

  // Saxlama funksiyası
  const handleSave = async () => {
    try {
      const data = {
        aboutUniversity: uniText,
        generalTerms: generalText,
        studentOrientedSystem: studentCenteredText,
        courseOrganization: teachingOrgText,
        individualCurriculum: individualPlanText,
        summerSemester: summerSemesterText,
        
        lectureAssessment: lectureAssessmentText,
        seminarLabAssessment: seminarLabAssessmentText,
        colloquiumAssessment: colloquiumAssessmentText,
        
        examRules: examRulesText,
        theoreticalCriteria: theoreticalCriteriaText,
        practicalCriteria: practicalCriteriaText,
        practicalTasks: practicalTasksText,
        practiceOrganization: practiceOrganizationText,
        
        changeSpecialty: changeSpecialtyText,
        temporarySuspension: temporarySuspensionText,
        institutionExpulsion: institutionExpulsionText,
        reinstatement: reinstatementText,
        
        rightsDuties: rightsDutiesText,
        disciplineResp: disciplineRespText,
        warningCases: warningCasesText,
        reprimandCases: reprimandCasesText,
        severeReprimandCases: severeReprimandCasesText,
        expulsionCases: expulsionCasesText,
        disciplineProcedure: disciplineProcedureText,
        
        libraryServiceRules: libraryServiceRulesText,
        libraryRightsDuties: libraryRightsDutiesText,
        readersRightsDuties: readersRightsDutiesText,
        
        encouragement: encouragementText,
        scholarships: scholarshipsText,
        exchangePrograms: exchangeProgramsText,
        studentLoan: studentLoanText,
        socialSupport: socialSupportText,
        
        credits: creditsText,
        concepts: conceptsText
      };

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
        console.log("✅ Saxlanıldı:", result.message);
      } else {
        alert("❌ Xəta baş verdi!");
      }
    } catch (error) {
      console.error("❌ Saxlama xətası:", error);
      alert("❌ Bağlantı xətası! Backend işləyir?");
    }
  };

  if (!isLogged) {
    return (
      <section className="admin-wrapper">
        <h2 className="admin-title">Admin giriş</h2>
        <p className="admin-note">
          Admin panelə daxil olmaq üçün istifadəçi adı və şifrəni daxil et.
        </p>

        <form
          onSubmit={handleLogin}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            maxWidth: "320px",
          }}
        >
          <input
            type="text"
            placeholder="İstifadəçi adı"
            value={loginUser}
            onChange={(e) => setLoginUser(e.target.value)}
            className="admin-textarea"
            style={{ resize: "none" }}
          />
          <input
            type="password"
            placeholder="Şifrə"
            value={loginPass}
            onChange={(e) => setLoginPass(e.target.value)}
            className="admin-textarea"
            style={{ resize: "none" }}
          />

          {loginError && (
            <span style={{ color: "red", fontSize: "13px" }}>{loginError}</span>
          )}

          <button type="submit" className="admin-save-btn">
            Daxil ol
          </button>
        </form>
      </section>
    );
  }

  return (
    <section className="admin-wrapper">
      <h2 className="admin-title">Admin panel</h2>
      <p className="admin-note">
        Bütün bölmə mətnlərini buradan düzəldə bilərsən. Məlumatlar PostgreSQL database-də saxlanılır.
      </p>

      <div className="admin-form">
        <div className="admin-group">
          <label className="admin-label">Universitet haqqında</label>
          <textarea
            value={uniText}
            onChange={(e) => setUniText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">Ümumi müddəalar</label>
          <textarea
            value={generalText}
            onChange={(e) => setGeneralText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">Tələbəyönümlü təhsil sistemi</label>
          <textarea
            value={studentCenteredText}
            onChange={(e) => setStudentCenteredText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">Tədrisin təşkili</label>
          <textarea
            value={teachingOrgText}
            onChange={(e) => setTeachingOrgText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">Fərdi tədris planı</label>
          <textarea
            value={individualPlanText}
            onChange={(e) => setIndividualPlanText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">Yay semestrinin təşkili</label>
          <textarea
            value={summerSemesterText}
            onChange={(e) => setSummerSemesterText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">
            Mühazirə dərslərində iştirak və tematik tapşırıqlar
          </label>
          <textarea
            value={lectureAssessmentText}
            onChange={(e) => setLectureAssessmentText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">
            Seminar / laboratoriya və layihə, referat işləri
          </label>
          <textarea
            value={seminarLabAssessmentText}
            onChange={(e) => setSeminarLabAssessmentText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">
            Kollokvium nəticələrinə görə balların hesablanması
          </label>
          <textarea
            value={colloquiumAssessmentText}
            onChange={(e) => setColloquiumAssessmentText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">
            İmtahanların təşkili və keçirilməsi qaydaları
          </label>
          <textarea
            value={examRulesText}
            onChange={(e) => setExamRulesText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">
            Nəzəri sualın qiymət meyarları
          </label>
          <textarea
            value={theoreticalCriteriaText}
            onChange={(e) => setTheoreticalCriteriaText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">
            Praktiki sualın qiymət meyarları
          </label>
          <textarea
            value={practicalCriteriaText}
            onChange={(e) => setPracticalCriteriaText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">
            Praktiki xarakterli tapşırıqların qiymətləndirilməsi
          </label>
          <textarea
            value={practicalTasksText}
            onChange={(e) => setPracticalTasksText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">Təcrübənin təşkili</label>
          <textarea
            value={practiceOrganizationText}
            onChange={(e) => setPracticeOrganizationText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">
            Təhsil müəssisəsinin / ixtisasın / təhsilalma formasının dəyişdirilməsi
          </label>
          <textarea
            value={changeSpecialtyText}
            onChange={(e) => setChangeSpecialtyText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">
            Tələbənin təhsilini müvəqqəti dayandırması
          </label>
          <textarea
            value={temporarySuspensionText}
            onChange={(e) => setTemporarySuspensionText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">
            Təhsil müəssisəsindən xaric olma
          </label>
          <textarea
            value={institutionExpulsionText}
            onChange={(e) => setInstitutionExpulsionText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">
            Təhsil müəssisəsinə bərpa olunma
          </label>
          <textarea
            value={reinstatementText}
            onChange={(e) => setReinstatementText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">Tələbənin hüquq və vəzifələri</label>
          <textarea
            value={rightsDutiesText}
            onChange={(e) => setRightsDutiesText(e.target.value)}
            rows={4}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">
            İntizamın pozulmasına görə məsuliyyət
          </label>
          <textarea
            value={disciplineRespText}
            onChange={(e) => setDisciplineRespText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">Xəbərdarlığın edildiyi hallar</label>
          <textarea
            value={warningCasesText}
            onChange={(e) => setWarningCasesText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">Töhmətin edildiyi hallar</label>
          <textarea
            value={reprimandCasesText}
            onChange={(e) => setReprimandCasesText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">
            Sonuncu xəbərdarlıq / şiddətli töhmət
          </label>
          <textarea
            value={severeReprimandCasesText}
            onChange={(e) => setSevereReprimandCasesText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">
            Universitetdən xaric edilmə halları
          </label>
          <textarea
            value={expulsionCasesText}
            onChange={(e) => setExpulsionCasesText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">
            İntizam məsuliyyətinə cəlb etmə proseduru
          </label>
          <textarea
            value={disciplineProcedureText}
            onChange={(e) => setDisciplineProcedureText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">
            Kitabxana xidməti qaydaları
          </label>
          <textarea
            value={libraryServiceRulesText}
            onChange={(e) => setLibraryServiceRulesText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">
            Kitabxananın hüquq və vəzifələri
          </label>
          <textarea
            value={libraryRightsDutiesText}
            onChange={(e) => setLibraryRightsDutiesText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">
            Oxucuların hüquq və vəzifələri
          </label>
          <textarea
            value={readersRightsDutiesText}
            onChange={(e) => setReadersRightsDutiesText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">
            Təhsildə müvəffəqiyyətə görə həvəsləndirmə
          </label>
          <textarea
            value={encouragementText}
            onChange={(e) => setEncouragementText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">Təqaüdlərin təyin olunması</label>
          <textarea
            value={scholarshipsText}
            onChange={(e) => setScholarshipsText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">Mübadilə proqramları</label>
          <textarea
            value={exchangeProgramsText}
            onChange={(e) => setExchangeProgramsText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">Təhsil tələbə krediti</label>
          <textarea
            value={studentLoanText}
            onChange={(e) => setStudentLoanText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">
            Sosial həssas qruplar üçün təhsil haqqı dəstəyi
          </label>
          <textarea
            value={socialSupportText}
            onChange={(e) => setSocialSupportText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">Kredit sistemi</label>
          <textarea
            value={creditsText}
            onChange={(e) => setCreditsText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <div className="admin-group">
          <label className="admin-label">Əsas anlayışlar</label>
          <textarea
            value={conceptsText}
            onChange={(e) => setConceptsText(e.target.value)}
            rows={3}
            className="admin-textarea"
          />
        </div>

        <button onClick={handleSave} className="admin-save-btn">
          Yadda saxla
        </button>

        {saved && (
          <span className="admin-saved">Dəyişikliklər yadda saxlanıldı.</span>
        )}
      </div>
    </section>
  );
}