import subleaseSaga from './SubleaseMiddleware';
import { all } from 'redux-saga/effects';

export function* rootSaga(): Generator {
    yield all([
        subleaseSaga()
    ]);
}