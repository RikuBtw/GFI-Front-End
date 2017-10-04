import React, { Component } from 'react';
import Login from '../components/login/loginComponent';
import Need from './needContainer';
import Loading from '../components/loading/loadingComponent';
import Menu from '../components/menu/menuComponent';
import Add from '../components/add/addComponent'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {appType: "need", menuPresent: true};
  }

  onChildChanged(newType) {
    this.setState({appType: newType});
  }

  render() {

    const changeApp = (view) => {
      this.setState({appType: view});
    }

    const Checklogin = () => {
      const isLoggedIn = sessionStorage.getItem('id') === 'test';
      if (!isLoggedIn) {
        return <Login />;
      }
      switch (this.state.appType) {
        case "planning":
          return (
            <div>
              <Menu state={this.state}
                      callbackParent={(newType) => this.onChildChanged(newType)}/>
              <button className="add-button" onClick={() => {changeApp("add")}}></button>
            </div>
          );
          break;
        case "need":
          return (
            <div>
              <Menu state={this.state}
                      callbackParent={(newType) => this.onChildChanged(newType)}/>
              <Need />
              <button className="add-button" onClick={() => {changeApp("add")}}></button>
            </div>
          );
          break;
        case "result":
          return (
            <div className="root-helper">
              <Menu state={this.state}
                      callbackParent={(newType) => this.onChildChanged(newType)}/>
              <div className="img-stats-mockup"></div>
              <button className="add-button" onClick={() => {changeApp("add")}}></button>
            </div>
          );
          break;
        case "add":
          return (
            <div>
              <Menu state={this.state}
                    callbackParent={(newType) => this.onChildChanged(newType)}/>
              <Add />
            </div>
          );
          break;
        default:
          return (
            <div>
              <Menu state={this.state}
                    callbackParent={(newType) => this.onChildChanged(newType)}/>
              <div>
                <span onClick={() => {changeApp("planning")}}>Mes rendez-vous</span>
                <span onClick={() => {changeApp("need")}}>Mes demandes</span>
                <span onClick={() => {changeApp("result")}}>Mes résultats</span>
              </div>
              <div />;
              <button onClick={() => {changeApp("add")}}>+</button>
            </div>
          );
      }
    }

    return (
      <Checklogin />
    );
  }
}

export default App;
