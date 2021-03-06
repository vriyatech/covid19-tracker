import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import * as router from "react-router-dom";
import { Container } from "reactstrap";

// routes config
import routes from "../../routes";
import { connect } from "react-redux";

const DefaultFooter = React.lazy(() => import("./DefaultFooter"));
const DefaultHeader = React.lazy(() => import("./DefaultHeader"));

class DefaultLayout extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );
  

  render() {
    return (
      <div className="app" style={{width:'100%'}}>
          <Suspense fallback={this.loading()}>
            <DefaultHeader/>
          </Suspense>
        <div className="app-body">
            <Suspense>
            </Suspense>
          <main className="main">
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => <route.component {...props} />}
                      />
                    ) : null;
                  })}
                  {/* <Redirect from="/" to="/dashboard" /> */}
                </Switch>
              </Suspense>
            </Container>
          </main>
            <Suspense fallback={this.loading()}>
            </Suspense>
        </div>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
      </div>
    );
  }
}

export default DefaultLayout;
