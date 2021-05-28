import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

export default class Routes extends React.Component{
    render() {
        return (
            <Router>
                <div>
                    <ul>
                    <li>
                        <Link to="/rovers">Router</Link>
                    </li>
                    </ul>

                    <Switch>
                    <Route path="/rovers">
                        <Rovers />
                    </Route>
                    </Switch>
                </div>
            </Router>
        )
    };
}

function Rovers() {
    let match = useRouteMatch();
  
    return (
      <div>
        <h2>Rovers</h2>
  
        <ul>
          <li>
            <Link to={`${match.url}/Curiosity`}>Curiosity</Link>
          </li>
          <li>
            <Link to={`${match.url}/Spirit`}>Spirit</Link>
          </li>
        </ul>
  
        <Switch>
          <Route path={`${match.path}/:roverName`}>
            <Rover />
          </Route>
          <Route path={match.path}>
            <h3>Please select a topic.</h3>
          </Route>
        </Switch>
      </div>
    );
}

function Rover() {
    let { roverName } = useParams();
    return <h3>Requested rover: {roverName}</h3>;
}