import { List } from 'immutable';
import { Sublease } from '../../models';
import { 
  FETCH_SUBLEASES_REQUEST, FETCH_SUBLEASES_SUCCESS, FETCH_SUBLEASES, FETCH_SUBLEASES_FAILURE, 
  CREATE_SUBLEASE_REQUEST, CREATE_SUBLEASE, CREATE_SUBLEASE_SUCCESS, CREATE_SUBLEASE_FAILURE, 
  UPDATE_SUBLEASE_REQUEST, UPDATE_SUBLEASE, UPDATE_SUBLEASE_SUCCESS, UPDATE_SUBLEASE_FAILURE, 
  DELETE_SUBLEASE_REQUEST, DELETE_SUBLEASE, DELETE_SUBLEASE_SUCCESS, DELETE_SUBLEASE_FAILURE 
} from '../../constants';

/****************************** CREATE ******************************/

// CREATE_SUBLEASE_REQUEST
export interface CreateSubleaseRequest {
  type: CREATE_SUBLEASE_REQUEST;
  sublease: Sublease;
}

export const createSubleaseRequest = (sublease: Sublease): CreateSubleaseRequest => {
  return {
    type: CREATE_SUBLEASE_REQUEST,
    sublease: sublease
  };
};

// CREATE_SUBLEASE
export interface CreateSublease {
  type: CREATE_SUBLEASE;
  sublease: Sublease;
}

export const createSublease = (sublease: Sublease): CreateSublease => {
  return {
    type: CREATE_SUBLEASE,
    sublease: sublease
  };
};

// CREATE_SUBLEASE_SUCCESS
export interface CreateSubleaseSuccess {
  type: CREATE_SUBLEASE_SUCCESS;
}

export const createSubleaseSuccess = (): CreateSubleaseSuccess => {
  return {
    type: CREATE_SUBLEASE_SUCCESS
  };
};

export interface CreateSubleaseFailure {
  type: CREATE_SUBLEASE_FAILURE;
}

export const createSubleaseFailure = (): CreateSubleaseFailure => {
  return {
    type: CREATE_SUBLEASE_FAILURE
  };
};

/****************************** FETCH ******************************/

// FETCH_SUBLEASES_REQUEST
export interface FetchSubleasesRequest {
  type: FETCH_SUBLEASES_REQUEST;
}

export const fetchSubleasesRequest = (): FetchSubleasesRequest => {
  return {
    type: FETCH_SUBLEASES_REQUEST
  };
};

// FETCH_SUBLEASES
export interface FetchSubleases {
  type: FETCH_SUBLEASES;
  subleases: List<Sublease>;
}

export const fetchSubleases = (subleases: List<Sublease>): FetchSubleases => {
  return {
    type: FETCH_SUBLEASES,
    subleases: subleases
  };
};

// FETCH_SUBLEASES_SUCCESS
export interface FetchSubleasesSuccess {
  type: FETCH_SUBLEASES_SUCCESS;
}

export const fetchSubleasesSuccess = (): FetchSubleasesSuccess => {
  return {
    type: FETCH_SUBLEASES_SUCCESS
  };
};

export interface FetchSubleasesFailure {
  type: FETCH_SUBLEASES_FAILURE;
}

export const fetchSubleasesFailure = (): FetchSubleasesFailure => {
  return {
    type: FETCH_SUBLEASES_FAILURE
  };
};

/****************************** UPDATE ******************************/

// UPDATE_SUBLEASE_REQUEST
export interface UpdateSubleaseRequest {
  type: UPDATE_SUBLEASE_REQUEST;
  sublease: Sublease;
}

export const updateSubleaseRequest = (sublease: Sublease): UpdateSubleaseRequest => {
  return {
    type: UPDATE_SUBLEASE_REQUEST,
    sublease: sublease
  };
};

// UPDATE_SUBLEASE
export interface UpdateSublease {
  type: UPDATE_SUBLEASE;
  sublease: Sublease;
}

export const updateSublease = (sublease: Sublease): UpdateSublease => {
  return {
    type: UPDATE_SUBLEASE,
    sublease: sublease
  };
};

// UPDATE_SUBLEASE_SUCCESS
export interface UpdateSubleaseSuccess {
  type: UPDATE_SUBLEASE_SUCCESS;
}

export const updateSubleaseSuccess = (): UpdateSubleaseSuccess => {
  return {
    type: UPDATE_SUBLEASE_SUCCESS
  };
};

export interface UpdateSubleaseFailure {
  type: UPDATE_SUBLEASE_FAILURE;
}

export const updateSubleaseFailure = (): UpdateSubleaseFailure => {
  return {
    type: UPDATE_SUBLEASE_FAILURE
  };
};

/****************************** DELETE ******************************/

// DELETE_SUBLEASE_REQUEST
export interface DeleteSubleaseRequest {
  type: DELETE_SUBLEASE_REQUEST;
  sublease: Sublease;
}

export const deleteSubleaseRequest = (sublease: Sublease): DeleteSubleaseRequest => {
  return {
    type: DELETE_SUBLEASE_REQUEST,
    sublease: sublease
  };
};

// DELETE_SUBLEASE
export interface DeleteSublease {
  type: DELETE_SUBLEASE;
  sublease: Sublease;
}

export const deleteSublease = (sublease: Sublease): DeleteSublease => {
  return {
    type: DELETE_SUBLEASE,
    sublease: sublease
  };
};

// DELETE_SUBLEASE_SUCCESS
export interface DeleteSubleaseSuccess {
  type: DELETE_SUBLEASE_SUCCESS;
}

export const deleteSubleaseSuccess = (): DeleteSubleaseSuccess => {
  return {
    type: DELETE_SUBLEASE_SUCCESS
  };
};

export interface DeleteSubleaseFailure {
  type: DELETE_SUBLEASE_FAILURE;
}

export const deleteSubleaseFailure = (): DeleteSubleaseFailure => {
  return {
    type: DELETE_SUBLEASE_FAILURE
  };
};

export type SubleaseActions = FetchSubleasesRequest
                                | FetchSubleasesSuccess
                                | FetchSubleasesFailure
                                | FetchSubleases
                                | CreateSubleaseRequest
                                | CreateSubleaseSuccess
                                | CreateSubleaseFailure
                                | CreateSublease
                                | DeleteSubleaseRequest
                                | DeleteSubleaseSuccess
                                | DeleteSubleaseFailure
                                | DeleteSublease
                                | UpdateSubleaseRequest
                                | UpdateSubleaseSuccess
                                | UpdateSubleaseFailure
                                | UpdateSublease;