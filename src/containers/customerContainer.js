import React, { Component } from 'react';
import List from '../components/customer/listCustomerComponent';
import Detail from '../components/customer/detailCustomerComponent';

class customerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = props.state;
  }

  onChildChanged(newState, newIndex) {
    this.setState({ type: newState, detailIndex: newIndex });
  }

  render() {
    const requestList = () => {
      return fetch('http://192.168.43.97:8080/customers/'+this.state.sortCustomerType + '?q=' + (this.state.searchRequest ||""))
      .then((response) => response.json()
      .then((responseJson) => {
        this.setState({list: responseJson});
      }))
      .catch((error) => {
        console.error(error);
      });
    }

    const changeSort = (filter) => {
      this.setState({sortCustomerType: filter, loaded: false});
    }

    const Filter = () => {
      if(this.state.type === "list"){
        return (
          <nav className="customer-filter-nav">
            <span className={this.state.sortCustomerType === "company" ? "selected" : ""} onClick={() => {changeSort("company")}}>By Company</span>
            <span className={this.state.sortCustomerType === "contact" ? "selected" : ""} onClick={() => {changeSort("contact")}}>By Contact</span>
          </nav>
        );
      }else{
        return <div></div>;
      }
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

    return (
      <div className="customerContainer">
        <Filter />
        <div className="customer-display-container">
          <Display />
        </div>
      </div>
    );
  }
}

export default customerContainer;
