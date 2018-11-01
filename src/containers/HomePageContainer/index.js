import React, { Component } from 'react';
import Home from '../../components/Home/home';
import{connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
// import { push } from 'react-router-redux'; 

export class HomePage extends Component { 

    backAction=()=>{
         this.props.OnLogOut(); 
         this.props.history.goBack();
    }

    render(){
        return(
        <div><Home backAction={this.backAction}/></div>
        );
    }


}
const mapStateToProps = state=>{
    return{
       ctr:state //reffered as this.props.ctr
    };
}

const mapDispatchToProps= dispatch =>{


    return{
        OnLogin:()=>{ dispatch({type:actionTypes.LOGIN});
        // dispatch(push('/home_page'))
    },
        OnLogOut:()=>{ dispatch({type:actionTypes.LOGOUT});
                    //    dispatch(push('/'));
                },
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);