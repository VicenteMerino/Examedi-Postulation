import React from "react";
import { renderRoutes } from "react-router-config";
import Pokemon from "./views/Pokemon";
const Routes = () => {
  const routes = [
    {
      path: "/",
      exact: true,
      component: Pokemon,
    }
  ];
  return renderRoutes(routes);
};

export default Routes;