import { createStore, combineReducers, applyMiddleware, Middleware } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { rootSaga } from './app/middleware';
import { History } from 'history';
import createHistory from 'history/createBrowserHistory';
import reducers from './app/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const history: History = createHistory();

const RouterMiddleware: Middleware = routerMiddleware(history);
const sagaMiddleware: SagaMiddleware<Generator> = createSagaMiddleware();

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  composeWithDevTools(applyMiddleware(
    RouterMiddleware, 
    sagaMiddleware
  ))
);

sagaMiddleware.run(rootSaga);
export default store;