import { createStore, applyMiddleware } from "redux";
import reducers from "../reducer";
import sagas from "../sagas";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));
window['store'] = store;

sagaMiddleware.run(sagas);

export default store;
