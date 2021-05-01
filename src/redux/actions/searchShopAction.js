import * as types from '../types';

export function setSearchData(data) {
    return {
        type: types.SEARCH_NEW_SHOP,
        payload: data,
    }
}