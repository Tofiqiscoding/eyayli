"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type UniversityData = {
  aboutUniversity: string;
  generalTerms: string;
  studentOrientedSystem: string;
  courseOrganization: string;
  individualCurriculum: string;
  summerSemester: string;
  lectureAssessment: string;
  seminarLabAssessment: string;
  colloquiumAssessment: string;
  examRules: string;
  theoreticalCriteria: string;
  practicalCriteria: string;
  practicalTasks: string;
  practiceOrganization: string;
  changeSpecialty: string;
  temporarySuspension: string;
  institutionExpulsion: string;
  reinstatement: string;
  rightsDuties: string;
  disciplineResp: string;
  warningCases: string;
  reprimandCases: string;
  severeReprimandCases: string;
  expulsionCases: string;
  disciplineProcedure: string;
  libraryServiceRules: string;
  libraryRightsDuties: string;
  readersRightsDuties: string;
  encouragement: string;
  scholarships: string;
  exchangePrograms: string;
  studentLoan: string;
  socialSupport: string;
  credits: string;
  concepts: string;
};

const UniversityContext = createContext<UniversityData | null>(null);

export function UniversityProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<UniversityData>({
    aboutUniversity: "",
    generalTerms: "",
    studentOrientedSystem: "",
    courseOrganization: "",
    individualCurriculum: "",
    summerSemester: "",
    lectureAssessment: "",
    seminarLabAssessment: "",
    colloquiumAssessment: "",
    examRules: "",
    theoreticalCriteria: "",
    practicalCriteria: "",
    practicalTasks: "",
    practiceOrganization: "",
    changeSpecialty: "",
    temporarySuspension: "",
    institutionExpulsion: "",
    reinstatement: "",
    rightsDuties: "",
    disciplineResp: "",
    warningCases: "",
    reprimandCases: "",
    severeReprimandCases: "",
    expulsionCases: "",
    disciplineProcedure: "",
    libraryServiceRules: "",
    libraryRightsDuties: "",
    readersRightsDuties: "",
    encouragement: "",
    scholarships: "",
    exchangePrograms: "",
    studentLoan: "",
    socialSupport: "",
    credits: "",
    concepts: "",
  });

  useEffect(() => {
    // API-dən məlumat yüklə
    fetch("http://localhost:5013/api/university")
      .then((res) => res.json())
      .then((apiData) => {
        setData({
          aboutUniversity: apiData.aboutUniversity || "",
          generalTerms: apiData.generalTerms || "",
          studentOrientedSystem: apiData.studentOrientedSystem || "",
          courseOrganization: apiData.courseOrganization || "",
          individualCurriculum: apiData.individualCurriculum || "",
          summerSemester: apiData.summerSemester || "",
          lectureAssessment: apiData.lectureAssessment || "",
          seminarLabAssessment: apiData.seminarLabAssessment || "",
          colloquiumAssessment: apiData.colloquiumAssessment || "",
          examRules: apiData.examRules || "",
          theoreticalCriteria: apiData.theoreticalCriteria || "",
          practicalCriteria: apiData.practicalCriteria || "",
          practicalTasks: apiData.practicalTasks || "",
          practiceOrganization: apiData.practiceOrganization || "",
          changeSpecialty: apiData.changeSpecialty || "",
          temporarySuspension: apiData.temporarySuspension || "",
          institutionExpulsion: apiData.institutionExpulsion || "",
          reinstatement: apiData.reinstatement || "",
          rightsDuties: apiData.rightsDuties || "",
          disciplineResp: apiData.disciplineResp || "",
          warningCases: apiData.warningCases || "",
          reprimandCases: apiData.reprimandCases || "",
          severeReprimandCases: apiData.severeReprimandCases || "",
          expulsionCases: apiData.expulsionCases || "",
          disciplineProcedure: apiData.disciplineProcedure || "",
          libraryServiceRules: apiData.libraryServiceRules || "",
          libraryRightsDuties: apiData.libraryRightsDuties || "",
          readersRightsDuties: apiData.readersRightsDuties || "",
          encouragement: apiData.encouragement || "",
          scholarships: apiData.scholarships || "",
          exchangePrograms: apiData.exchangePrograms || "",
          studentLoan: apiData.studentLoan || "",
          socialSupport: apiData.socialSupport || "",
          credits: apiData.credits || "",
          concepts: apiData.concepts || "",
        });
      })
      .catch((error) => {
        console.error("❌ API yükləmə xətası:", error);
      });
  }, []);

  return (
    <UniversityContext.Provider value={data}>
      {children}
    </UniversityContext.Provider>
  );
}

export function useUniversity() {
  const context = useContext(UniversityContext);
  if (!context) {
    throw new Error("useUniversity must be used within UniversityProvider");
  }
  return context;
}