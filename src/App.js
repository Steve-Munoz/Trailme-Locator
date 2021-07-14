import React from "react"
import {Switch, Route} from "react-router-dom"
import "./App.css"

import Header from "./components/Header";
import Home from "./components/Home";
import TrailResults from "./components/TrailResults"
import Footer from "./components/Footer"



function App() {
  return (
    <div>
      <Header/>

      <Switch>

        <Route exact path ="/">
          <Home/>
        </Route>

        <Route path ="/trailresults">
          <TrailResults/>
        </Route>

      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
