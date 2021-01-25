import * as actionTypes from './actionTypes';


export function getCodintagInfosSuccess(datas) {
    return {type: actionTypes.GET_CODINTAG_INFOS_SUCCESS, payload: datas}
}

export function getCodintagReposSucess(datas) {
    return {type: actionTypes.GET_CODINTAG_REPOS_SUCESS, payload: datas}
}

export function getCodintagInfos() {
    return function (dispatch) {
        let url = "https://api.github.com/users/codintag";
        return fetch(url).then(response => response.json())
            .then(result => dispatch(getCodintagInfosSuccess(result)))
    }
}

export function getCodintagRepos() {
    return function (dispatch) {
        let url = "https://api.github.com/users/codintag/repos";
        return fetch(url).then(response => response.json())
            .then(result => dispatch(getCodintagReposSucess(result)))
    }
}