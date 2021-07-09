import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ExhibitionComponent from "../components/Exhibitions/exhibition";
import ExhibitionSubComponent from "./exhibitionSub";
const Exhibitions = () => {
  const { path } = useRouteMatch();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "Right",
        height: "80vh",
      }}
    >
      <Switch>
        <Route exact path={path}>
          <ExhibitionSubComponent />
        </Route>
        <Route path={`${path}/:id`}>
          <ExhibitionComponent />
        </Route>
      </Switch>
    </div>
  );
};

export default Exhibitions;
