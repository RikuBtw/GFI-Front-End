import React, { Component } from 'react';

class menuComponent extends Component {
  constructor(props) {
    super(props);
    this.state = props.state;
    this.setState({toggleMenu: false});
  }
  render() {

    const changeApp = (view) => {
      this.setState({appType: view});
      this.props.callbackParent(view);
    }

    const disconnect = () => {
      sessionStorage.clear();
      window.location.reload();
    }

    const triggerMenu = () => {
      const boolean = !this.state.toggleMenu;
      this.setState({toggleMenu: boolean});
    }

    const Showmenu = () => {
       if (this.state.toggleMenu) {
         return(
              <div className="menu-open-helper">
                <div className="menu-open-container">
                  <p onClick={() => {changeApp("customer")}}>All Gfi Clients</p>
                  <p onClick={() => {changeApp("proposal")}}>My Proposals</p>
                  <p onClick={() => {changeApp("result")}}>My Results</p>
                  <p onClick={() => {disconnect()}}>Log Out</p>
                </div>
              </div>
         );
       }else{
         return (
          <div></div>);
       }
     }

     const Shownav = () => {
        if (this.state.menuPresent) {
          return(
            <nav className="menu-nav">
              <span className={this.state.appType === "customer" ? "selected" : ""} onClick={() => {changeApp("customer")}}>All Gfi Clients</span>
              <span className={this.state.appType === "proposal" ? "selected" : ""} onClick={() => {changeApp("proposal")}}>My Proposals</span>
              <span className={this.state.appType === "result" ? "selected" : ""} onClick={() => {changeApp("result")}}>My Results</span>
            </nav>
          );
        }else{
          return (
           <div></div>);
        }
      }

    return(
        <header>
          <div className="menu-button-container">
            <button id="menu-button" onClick={() => {triggerMenu()}}></button>
            <Showmenu />
          </div>
          <div className="menu-search">
            <input type="search" placeholder="Looking for a client? A proposal?"></input>
          </div>
          <Shownav/>
        </header>
    );
  };
}


export default menuComponent;
