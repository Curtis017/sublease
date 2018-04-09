import * as React from 'react';

import { Route, Switch } from 'react-router';
import { withRouter } from 'react-router-dom';
import { connect, Dispatch } from 'react-redux';
import * as actions from './actions';

import ErrorContainer from './containers/ErrorContainer';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Home from './components/Home';
import NotFound from './components/NotFound';

interface DispatchFromProps {
  fetchSubleasesRequest: () => void;
}

class App extends React.Component<DispatchFromProps, {}> {
  componentDidMount() {
    this.props.fetchSubleasesRequest();
  }

  render() {
    return (
      <main>
        <ErrorContainer />
        <NavigationBar />
        <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route component={NotFound}/>
        </Switch>
        <Footer />
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<actions.SubleaseActions>): DispatchFromProps => {
  return {
    fetchSubleasesRequest: () => dispatch(actions.fetchSubleasesRequest()),
  };
};

// tslint:disable-next-line:no-any
const connection: any = connect(null, mapDispatchToProps)(App);
export default withRouter(connection);