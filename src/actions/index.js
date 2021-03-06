import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=somethinghasntbeenusedbefore';

export function getList(){
    const response = axios.get(`${BASE_URL}/TODOS${API_KEY}`);

    return{
        type: types.GET_LIST_DATA,
        payload: response
    }
}

export function addNewItem(item){
    const response = axios.post(`${BASE_URL}/TODOS${API_KEY}`, item);

    return{
        type: types.ADD_ITEM,
        payload: response
    }
}