import { Sublease } from '../../models';
import { List } from 'immutable';
import { SubleaseActions } from '../../actions';
import { 
  FETCH_SUBLEASES_REQUEST, FETCH_SUBLEASES, FETCH_SUBLEASES_SUCCESS, FETCH_SUBLEASES_FAILURE, 
  // CREATE_SUBLEASE_REQUEST, CREATE_SUBLEASE, CREATE_SUBLEASE_SUCCESS, CREATE_SUBLEASE_FAILURE, 
  // UPDATE_SUBLEASE_REQUEST, UPDATE_SUBLEASE, UPDATE_SUBLEASE_SUCCESS, UPDATE_SUBLEASE_FAILURE, 
  // DELETE_SUBLEASE_REQUEST, DELETE_SUBLEASE, DELETE_SUBLEASE_SUCCESS, DELETE_SUBLEASE_FAILURE 
} from '../../constants';

export interface SubleaseState {
  subleases: List<Sublease>;
  lastFetched: Date;
  isCreating: boolean;
  isFetching: boolean;
  isUpdating: boolean;
  isDeleting: string[];
}

export const initialState = (): SubleaseState => {
  return {
    subleases: List<Sublease>(),
    lastFetched: new Date(),
    isFetching: false,
    isCreating: false,
    isUpdating: false,
    isDeleting: []
  };
};

export const fetchSubleasesRequest = (state: SubleaseState): SubleaseState => {
  return Object.assign({}, state, {
    isFetching: true
  });
};

export const fetchSubleases = (state: SubleaseState, subleases: List<Sublease>): SubleaseState => {
  return Object.assign({}, state, {
    subleases: subleases,
    lastFetched: new Date()
  });
};

export const fetchSubleasesSuccess = (state: SubleaseState): SubleaseState => {
  return Object.assign({}, state, {
    isFetching: false
  });
};

export const fetchSubleasesFailure = (state: SubleaseState): SubleaseState => {
  return Object.assign({}, state, {
    isFetching: false
  });
};

const SubleasesReducer = (state: SubleaseState = initialState(), action: SubleaseActions): SubleaseState => {
  switch (action.type) {
    case FETCH_SUBLEASES_REQUEST:
      return fetchSubleasesRequest(state);
    case FETCH_SUBLEASES:
      return fetchSubleases(state, action.subleases);
    case FETCH_SUBLEASES_SUCCESS:
      return fetchSubleasesSuccess(state);
    case FETCH_SUBLEASES_FAILURE:
      return fetchSubleasesFailure(state);
    // case CREATE_SUBLEASE_REQUEST:
    //   return createSubleaseRequest(state);
    // case CREATE_SUBLEASE:
    //   return createSublease(state, action.sublease);
    // case CREATE_SUBLEASE_SUCCESS:
    //   return createSubleaseSuccess(state);
    // case CREATE_SUBLEASE_FAILURE:
    //   return createSubleaseFailure(state);
    // case UPDATE_SUBLEASE_REQUEST:
    //   return updateSubleaseRequest(state);
    // case UPDATE_SUBLEASE:
    //   return updateSublease(state, action.sublease);
    // case UPDATE_SUBLEASE_SUCCESS:
    //   return updateSubleaseSuccess(state);
    // case UPDATE_SUBLEASE_FAILURE:
    //   return updateSubleaseFailure(state);
    // case DELETE_SUBLEASE_REQUEST:
    //   return deleteSubleaseRequest(state, action.sublease);
    // case DELETE_SUBLEASE:
    //   return deleteSublease(state, action.sublease);
    // case DELETE_SUBLEASE_SUCCESS:
    //   return deleteSubleaseSuccess(state);
    // case DELETE_SUBLEASE_FAILURE:
    //   return deleteSubleaseFailure(state);
    default:
      return state;
  }
};

export default SubleasesReducer;