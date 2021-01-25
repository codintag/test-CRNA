import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function getInfosReducer(state = initialState.codintagInfos, action) {
    switch (action.type) {
        case actionTypes.GET_CODINTAG_INFOS_SUCCESS:
            return action.payload
        default:
            return state;
    }
}