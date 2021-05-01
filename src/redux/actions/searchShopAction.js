import * as types from '../types';

export function setSearchData(data) {
    return {
        type: types.SEARCH_NEW_SHOP,
        payload: data,
    }
}

export function setShopData(data) {
    return {
        type: types.SET_SHOP_DATA,
        payload: data,
    }
}