import * as React from 'react';
import { StoreState } from '../../reducers';
import { connect, Dispatch } from 'react-redux';
import * as actions from '../../actions';
import Error from '../../components/Error';

interface StateFromProps {
  showError: boolean;
  errorMessage: string;
}

interface DispatchFromProps {
  showErrorToggleFalse: () => void;
}

type Props = StateFromProps & DispatchFromProps;

class ErrorContainer extends React.Component<Props, {}> {
  render() {
    const {showError, errorMessage, showErrorToggleFalse} = this.props;
    return (
      <div>
        {(showError) ? <Error message={errorMessage} dismiss={showErrorToggleFalse}/> : null}
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): StateFromProps => {
  return {
    showError: state.ErrorState.showError,
    errorMessage: state.ErrorState.errorMessage,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<actions.ErrorActions>): DispatchFromProps => {
  return {
    showErrorToggleFalse: () => dispatch(actions.showErrorToggleFalse())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorContainer);