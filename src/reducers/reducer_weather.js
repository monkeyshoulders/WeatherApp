import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // return new instance of state adding new to [0]
            return [ action.payload.data, ...state ]; 
    }

    return state;
}

