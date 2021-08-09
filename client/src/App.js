import React from "react";
import Navbar from "./components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";

const App = () => {
  return (
    <>
      <Navbar />

      {/* <switch>
        <Route>
          <Home />
        </Route>

        <Route>
          <About />
        </Route>
        <Route>
          <Contact />
        </Route>
        <Route>
          <Login />
        </Route>
        <Route>
          <signup />
        </Route>
      </switch> */}

        <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/signup">
          <Signup/>
        </Route>
         <Route>
           <ErrorPage/>
         </Route>

        </Switch>

    </>
  );
};
export default App;
