import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";

import ListComponent from './components/list';
import DetailComponent from './components/detail';

const styles = {
  link: {
    textTransform: "none"
  },
  active: {
    backgroundColor: "red"
  }
}

const RedirectHome = () => {
  return <Redirect to="/" />
}

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ListComponent} />
        <Route path="/:search" exact component={ListComponent} />
        <Route path="/detalle/:id" component={DetailComponent} />
        <Route component={RedirectHome} />
      </Switch>
    </BrowserRouter>
  );
}
