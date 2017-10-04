import React, { Component } from 'react';
import List from '../components/need/listComponent';
import Detail from '../components/need/detailComponent';

class needContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {type: "list", index: 0, list: [], sortType: "date", loaded:false};
  }

  onChildChanged(newState, newIndex) {
    this.setState({ type: newState, detailIndex: newIndex });
  }

  render() {

    const requestList = () => {
      return fetch('http://192.168.43.97:8080/getNeeds/3')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({list: responseJson});
      })
      .catch((error) => {
        console.error(error);
      });
    }

    const changeSort = (filter) => {
      this.setState({sortType: filter});
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
          <nav className="need-filter-nav">
            <span className={this.state.sortType === "date" ? "selected" : ""} onClick={() => {changeSort("date")}}>By Date</span>
            <span className={this.state.sortType === "customer" ? "selected" : ""} onClick={() => {changeSort("customer")}}>By Customer</span>
            <span className={this.state.sortType === "status" ? "selected" : ""} onClick={() => {changeSort("status")}}>By Status</span>
            <span className={this.state.sortType === "title" ? "selected" : ""} onClick={() => {changeSort("title")}}>By Title</span>
          </nav>
        );
      }else{
        return <div></div>;
      }
    }

    return (
      <div className="needContainer">
        <Filter />
        <div className="need-display-container">
          <Display />
        </div>
      </div>
    );
  }
}

export default needContainer;
