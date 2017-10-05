import React, { Component } from 'react';

class detailCustomerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = props.state;
    this.setState({proposalLoaded: false});
  }
  render() {
    var listApplications = this.state.list;
    const requestProposal = () => {
      return fetch('http://192.168.43.97:8080/getCustomerProposal/'+listApplications[this.state.detailIndex].siret)
      .then((response) => response.json()
      .then((responseJson) => {
        this.setState({listProposal: responseJson});
      }))
      .catch((error) => {
        console.error(error);
      });
    }
    if(!this.state.proposalLoaded){
      requestProposal();
      this.setState({proposalLoaded: true});
    }

    const showList = () => {
      this.setState({type: "list"});
      this.props.callbackParent("list");
    }

    return (
      <div>
        <button className="back-button" onClick={() => { showList()}}></button>
        <div className="detail-component">
          <div className="detail-title-company">{listApplications[this.state.detailIndex].company}</div>
            <div className="detail-content">
              <span>Siret:</span> <p className="detail-content-lowercase">{listApplications[this.state.detailIndex].siret}</p><br/>
              <span>Address:</span> <p className="detail-content-lowercase">{listApplications[this.state.detailIndex].address}</p><br/>
            </div>
          <div className="detail-title">Contact</div>
            <div className="detail-content">
              <span>Name:</span> <p className="detail-content-lowercase">{listApplications[this.state.detailIndex].contact}</p><br/>
              <span>Phone:</span> <p className="detail-content-lowercase">{listApplications[this.state.detailIndex].phone}</p><br/>
              <span>Mail:</span> <p className="detail-content-lowercase">{listApplications[this.state.detailIndex].mail}</p><br/>
            </div>
          <div className="detail-title">Current Proposals</div>
          <div className="list-component">
            <ul>
              {this.state.listProposal.map(function(proposal, index){
                  return (
                    <li key= {index} >
                      <div className="proposal-list-top">
                        <p>{proposal.proposalDate}</p>
                        <p>-</p>
                        <p>{proposal.company}</p>
                      </div>
                      <div className="proposal-list-middle">
                        <p>{proposal.proposalTitle}</p>
                        <p className={proposal.status === "Win" ? "proposal-list-status win" : proposal.status === "Lost" ? "proposal-list-status lose" : "proposal-list-status"}>{proposal.status}</p>
                      </div>
                      <div className="proposal-list-bottom">
                        <p>
                          {proposal.interlocutorFirstName} {proposal.interlocutorLastName}
                        </p>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    );
  };
}

export default detailCustomerComponent;
