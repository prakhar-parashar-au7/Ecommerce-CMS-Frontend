import axios from 'axios'

export const getEverythingAction = () => {
    return async (dispatch) => {
        const {data} = await axios({
            method : "get",
            url : "/getEverything"
        })
        console.log(data)
        return dispatch(storeEverythingInRedux(data))
    }
}

export const getVendorData = (vendorId) => {
    return async (dispatch) => {
        const {data} = await axios({
            method : "post",
            url : "/getVendorData",
            data : {
                vendorId : vendorId
            }
        })
        console.log(data)
        return dispatch(storeEverythingInRedux(data))
    }
}




export const storeEverythingInRedux = (data) => {
    return {
        type : "STORE_EVERYTHING",
        payload : data
    }
}



export const saveUserInfo = (data) => {
    return {
        type : "USER_INFO",
        payload : data
    }
}