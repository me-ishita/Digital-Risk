import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { AcademyHome } from "./pages/academy/AcademyHome";
import { AcademyPrograms } from "./pages/academy/AcademyPrograms";
import { ProgramDetail } from "./pages/academy/ProgramDetail";
import { Certifications } from "./pages/academy/Certifications";
import { Resources } from "./pages/academy/Resources";
import { Insights } from "./pages/Insights";
import { About } from "./pages/About";

import InvestmentBankingProgram from "./pages/academy/InvestmentBankingProgram";
import DataRiskEnterprise from "./pages/academy/DataRiskEnterprise";
import DigitalRiskFundamentals from "./pages/academy/DigitalRiskFundamentals";
import CNISCC from "./pages/academy/CNISCC";
import CyberResiliencePractitioner from "./pages/academy/CyberResiliencePractitioner";
import AIRiskGovernance from "./pages/academy/AIRiskGovernance";
import ExecutiveLeadership from "./pages/academy/ExecutiveLeadership";
import StudentProgram from "./pages/academy/StudentProgram";
import EarlyCareerProgram from "./pages/academy/EarlyCareerProgram";
import ExperiencedProgram from "./pages/academy/ExperiencedProgram";
import OrganisationProgram from "./pages/academy/OrganisationProgram";


import AdvisoryHome from "@/app/pages/advisory/AdvisoryHome";
import { Services } from "./pages/advisory/Services";
import { CaseStudies } from "./pages/advisory/CaseStudies";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { News } from "./pages/News";
import { Research } from "./pages/Research";
import { Innovation } from "./pages/advisory/Innovation";
import { Incubation } from "./pages/advisory/Incubation";
import { Acceleration } from "./pages/advisory/Accelaration";
import { NewsArticleDetail } from "./pages/NewsArticleDetail";
import { ResearchPaperDetail } from "./pages/ResearchPaperDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // ✅ IMPORTANT
    children: [
      { index: true, element: <HomePage /> },

      { path: "academy", element: <AcademyHome /> },
      { path: "academy/programs", element: <AcademyPrograms /> },
      { path: "academy/programs/:id", element: <ProgramDetail /> },
      { path: "academy/certifications", element: <Certifications /> },
      { path: "academy/resources", element: <Resources /> },

      { path: "investment-banking", element: <InvestmentBankingProgram /> },
      { path: "digital-risk-fundamentals", element: <DigitalRiskFundamentals /> },
      { path: "cyber-resilience-practitioner", element: <CyberResiliencePractitioner /> },
      { path: "ai-risk-governance", element: <AIRiskGovernance /> },
      { path: "executive-leadership", element: <ExecutiveLeadership /> },
      { path: "cniscc", element: <CNISCC /> },
      { path: "data-risk-enterprise", element: <DataRiskEnterprise /> },
      { path: ":id", element: <ProgramDetail /> },

      { path: "students", element: <StudentProgram /> },
      { path: "early-career", element: <EarlyCareerProgram /> },
      { path: "experienced", element: <ExperiencedProgram /> },
      { path: "organisation", element: <OrganisationProgram /> },

      { path: "advisory", element: <AdvisoryHome /> },
      { path: "advisory/services", element: <Services /> },
      { path: "advisory/case-studies", element: <CaseStudies /> },

      { path: "innovation", element: <Innovation /> },
      { path: "incubation", element: <Incubation /> },
      { path: "acceleration", element: <Acceleration /> },

      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "news", element: <News /> },
      { path: "news/:id", element: <NewsArticleDetail /> },

      { path: "research", element: <Research /> },
      { path: "research/:id", element: <ResearchPaperDetail /> },

      { path: "insights", element: <Insights /> },

      { path: "*", element: <NotFound /> },
    ],
  },
]);