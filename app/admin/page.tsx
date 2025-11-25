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
    if (loginUser === "admin" && loginPass === "admin") {
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
        Bütün bölmə mətnlərini buradan birbaşa düzəldə bilərsən. Boş buraxdığın
        sahələr üçün localStorage təmizlənəcək və saytın özündə default mətn görünəcək.
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
