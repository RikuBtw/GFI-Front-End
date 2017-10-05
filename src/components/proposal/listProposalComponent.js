import React, { Component } from 'react';

class listProposalComponent extends Component {
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
          {listApplications.map(function(proposal, index){
              return (
                <li key= {index} onClick={() => { showDetail(index)}}>
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
    );
  }
}

export default listProposalComponent;
