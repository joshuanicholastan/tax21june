import {
    NEW_TAX_INFO,
    CLEAN_TAX_OBJ,
    CLEAN_OP_OBJ,
    NEW_TAX_OUTPUT,

} from './types';

import axios from 'axios';
import history from '../History';

export const newTaxInfo = (data) => {
    return { type: NEW_TAX_INFO, payload: { field: data.field, value: data.value } }
}

export const newTaxOutput = (data) => {
    return { type: NEW_TAX_OUTPUT, payload: { field: data.field, value: data.value } }
}

export const cleanTaxObj = () => {
    return (dispatch) => {
        dispatch({ type: CLEAN_TAX_OBJ });
    }
}

export const cleanOpObj = () => {
    return (dispatch) => {
        dispatch({ type: CLEAN_OP_OBJ });
    }
}

export const submitInfo = () => {
}