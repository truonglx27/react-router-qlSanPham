import React, { Component } from "react";
import Menu from './components/Menu/Menu';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './styles.css';
class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Menu />
                    <div className="container">
                        <div className="row">
                            {this.showContentMenus(routes)}
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
    showContentMenus = (routes) => {
        let result = null;
        if (routes.length) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                )
            });
        };

        return <Switch>{result}</Switch>
    }
}

export default App;
