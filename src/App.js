import React from "react";
import { Route, Switch } from "react-router-dom";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./index.css";

import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import API from "./components/API";
import Error from "./components/Error";

function App() {
    return (
        <div className="todoapp stack-large">
            <Navbar />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/API" component={API} />
                <Route component={Error} />
            </Switch>
            <ThemeSwitcher />
        </div>
    );
}

export default App;
