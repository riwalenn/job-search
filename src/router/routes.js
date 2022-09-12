const routes = [
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/HomeView"),
  },
  {
    path: "/jobs/results",
    name: "JobResults",
    component: () => import("@/views/JobResultsView"),
  },
];

export default routes;
