import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Artists from "./pages/artists";
import GallaryVault from './pages/gallaryVault';
import Exhibitions from './pages/exhibitions';
import Info from './pages/info';
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/artists' component={Artists} />
        <Route path='/gallaryVault' component={GallaryVault} />
        <Route path='/exhibitions' component={Exhibitions} />
        <Route path='/info' component={Info} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
