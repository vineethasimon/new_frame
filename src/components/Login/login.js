
import React, { Component } from 'react';
import './login.css';
import { Button, Form, FormGroup, FormControl, InputGroup, Image } from 'react-bootstrap';
class Login extends Component {

 state = {
    username:'',
    password:''
  }

    setTextField=(e) => {
    this.setState({ [e.target.id]: e.target.value });
  }
    
    loginAction=()=>{
//   console.log("login action-props",this.props);
    this.props.login();
}
    backAction = () => {
        //   console.log("login action-props",this.props);
        this.props.back();
    }
    
    render(){

        //inline style
        const style = {
            backgroundColor: 'yellow',
            border: '1px solid blue',
            position: 'relative',
            border: '2px solid #cdcdcd',
            borderColor: 'rgba(0,0,0,.14)',
            backgroundColor: 'AliceBlue',
            fontSize: '14px',
            height:'25px',
            marginTop:'10px',

        };



     return (
      <div>
        <div className="loginBody">
          <div className="container">
            <div className="spanT">&nbsp;Sysco Login </div>
            <div className="loginCard">
              {/*{errorDiv}*/}
              <div className="inputsSection">
                <Form id="loginForm">
                  <FormGroup>
                    <InputGroup className="greenMargin">
                      <InputGroup.Addon className="inputImage"><span className="glyphicon glyphicon-user whiteIcon"></span></InputGroup.Addon>
                      <FormControl id="userId" className="username" type="text" placeholder="Username" />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="greenMargin">
                      <InputGroup.Addon className="inputImage"><span className="glyphicon glyphicon-lock whiteIcon"></span></InputGroup.Addon>
                      <FormControl id="passWord" className="password" type="password" placeholder="Password" />
                    </InputGroup>
                  </FormGroup>
                  <div >
                    <Button id="loginButton" className="loginButton" onClick={this.loginAction}>LOGIN</Button>
                     <Button id="loginBackButton" className="loginButton" onClick={this.backAction}>BACK</Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    }
}
export default Login