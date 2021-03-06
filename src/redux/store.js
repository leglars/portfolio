import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createHashHistory';
import { routerMiddleware } from 'react-router-redux'

import reducers from './reducers/index';

import projects from '../data/projects';


export const history = createHistory();
const middleware = routerMiddleware(history);

const initialData = {
    data: {
        projects
    }
};


let store = createStore(
    reducers,
    initialData,
    applyMiddleware(middleware)
);

export default store;