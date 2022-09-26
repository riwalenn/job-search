const routes = [
  {
    path: "/",
    name: "Accueil",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/jobs/results/:id",
    name: "ListeEmplois",
    component: () =>
      import(/* webpackChunkName: "jobs" */ "@/views/JobView.vue"),
  },
  {
    path: "/jobs/results",
    name: "Resultats",
    component: () =>
      import(/* webpackChunkName: "jobs" */ "@/views/JobResultsView.vue"),
  },
  {
    path: "/teams",
    name: "Equipe",
    component: () => import("@/views/TeamsView.vue"),
  },
];

export default routes;
