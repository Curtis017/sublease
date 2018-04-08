import SubleaseReducer, { SubleaseState } from './SubleaseReducer';
import ErrorReducer, { ErrorState } from './ErrorReducer';

export interface StoreState {
  SubleaseState: SubleaseState;
  ErrorState: ErrorState;
}

const Reducers = {
  SubleaseState: SubleaseReducer,
  ErrorState: ErrorReducer
};

export default Reducers;
