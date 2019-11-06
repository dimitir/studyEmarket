import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import './main.scss';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux'
import rootReducers from './store/reducers'
const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const store = createStore(rootReducers, enhancers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);


