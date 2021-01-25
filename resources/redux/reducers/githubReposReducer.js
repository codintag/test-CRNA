import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function getReposReducer(state = initialState.codintagRepos, action) {
    switch (action.type) {
        case actionTypes.GET_CODINTAG_REPOS_SUCESS:
            return action.payload
        default:
            return state;
    }
}