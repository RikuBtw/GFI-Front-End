import React, { Component } from 'react';

class listCustomerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = props.state;
  }

  render() {
    var listApplications = this.state.list;

    const showDetail = (index) => {
      this.setState({type: "detail", detailIndex: index});
      this.props.callbackParent("detail", index);
    }

    return (
      <div className="list-component">
        <ul>
          {listApplications.map(function(customer, index){
              return (
                <li key= {index} onClick={() => { showDetail(index)}}>
                  <div className="customer-list-top">
                    <p>{customer.company}</p>
                  </div>
                  <div className="customer-list-middle">
                    <p>{customer.contact}</p>
                  </div>
                  <div className="customer-list-bottom">
                    <p>
                      {customer.phone} - {customer.mail}
                    </p>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default listCustomerComponent;
