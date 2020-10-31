const initialState = {}


const allReducer = (state = initialState, action) => {
    switch(action.type) {
        case("STORE_EVERYTHING"):
        console.log("reducer")
        const everything = action.payload

        return {...state, ...everything}
    
        case("USER_INFO"):
        console.log("I'm here")
        const currentUser = action.payload

        return {...state, currentUser}
    default :
    return state
    }
}

export default allReducer