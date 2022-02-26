/*
  Kalo nambah route disini ya, caranya gini :
    1. Import component2nya
    2. Masukin ke array APP_ROUTE, private itu berarti routenya cuman bisa diliat kalo udah login,
       restricted itu berarti routenya gak bisa diliat kalo udah login (Misal kalo aku masuk 
        halaman login padal udah login)
*/

import LandingPage from "./views/landing page/LandingPage";

export const APP_ROUTE = [
  {
    name: "LandingPage",
    path: "/",
    exact: true,
    component: LandingPage,
    restricted: true,
  },
  // {
  //   name: "ReadArticle",
  //   path: "/ReadArticle/:id",
  //   exact: true,
  //   component: ReadArticle,
  //   private: true,
  // },
];
