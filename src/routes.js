import React from "react";

const Info = React.lazy(() =>
  import("./components/Infopage")
);

const CheckSymptoms_home = React.lazy(() =>
  import("./components/checksymptom_home")
);

const NepalMap = React.lazy(() =>
  import("./components/NepalMap")
);

const HeatMap = React.lazy(() =>
  import("./components/App_corona")
);

const CheckSymptoms = React.lazy(() =>
  import("./components/CheckSymptoms")
);

const TermOfServices = React.lazy(() =>
  import("./components/TermOfServices")
);

const Collaborator = React.lazy(() =>
  import("./components/Collaborator")
);
const Aboutus = React.lazy(() =>
  import("./components/Aboutus")
);
const CheckResult = React.lazy(() =>
  import("./components/CheckResult")
);

const routes = [
  { 
    path: "/", 
    exact: true, 
    name: "Home", 
    component: CheckSymptoms_home 
  },
  {
    path: "/info",
    name: "Info",
    component: Info
  },
  {
    path: "/nepalmap",
    name: "Nepal Map",
    component: NepalMap
  },
  {
    path: "/heatmap",
    name: "Heat Map",
    component: HeatMap
  },
  {
    path: "/tracksymptoms",
    name: "Check Symptoms",
    component: CheckSymptoms
  },
  {
    path: "/termofservices",
    name: "Term Of Services",
    component: TermOfServices
  },
  {
    path: "/Collaborator",
    name: "Collaborator",
    component: Collaborator
  },
  {
    path: "/Aboutus",
    name: "About Us",
    component: Aboutus
  },
  {
    path: "/CheckResult",
    name: "Check Result",
    component: CheckResult
  }
];

export default routes;
