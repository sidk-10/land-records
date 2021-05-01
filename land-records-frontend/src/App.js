import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./routes";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <Router>
            <Switch>
                {routes.map((route) => {
                    return (
                        <Route path={route.path} exact>
                            <route.component />
                        </Route>
                    );
                })}
            </Switch>
        </Router>
    );
}

export default App;
