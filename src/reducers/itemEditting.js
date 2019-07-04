import * as Types from './../constants/ActionTypes';

var initailState = {};

const itemEditting = (state = initailState, action) => {
    switch (action.type) {
        case Types.DISPLAY_PRODUCT:
           return action.product
        default: return state;
    }
}

export default itemEditting;