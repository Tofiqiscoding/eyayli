"use client";

import { useState, useEffect } from "react";
import "./admin.css";

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

  useEffect(() => {
    if (!isLogged) return;
    if (typeof window === "undefined") return;

    setUniText(localStorage.getItem("uniText") || "");
    setGeneralText(localStorage.getItem("generalText") || "");
    setStudentCenteredText(localStorage.getItem("studentCenteredText") || "");
    setTeachingOrgText(localStorage.getItem("teachingOrgText") || "");
    setIndividualPlanText(localStorage.getItem("individualPlanText") || "");
    setSummerSemesterText(localStorage.getItem("summerSemesterText") || "");

    setLectureAssessmentText(
      localStorage.getItem("lectureAssessmentText") || ""
    );
    setSeminarLabAssessmentText(
      localStorage.getItem("seminarLabAssessmentText") || ""
    );
    setColloquiumAssessmentText(
      localStorage.getItem("colloquiumAssessmentText") || ""
    );

    setExamRulesText(localStorage.getItem("examRulesText") || "");
    setTheoreticalCriteriaText(
      localStorage.getItem("theoreticalCriteriaText") || ""
    );
    setPracticalCriteriaText(
      localStorage.getItem("practicalCriteriaText") || ""
    );
    setPracticalTasksText(localStorage.getItem("practicalTasksText") || "");
    setPracticeOrganizationText(
      localStorage.getItem("practiceOrganizationText") || ""
    );

    setChangeSpecialtyText(localStorage.getItem("changeSpecialtyText") || "");
    setTemporarySuspensionText(
      localStorage.getItem("temporarySuspensionText") || ""
    );
    setInstitutionExpulsionText(
      localStorage.getItem("institutionExpulsionText") || ""
    );
    setReinstatementText(localStorage.getItem("reinstatementText") || "");

    setRightsDutiesText(localStorage.getItem("rightsDutiesText") || "");
    setDisciplineRespText(localStorage.getItem("disciplineRespText") || "");
    setWarningCasesText(localStorage.getItem("warningCasesText") || "");
    setReprimandCasesText(localStorage.getItem("reprimandCasesText") || "");
    setSevereReprimandCasesText(
      localStorage.getItem("severeReprimandCasesText") || ""
    );
    setExpulsionCasesText(localStorage.getItem("expulsionCasesText") || "");
    setDisciplineProcedureText(
      localStorage.getItem("disciplineProcedureText") || ""
    );
    setLibraryServiceRulesText(
      localStorage.getItem("libraryServiceRulesText") || ""
    );
    setLibraryRightsDutiesText(
      localStorage.getItem("libraryRightsDutiesText") || ""
    );
    setReadersRightsDutiesText(
      localStorage.getItem("readersRightsDutiesText") || ""
    );
    setEncouragementText(localStorage.getItem("encouragementText") || "");
    setScholarshipsText(localStorage.getItem("scholarshipsText") || "");
    setExchangeProgramsText(
      localStorage.getItem("exchangeProgramsText") || ""
    );
    setStudentLoanText(localStorage.getItem("studentLoanText") || "");
    setSocialSupportText(localStorage.getItem("socialSupportText") || "");
    setCreditsText(localStorage.getItem("creditsText") || "");
    setConceptsText(localStorage.getItem("conceptsText") || "");
  }, [isLogged]);

  const saveField = (key: string, value: string) => {
    if (typeof window === "undefined") return;
    const trimmed = value.trim();
    if (trimmed === "") {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, trimmed);
    }
  };

  const handleSave = () => {
    saveField("uniText", uniText);
    saveField("generalText", generalText);
    saveField("studentCenteredText", studentCenteredText);
    saveField("teachingOrgText", teachingOrgText);
    saveField("individualPlanText", individualPlanText);
    saveField("summerSemesterText", summerSemesterText);

    saveField("lectureAssessmentText", lectureAssessmentText);
    saveField("seminarLabAssessmentText", seminarLabAssessmentText);
    saveField("colloquiumAssessmentText", colloquiumAssessmentText);

    saveField("examRulesText", examRulesText);
    saveField("theoreticalCriteriaText", theoreticalCriteriaText);
    saveField("practicalCriteriaText", practicalCriteriaText);
    saveField("practicalTasksText", practicalTasksText);
    saveField("practiceOrganizationText", practiceOrganizationText);

    saveField("changeSpecialtyText", changeSpecialtyText);
    saveField("temporarySuspensionText", temporarySuspensionText);
    saveField("institutionExpulsionText", institutionExpulsionText);
    saveField("reinstatementText", reinstatementText);

    saveField("rightsDutiesText", rightsDutiesText);
    saveField("disciplineRespText", disciplineRespText);
    saveField("warningCasesText", warningCasesText);
    saveField("reprimandCasesText", reprimandCasesText);
    saveField("severeReprimandCasesText", severeReprimandCasesText);
    saveField("expulsionCasesText", expulsionCasesText);
    saveField("disciplineProcedureText", disciplineProcedureText);
    saveField("libraryServiceRulesText", libraryServiceRulesText);
    saveField("libraryRightsDutiesText", libraryRightsDutiesText);
    saveField("readersRightsDutiesText", readersRightsDutiesText);
    saveField("encouragementText", encouragementText);
    saveField("scholarshipsText", scholarshipsText);
    saveField("exchangeProgramsText", exchangeProgramsText);
    saveField("studentLoanText", studentLoanText);
    saveField("socialSupportText", socialSupportText);
    saveField("creditsText", creditsText);
    saveField("conceptsText", conceptsText);

    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
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
        Bütün bölmə mətnlərini buradan düzəldə bilərsən. Boş sahə üçün
        localStorage təmizlənəcək və saytda default mətn görünəcək.
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

        {/* Qiymətləndirmə və imtahan blokları */}
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

        {/* Tələbə status dəyişikliyi blokları */}
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

        {/* Qalan əvvəlki bölmələr */}
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
