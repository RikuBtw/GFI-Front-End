import React, { Component } from 'react';

class detailProposalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = props.state;
  }
  render() {
    var listApplications = this.state.list;

    const showList = () => {
      this.setState({type: "list"});
      this.props.callbackParent("list");
    }
    const dateBegin = new Date(listApplications[this.state.detailIndex].beginning);
    const dateBeginString = new Date(listApplications[this.state.detailIndex].beginning).toLocaleDateString();
    const dateEnding = new Date(listApplications[this.state.detailIndex].ending);
    const days = Math.abs(dateBegin.getDate()-dateEnding.getDate());
    const months = Math.abs(dateBegin.getMonth()-dateEnding.getMonth());
    return (
      <div>
        <button className="back-button" onClick={() => { showList()}}></button>
        <div className="detail-component">
          <div className="detail-title">New proposal</div>
            <div className="detail-content">
              <span>Customer:</span> <p>{listApplications[this.state.detailIndex].company}</p><br/>
              <span>Title:</span> <p>{listApplications[this.state.detailIndex].proposalTitle}</p><br/>
              <span>Description:</span> <p className="detail-content-lowercase">{listApplications[this.state.detailIndex].description}</p><br/>
              <span>3 Main Key Success Factors:</span><br/>
              <p className="detail-content-lowercase">{listApplications[this.state.detailIndex].keySuccess}</p><br/>
              <span>Starts the latest:</span> <p>{dateBeginString}</p><br/>
              <span>Duration:</span> <p>{months}</p> <span>Month(s) and</span> <p>{days}</p> <span>days(s)</span><br/>
              <span>Localisation:</span> <p>{listApplications[this.state.detailIndex].location}</p><br/>
              <span>Status:</span> <p>{listApplications[this.state.detailIndex].status}</p><br/>
            </div>
          <div className="detail-title">Contact for this proposal</div>
            <div className="detail-content">
              <span>First name</span> <p>{listApplications[this.state.detailIndex].interlocutorFirstName}</p><br/>
              <span>Last name</span> <p>{listApplications[this.state.detailIndex].interlocutorLastName}</p><br/>
              <span>Email</span> <p>{listApplications[this.state.detailIndex].interlocutorMail}</p><br/>
              <span>Phone</span> <p>{listApplications[this.state.detailIndex].interlocutorPhone}</p><br/>
            </div>
          <div className="detail-title">Proposal</div>
            <div className="detail-content">
              <span>Price</span> <p>{listApplications[this.state.detailIndex].price}</p> <span>Euros</span><br/>
              <span>Mail Op Director</span> <p>{listApplications[this.state.detailIndex].directorMail}</p><br/>
            </div>
        </div>
      </div>
    );
  };
}

export default detailProposalComponent;
