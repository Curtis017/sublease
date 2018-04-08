import * as React from 'react';

import { withRouter } from 'react-router-dom';
import { connect, Dispatch } from 'react-redux';
import { SubleaseActions, fetchSubleasesRequest } from '../actions';

import ErrorContainer from '../containers/ErrorContainer';
import RouterContainer from '../containers/RouterContainer';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

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
        <RouterContainer />
        <Footer />
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<SubleaseActions>): DispatchFromProps => {
  return {
    fetchSubleasesRequest: () => dispatch(fetchSubleasesRequest()),
  };
};

// tslint:disable-next-line:no-any
const connection: any = connect(null, mapDispatchToProps)(App);
export default withRouter(connection);