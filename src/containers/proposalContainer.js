import React, { Component } from 'react';
import List from '../components/proposal/listProposalComponent';
import Detail from '../components/proposal/detailProposalComponent';

class proposalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = props.state;
  }

  onChildChanged(newState, newIndex) {
    this.setState({ type: newState, detailIndex: newIndex });
  }

  render() {
    const requestList = () => {
      return fetch('http://192.168.43.97:8080/getProposal/'+ sessionStorage.getItem('id') +'/'+ this.state.sortProposalType +'?q=' +(this.state.searchRequest || ""))
      .then((response) => response.json()
      .then((responseJson) => {
        this.setState({list: responseJson});
      }))
      .catch((error) => {
        console.error(error);
      });
    }

    const changeSort = (filter) => {
      this.setState({sortProposalType: filter, loaded: false});
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
          <span className={this.state.sortProposalType === "status" ? "selected" : ""} onClick={() => {changeSort("status")}}>By Status</span>
            <span className={this.state.sortProposalType === "proposalDate" ? "selected" : ""} onClick={() => {changeSort("proposalDate")}}>By Date</span>
            <span className={this.state.sortProposalType === "company" ? "selected" : ""} onClick={() => {changeSort("company")}}>By Customer</span>
            <span className={this.state.sortProposalType === "proposalTitle" ? "selected" : ""} onClick={() => {changeSort("proposalTitle")}}>By Title</span>
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
