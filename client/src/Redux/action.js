import { DELETE_TOKEN, SET_LOGGEDIN_USER, STORE_TOKEN} from "./actionType"

export const storeToken = (payload) => {
    return {
        type: STORE_TOKEN,
        payload
    }
}
export const deleteToken = () => {
    return {
        type: DELETE_TOKEN
    }
}
export const setLoggedInUser = (payload) => {
    return {
        type: SET_LOGGEDIN_USER,
        payload
    }
}


// yufugvsykgsdkfhdskhjd