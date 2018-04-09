import { SHOW_ERROR_TOGGLE_TRUE, SHOW_ERROR_TOGGLE_FALSE } from '../../constants';

// SHOW_ERROR_TOGGLE_TRUE
export interface ShowErrorToggleTrue {
  type: SHOW_ERROR_TOGGLE_TRUE;
  errorMessage: string;
}

export const showErrorToggleTrue = (errorMessage: string): ShowErrorToggleTrue => {
  return {
    type: SHOW_ERROR_TOGGLE_TRUE,
    errorMessage: errorMessage
  };
};

// SHOW_ERROR_TOGGLE_FALSE
export interface ShowErrorToggleFalse {
  type: SHOW_ERROR_TOGGLE_FALSE;
}

export const showErrorToggleFalse = (): ShowErrorToggleFalse => {
  return {
    type: SHOW_ERROR_TOGGLE_FALSE
  };
};

export type ErrorActions = ShowErrorToggleTrue | ShowErrorToggleFalse;