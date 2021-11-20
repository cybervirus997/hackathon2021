import { loadData, saveData } from "../utils/localstorage";
import { DELETE_TOKEN, SET_LOGGEDIN_USER, STORE_TOKEN } from "./actionType";

const data = {
    loggedIn: false,
    token: "",
    loggedInUser: {},
}

const initState = loadData("userToken") || data;

export const tokenReducer = (state = initState, { type, payload }) => {
    switch (type) {
        default: return state
        case STORE_TOKEN:
            const stateObj1 = {
                ...state,
                loggedIn: true,
                token: payload.token,
            }
            saveData("userToken", stateObj1);
            return stateObj1;
        case DELETE_TOKEN:
            const stateObj2 = {
                ...state,
                loggedIn: false,
                loggedInUser:{},
                token: "",
            }
            saveData("userToken", stateObj2);
            return stateObj2;
        case SET_LOGGEDIN_USER:
            const stateObj3 = {
                ...state,
                loggedInUser: payload
            }
            saveData("userToken", stateObj3);
            return stateObj3;
    }
}