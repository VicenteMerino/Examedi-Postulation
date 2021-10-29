import React from "react";
import { Redirect } from "react-router";
import { renderRoutes } from "react-router-config";
import Pokemon from "./views/Pokemon";
import PokemonDetail from "./views/PokemonDetail";
const Routes = () => {
  const routes = [
    {
      path: "/",
      exact: true,
      render: () => <Redirect to="/pokemon"/>
    },
    {
      path: "/pokemon",
      exact: true,
      component: Pokemon,
    },
    {
      path: "/pokemon/:id",
      exact: true,
      component: PokemonDetail,
    },
  ];
  return renderRoutes(routes);
};

export default Routes;