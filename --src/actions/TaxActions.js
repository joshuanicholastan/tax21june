import {
    NEW_TAX_INFO,
    CLEAN_TAX_OBJ
} from './types';

import axios from 'axios';
import history from '../History';

export const newTaxInfo = (data) => {
    return { type: NEW_TAX_INFO, payload: { field: data.field, value: data.value } }
}

export const cleanTaxObj = () => {
    return (dispatch) => {
        dispatch({ type: CLEAN_TAX_OBJ });
    }
}