import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { createStore,combineReducers } from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducer';
import createSagaMiddleWare from 'redux-saga';

// const rootReducer=combineReducers({
//     login:loginReducer,
//     home:homeReducer
// });

// const store= createStore(rootReducer);

const sagaMiddleWare= createSagaMiddleWare();
// sagaMiddleware.run(helloSaga)//saga imported


const store= createStore(reducer,applyMiddleware(sagaMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
