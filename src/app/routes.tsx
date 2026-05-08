import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { AcademyHome } from "./pages/academy/AcademyHome";
import { AcademyPrograms } from "./pages/academy/AcademyPrograms";
import { ProgramDetail } from "./pages/academy/ProgramDetail";
import { Certifications } from "./pages/academy/Certifications";
import { Resources } from "./pages/academy/Resources";
import { AdvisoryHome } from "./pages/advisory/AdvisoryHome";
import { Services } from "./pages/advisory/Services";
import { Industries } from "./pages/advisory/Industries";
import { HowWeWork } from "./pages/advisory/HowWeWork";
import { CaseStudies } from "./pages/advisory/CaseStudies";
import { Insights } from "./pages/Insights";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import InvestmentBankingProgram from "./pages/academy/InvestmentBankingProgram";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "academy", Component: AcademyHome },
      { path: "academy/programs", Component: AcademyPrograms },
      { path: "academy/programs/investment-banking", Component: InvestmentBankingProgram },
      { path: "academy/programs/:id", Component: ProgramDetail },
      { path: "academy/certifications", Component: Certifications },
      { path: "academy/resources", Component: Resources },
      { path: "advisory", Component: AdvisoryHome },
      { path: "advisory/services", Component: Services },
      { path: "advisory/industries", Component: Industries },
      { path: "advisory/how-we-work", Component: HowWeWork },
      { path: "advisory/case-studies", Component: CaseStudies },
      { path: "insights", Component: Insights },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
