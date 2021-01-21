import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

function configStore(){
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(rootReducer,undefined, composeEnhancers(applyMiddleware(sagaMiddleware)));

    sagaMiddleware.run(rootSaga);
    
    
    return store
}

export const store = configStore()
