import React from "react";
import { renderRoutes } from "react-router-config";
import Pokemons from "./views/Pokemons";
const Routes = () => {
  const routes = [
    {
      path: "/",
      exact: true,
      component: Pokemons,
    }
  ];
  return renderRoutes(routes);
};

export default Routes;