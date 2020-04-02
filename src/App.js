import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  withRouter,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));

const PublicRoutes = [
  {
    path: "/",
    component: DefaultLayout,
    name: "Home"
  }
];

// const PrivateRoutes = [
//   {
//     path: "/",
//     component: DefaultLayout,
//     name: "Home"
//   }
// ];

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              {PublicRoutes.map(({ path, component: Component},idx) => {
                return (
                  <Route
                    key={idx}
                    path={path}
                    render={props => {
                      return (
                        <Component {...props} />
                      );
                    }}
                  />
                );
              })}
              {/* {PrivateRoutes.map(({ path, component: Component }) => {
                return (
                  <Route
                    path={path}
                    render={props => {
                      return (
                        <Component {...props} />
                      );
                    }}
                  />
                );
              })} */}
            </Switch>
          </React.Suspense>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null,
  {}
)(App);
