import { createBrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { AcademyHome } from "./pages/academy/AcademyHome";
import { AcademyPrograms } from "./pages/academy/AcademyPrograms";
import { ProgramDetail } from "./pages/academy/ProgramDetail";
import { Certifications } from "./pages/academy/Certifications";
import { Resources } from "./pages/academy/Resources";
import { About } from "./pages/About";
import { Register } from "./pages/Register";

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
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },

      { path: "academy", element: <AcademyHome /> },
      { path: "academy/programs", element: <AcademyPrograms /> },
      { path: "academy/programs/:id", element: <ProgramDetail /> },
      { path: "academy/certifications", element: <Certifications /> },

      { path: "programmes/investment-banking", element: <InvestmentBankingProgram /> },
      { path: "programmes/digital-risk-fundamentals", element: <DigitalRiskFundamentals /> },
      { path: "programmes/cyber-resilience-practitioner", element: <CyberResiliencePractitioner /> },
      { path: "programmes/ai-risk-governance", element: <AIRiskGovernance /> },
      { path: "programmes/executive-leadership", element: <ExecutiveLeadership /> },
      { path: "programmes/cniscc", element: <CNISCC /> },
      { path: "programmes/data-risk-enterprise", element: <DataRiskEnterprise /> },
      { path: ":id", element: <ProgramDetail /> },

      { path: "programmes/students", element: <StudentProgram /> },
      { path: "programmes/early-career", element: <EarlyCareerProgram /> },
      { path: "programmes/experienced", element: <ExperiencedProgram /> },
      { path: "programmes/organisation", element: <OrganisationProgram /> },

      { path: "labs", element: <AdvisoryHome /> },
      { path: "labs/services", element: <Services /> },
      { path: "labs/case-studies", element: <CaseStudies /> },
      { path: "labs/innovation", element: <Innovation /> },
      { path: "labs/incubation", element: <Incubation /> },
      { path: "labs/acceleration", element: <Acceleration /> },

      { path: "advisory", element: <Navigate to="/labs" replace /> },
      { path: "advisory/services", element: <Navigate to="/labs/services" replace /> },
      { path: "advisory/case-studies", element: <Navigate to="/labs/case-studies" replace /> },
      { path: "advisory/innovation", element: <Navigate to="/labs/innovation" replace /> },
      { path: "advisory/incubation", element: <Navigate to="/labs/incubation" replace /> },
      { path: "advisory/acceleration", element: <Navigate to="/labs/acceleration" replace /> },

      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "register", element: <Register /> },

      { path: "news", element: <News /> },
      { path: "news/:id", element: <NewsArticleDetail /> },

      { path: "research", element: <Research /> },
      { path: "research/:id", element: <ResearchPaperDetail /> },


      { path: "*", element: <NotFound /> },
    ],
  },
]);
