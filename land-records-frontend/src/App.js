import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./routes";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CookiesProvider } from "react-cookie";

function App(props) {
    return (
        <CookiesProvider>
            <Router>
                <Switch>
                    {routes.map((route) => {
                        return (
                            <Route path={route.path} exact>
                                <route.component {...props} />
                            </Route>
                        );
                    })}
                </Switch>
            </Router>
        </CookiesProvider>
    );
}

export default App;
