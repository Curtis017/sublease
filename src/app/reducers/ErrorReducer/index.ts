import { ErrorActions } from '../../actions';
import { SHOW_ERROR_TOGGLE_TRUE, SHOW_ERROR_TOGGLE_FALSE } from '../../constants';

export interface ErrorState {
  showError: boolean;
  errorMessage: string;
}

export const initialState = (): ErrorState => {
  return {
    showError: false,
    errorMessage: ''
  };
};

export const showErrorToggleTrue = (state: ErrorState, errorMessage: string): ErrorState => {
  return Object.assign({}, state, {
    showError: true,
    errorMessage: errorMessage
  });
};

export const showErrorToggleFalse = (state: ErrorState): ErrorState => {
  return Object.assign({}, state, {
    showError: false,
    errorMessage: ''
  });
};

const ErrorReducer = (state: ErrorState = initialState(), action: ErrorActions): ErrorState => {
  switch (action.type) {
    case SHOW_ERROR_TOGGLE_TRUE:
      return showErrorToggleTrue(state, action.errorMessage);
    case SHOW_ERROR_TOGGLE_FALSE:
      return showErrorToggleFalse(state);
    default:
      break;
  }
  return state;
};

export default ErrorReducer;
