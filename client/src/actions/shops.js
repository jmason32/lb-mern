import * as api from '../api';

// Action Creators 
// Functions that return action 
// for async use dispatch and dispatch action for return
export const getShops = () => async (dispatch) => {
    try {
        const { data } = await api.fetchShops();
        dispatch({ type: 'FETCH_ALL', payload: data }); //sends to the reducer
    } catch (error) {
        console.log(error)
    }

}

// 2. Export createShop

export const createShop = (shop) => async (dispatch) => {
    try {
        const { data } = await api.createShop(shop);  // this comes back from the 1. "data"

        dispatch({type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error)
    }
}