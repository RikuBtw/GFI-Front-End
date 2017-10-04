import React, { Component } from 'react';

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

    const validateEmail = (email) => {
      return true;
    }

    const validatePassword = (password) => {
      return true;
    }

    const confirmLogin = (e) => {
      e.preventDefault();
      if(this.state.email === "" || this.state.password === ""){
        return;
      }
      if(!validateEmailFormat(this.state.email)){
        return;
      }
      if(!validateEmail(this.state.email) || !validatePassword(this.state.password)){
        return;
      }
      sessionStorage.setItem("id","test");
      window.location.reload();
    };

    return (
      <div className="login-helper">
        <div className="login-logo"></div>
        <div className="login-container">
          <div className="login-component">
            <form>
              <div id="login-email">
                <input className="login-input" type="text" name="email" value={this.state.email} onChange={this.handleEmailChange} placeholder="Adress" />
                <div id="login-extension">@gfi.fr</div>
              </div>
              <div id="login-password">
                <input className="login-input" type="password" value={this.state.password} onChange={this.handlePasswordChange}  name="password" placeholder="Password" />
              </div>
              <br />
              <button id="login-button" onClick={confirmLogin}>Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default loginComponent;
