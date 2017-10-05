import React, { Component } from 'react';
import List from '../components/proposal/listProposalComponent';
import Detail from '../components/proposal/detailProposalComponent';

class proposalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {type: "list", index: 0, list: [], sortType: "status", loaded:false};
  }

  onChildChanged(newState, newIndex) {
    this.setState({ type: newState, detailIndex: newIndex });
  }

  render() {
    const requestList = () => {
      return fetch('http://192.168.43.97:8080/getProposals/'+ sessionStorage.getItem('id') +'/'+ this.state.sortType)
      .then((response) => response.json()
      .then((responseJson) => {
        this.setState({list: responseJson});
      }))
      .catch((error) => {
        console.error(error);
      });
    }

    const changeSort = (filter) => {
      this.setState({sortType: filter, loaded: false});
    }

    const Display = () => {
      if(!this.state.loaded){
        requestList();
        this.setState({loaded: true});
      }

      if(this.state.type === "list"){
        return  (
          <List state={this.state}
                callbackParent={(newType, newIndex) => this.onChildChanged(newType, newIndex)}/>
        );
      }else{
        return (
          <Detail state={this.state}
                callbackParent={(newType, newIndex) => this.onChildChanged(newType, "")}/>
        );
      }
    }

    const Filter = () => {
      if(this.state.type === "list"){
        return (
          <nav className="proposal-filter-nav">
          <span className={this.state.sortType === "status" ? "selected" : ""} onClick={() => {changeSort("status")}}>By Status</span>
            <span className={this.state.sortType === "beginning" ? "selected" : ""} onClick={() => {changeSort("beginning")}}>By Date</span>
            <span className={this.state.sortType === "company" ? "selected" : ""} onClick={() => {changeSort("company")}}>By Customer</span>
            <span className={this.state.sortType === "proposalTitle" ? "selected" : ""} onClick={() => {changeSort("proposalTitle")}}>By Title</span>
          </nav>
        );
      }else{
        return <div></div>;
      }
    }

    return (
      <div className="proposalContainer">
        <Filter />
        <div className="proposal-display-container">
          <Display />
        </div>
      </div>
    );
  }
}

export default proposalContainer;
