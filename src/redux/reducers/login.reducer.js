import { loginTypes } from "../types/Login.types";

const initialState = {
    user: null
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {

        case loginTypes.LOGIN_GOOGLE:
            return{
                ...state,
                user: action.payload
            }    
        default:
            return state;
    }
}