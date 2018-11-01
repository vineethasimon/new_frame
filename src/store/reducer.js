import * as actionTypes from './actions/actionTypes';

const initialState={
    loginStatus:false,
    results : [],
    userToken:'',
    loginFailed:false,
    serviceFailed:false
}

const reducer =(state=initialState,action)=>{
    switch(action.type){

         case actionTypes.LOGIN_SUCCESS:
         return {...state,loginStatus: true,userToken:action.payload}
         case actionTypes.LOGOUT:
         return {...state,loginStatus: false,loginFailed:false, serviceFailed:false}
         case 'IFGARRAY':
         return {...state,results: state.results.concat(action.payload)}
         case actionTypes.AUTH_FAIL:
         localStorage.removeItem('userToken');
        if (action.status === 'success') {
            return {...state,loginFailed: false}
            
        } else {
            return {...state,loginFailed: true};
        }
        case actionTypes.SERVICE_FAIL:
           return {...state,serviceFailed: true}
         default:
         return state;
}
console.log("state from reducer=>",state);
    }
    

export default reducer;