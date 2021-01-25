import { combineReducers } from 'redux';
import githubInfosReducer from './githubInfosReducer';
import githubReposReducer from './githubReposReducer';

const rootReducer = combineReducers({
    githubInfosReducer,
    githubReposReducer
})

export default rootReducer;