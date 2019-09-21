import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";

import ListComponent from './components/list';
import HomeComponent from './components/home';
import DetailComponent from './components/detail';
import Error404 from './components/Error404';

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
      <ul>
        <li><Link style={styles.link} activeStyle={styles.active} to="/">Inicio</Link></li>
        <li><Link style={styles.link} activeStyle={styles.active} to="/list">Listado</Link></li>
      </ul>
      <Switch>
        <Route path="/list" component={ListComponent} />
        <Route path="/detalle" exact component={DetailComponent} />
        <Route path="/detalle/:id" component={DetailComponent} />
        <Route path="/" exact component={HomeComponent} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}
