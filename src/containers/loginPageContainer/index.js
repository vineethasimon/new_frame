import React, { Component } from 'react';
import Login from '../../components/Login/login';
import{connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
// import { push } from 'react-router-redux'; 


 const style = {
            backgroundColor: 'yellow',
            border: '1px solid blue',
            // position: 'relative',
            border: '2px solid #cdcdcd',
            borderColor: 'rgba(0,0,0,.14)',
            backgroundColor: 'AliceBlue',
            fontSize: '14px',
            height:'25px',
            marginTop:'10px',

        };

export class LoginPage extends Component { 

    componentWillReceiveProps(newProps) {
          console.log("logincomponentwillreceieveprops new-props", newProps);

    }

       loginAction = () => {
           this.props.OnLogin(); 
           this.props.history.push('/home_page');
       }

       backAction = () => {
           this.props.OnLogOut(); 
           this.props.history.push('/home');

       }

    render(){
        return(
        <div><Login login={this.loginAction} back={this.backAction}/>
        <br/>
        <div className = {style}>{this.props.ctr.loginStatus}</div></div>
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
                    //   dispatch(push('/'));
                    } ,
        OnLogOut:()=> dispatch({type:actionTypes.LOGOUT}),
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);
// export default LoginPage;