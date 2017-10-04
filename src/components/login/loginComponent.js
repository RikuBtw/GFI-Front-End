import React, { Component } from 'react';
var _ = require('lodash');

class loginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  render() {

    const validateEmailFormat = (email) => {
      //This regex only accept 'xxx@gfi.fr adresses'
      var regex = /^[a-zA-z0-9\.\+\~\"(.)*\"\!\#\$\%\&\'\/\=\?\^_\{\}\|]+$/;
      return regex.test(email);
    }

    const requestLogin = () => {
      return fetch('http://192.168.43.97:8080/user')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
    }

    const validateEmail = (emailData, email) => {
      return emailData===email;
    }

    const validatePassword = (passwordData, password) => {
      return passwordData===password;
    }

    const confirmLogin = (e) => {

      e.preventDefault();
      if(this.state.email === "" || this.state.password === ""){
        return;
      }
      if(!validateEmailFormat(this.state.email)){
        return;
      }
      return fetch('http://192.168.43.97:8080/user')
      .then((response) => response.json())
      .then((responseJson) => {
        _.forEach(responseJson, (user)=>{
          if(!validateEmail(user.mail, this.state.email+"@gfi.fr") || !validatePassword(user.password, this.state.password)){
            return;
          }
          sessionStorage.setItem("id",user.idSalesPerson);
          window.location.reload();
        });
      })
      .catch((error) => {
        console.error(error);
      });
    }

    return (
      <div className="login-component-helper">
        <div className="app-title-container">
          <div className="app-title">Remember Meet</div>
        </div>
        <div className="login-container">
          <div className="login-component">
            <form>
              <div className="login-title">Please log in:</div>
              <div className="login-subtitle">Your Mail :</div>
              <div id="login-email">
                <input className="login-input" type="text" name="email" value={this.state.email} onChange={this.handleEmailChange}/>
                <div id="login-extension">@gfi.fr</div>
              </div>
              <div className="login-subtitle">Your Password :</div>
              <div id="login-password">
                <input className="login-input" type="password" value={this.state.password} onChange={this.handlePasswordChange}  name="password" />
              </div>
              <div className="login-helper">
                <button id="login-button" onClick={confirmLogin}>Ok</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default loginComponent;
