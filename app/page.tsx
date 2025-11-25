"use client";

import { useState } from "react";
import Sidebar, { SectionKey } from "../components/Sidebar";

import "../sections/Sections.css";
import Uniinfo from "../sections/Uniinfo";
import GeneralProvisions from "../sections/GeneralProvisions";
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

export default function HomePage() {
  const [active, setActive] = useState<SectionKey>("uni");

  return (
    <div className="main-layout">
      <Sidebar activeSection={active} onChange={setActive} />
      <div className="main-content">
        {active === "uni" && <Uniinfo />}
        {active === "general" && <GeneralProvisions />}
        {active === "rightsDuties" && <RightsDuties />}
        {active === "disciplineResp" && <DisciplineResponsibility />}
        {active === "warningCases" && <WarningCases />}
        {active === "reprimandCases" && <ReprimandCases />}
        {active === "severeReprimandCases" && <SevereReprimandCases />}
        {active === "expulsionCases" && <ExpulsionCases />}
        {active === "disciplineProcedure" && <DisciplineProcedure />}
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
      </div>
    </div>
  );
}
