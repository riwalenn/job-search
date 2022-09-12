const routes = [
  {
    path: "/",
    name: "Accueil",
    component: () => import("@/views/HomeView"),
  },
  {
    path: "/jobs/results",
    name: "Resultats",
    component: () => import("@/views/JobResultsView"),
  },
];

export default routes;
