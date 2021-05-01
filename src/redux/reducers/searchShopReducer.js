import * as types from '../types';

const initialState = {
    searchQuery: '',
    selectedShopData: {}
}

export const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SEARCH_NEW_SHOP:
            return {...state, searchQuery: action.payload}
        case types.SET_SHOP_DATA:
            return {...state, selectedShopData: action.payload}
        default:
            return state;
    }
}