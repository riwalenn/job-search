const routes = [
  {
    path: "/",
    name: "Accueil",
    component: () => import("@/views/HomeView"),
  },
  {
    path: "/jobs/results/:id",
    name: "ListeEmplois",
    component: () => import(/* webpackChunkName: "jobs" */ "@/views/JobView"),
  },
  {
    path: "/jobs/results",
    name: "Resultats",
    component: () =>
      import(/* webpackChunkName: "jobs" */ "@/views/JobResultsView"),
  },
];

export default routes;
