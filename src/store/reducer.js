import * as actionTypes from './actions';

const initialState={
    loginStatus:false,
    results : [],
}

const reducer =(state=initialState,action)=>{
    switch(action.type){

         case 'LOGIN':
         return {...state,loginStatus: true}
         case 'LOGOUT':
         return {...state,loginStatus: false}
         case 'IFGARRAY':
         return {...state,results: state.results.concat(action.payload)}
         default:
         return state;
}
console.log("state from reducer=>",state);
    }
    

export default reducer;