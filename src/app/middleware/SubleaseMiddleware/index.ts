import * as actions from '../../actions';
import { put, takeEvery } from 'redux-saga/effects';
import { Sublease } from '../../models';
import { fetchSubleases, createSublease, deleteSublease, updateSublease } from '../../clients';
import { List } from 'immutable';
import {
    FETCH_SUBLEASES_REQUEST, CREATE_SUBLEASE_REQUEST, 
    DELETE_SUBLEASE_REQUEST, UPDATE_SUBLEASE_REQUEST 
} from '../../constants';

function* fetchSubleasesGenerator(): Generator {
  try {
    const subleases: List<Sublease> = yield fetchSubleases();
    yield put(actions.fetchSubleases(List(subleases)));
    yield put(actions.fetchSubleasesSuccess());
  } catch (error) {
    yield put(actions.fetchSubleasesFailure());
    yield put(actions.showErrorToggleTrue(error.message));
    console.warn(error);
  }
}

function* createSubleaseGenerator(action: actions.CreateSubleaseRequest): Generator {
    try {
        const sublease: Sublease = yield createSublease(action.sublease);
        yield put(actions.createSublease(sublease));
        yield put(actions.createSubleaseSuccess());
    } catch (error) {
        yield put(actions.createSubleaseFailure());
        yield put(actions.showErrorToggleTrue(error.message));
        console.warn(error);
    }
}

function* deleteSubleaseGenerator(action: actions.DeleteSubleaseRequest): Generator {
    try {
        const sublease: Sublease = action.sublease;
        yield deleteSublease(sublease);
        yield put(actions.deleteSublease(sublease));
        yield put(actions.deleteSubleaseSuccess());
    } catch (error) {
        yield put(actions.deleteSubleaseFailure());
        yield put(actions.showErrorToggleTrue(error.message));
        console.warn(error);
    }
}

function* updateSubleaseGenerator(action: actions.UpdateSubleaseRequest): Generator {
    try {
        const sublease: Sublease = action.sublease;
        yield updateSublease(sublease);
        yield put(actions.updateSublease(sublease));
        yield put(actions.updateSubleaseSuccess());
    } catch (error) {
        yield put(actions.updateSubleaseFailure());
        yield put(actions.showErrorToggleTrue(error.message));
        console.warn(error);
    }
}

export default function* subleaseSaga(): Generator {
    yield takeEvery(FETCH_SUBLEASES_REQUEST, fetchSubleasesGenerator);
    yield takeEvery(CREATE_SUBLEASE_REQUEST, createSubleaseGenerator);
    yield takeEvery(DELETE_SUBLEASE_REQUEST, deleteSubleaseGenerator);
    yield takeEvery(UPDATE_SUBLEASE_REQUEST, updateSubleaseGenerator);
}