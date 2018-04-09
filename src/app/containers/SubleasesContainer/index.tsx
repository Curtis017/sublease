import { StoreState } from '../../reducers';
import { connect, Dispatch } from 'react-redux';
import * as actions from '../../actions';
import { Sublease } from '../../models';
import Subleases from '../../components/Subleases';
import { List } from 'immutable';

interface StateFromProps {
  subleases: List<Sublease>;
  isFetching: boolean;
}

interface DispatchFromProps {
  handleRefresh: () => void;
}

const mapStateToProps = (state: StoreState): StateFromProps => {
  return {
    subleases: state.SubleaseState.subleases, 
    isFetching: state.SubleaseState.isFetching
  };
};

const mapDispatchToProps = (dispatch: Dispatch<actions.SubleaseActions>): DispatchFromProps => {
  return {
    handleRefresh: () => dispatch(actions.fetchSubleasesRequest())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Subleases);
