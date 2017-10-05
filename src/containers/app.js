import React, { Component } from 'react';
import Login from '../components/login/loginComponent';
import Proposal from './proposalContainer';
import Loading from '../components/loading/loadingComponent';
import Menu from '../components/menu/menuComponent';
import Add from '../components/add/addComponent';
import Customer from './customerContainer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {appType: "proposal", menuPresent: true, type: "list", index: 0, list: [], sortProposalType: "status", loaded:false, newSearch:"", sortCustomerType:"company", listProposal: []};
  }

  onChildChanged(newType, newSearch) {
    this.setState({appType: newType, searchRequest: newSearch});
  }

  render() {
    const changeApp = (view) => {
      this.setState({appType: view});
    }

    //TODO Check if the user is an unique user
    const Checklogin = () => {
      const isLoggedIn = sessionStorage.getItem('id') != null;
      if (!isLoggedIn) {
        return <Login />;
      }
      switch (this.state.appType) {
        case "customer":
          return (
            <div>
              <Menu state={this.state}
                      callbackParent={(newType, newSearch) => this.onChildChanged(newType, newSearch)}/>
              <Customer state={this.state}/>
            </div>
          );
          break;
        case "proposal":
          return (
            <div>
              <Menu state={this.state}
                      callbackParent={(newType, newSearch) => this.onChildChanged(newType, newSearch)}/>
              <Proposal state={this.state}/>
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
