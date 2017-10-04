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
                  <p onClick={() => {changeApp("planning")}}>Mes rendez-vous</p>
                  <p onClick={() => {changeApp("need")}}>Mes demandes</p>
                  <p onClick={() => {changeApp("result")}}>Mes Résultats</p>
                  <p onClick={() => {disconnect()}}>Se déconnecter</p>
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
              <span className={this.state.appType === "planning" ? "selected" : ""} onClick={() => {changeApp("planning")}}>Mes rendez-vous</span>
              <span className={this.state.appType === "need" ? "selected" : ""} onClick={() => {changeApp("need")}}>Mes demandes</span>
              <span className={this.state.appType === "result" ? "selected" : ""} onClick={() => {changeApp("result")}}>Mes résultats</span>
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
          <Shownav/>
        </header>
    );
  };
}


export default menuComponent;
