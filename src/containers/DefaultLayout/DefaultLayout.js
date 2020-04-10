import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import * as router from "react-router-dom";
import { Container } from "reactstrap";
import {UpCircleOutlined} from "@ant-design/icons";
import history from '../../components/history'

// routes config
import routes from "../../routes";
import { connect } from "react-redux";
import { ReactComponent as Icon } from '../../covid19.svg'

const DefaultFooter = React.lazy(() => import("./DefaultFooter"));
const DefaultHeader = React.lazy(() => import("./DefaultHeader"));

class DefaultLayout extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center"><div className="loading-icon">
    <Icon />
</div></div>
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
            {/* <Container fluid> */}
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        history={history}
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
            {/* </Container> */}
          </main>
            <Suspense fallback={this.loading()}>
              <div ><UpCircleOutlined  
                style={{
                overflow: 'auto',
                fontSize: '30px',
                position: 'fixed',
                right: 5,
                bottom:20,
                // borderRadius:'50% 50% 0 0'
                }}
                onClick={()=>window.scrollTo(0, 0)}
              /></div>
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
