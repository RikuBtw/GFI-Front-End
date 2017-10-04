import React, { Component } from 'react';

class detailComponent extends Component {
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
    return (
      <div>
        <button className="back-button" onClick={() => { showList()}}></button>
        <div className="detail-component">
          <div className="detail-title">New need</div>
            <div className="detail-content">
              <span>Customer</span> <p>{listApplications[this.state.detailIndex].Entreprise}</p><br/>
              <span>Title</span> <p>{listApplications[this.state.detailIndex].Titre_demande}</p><br/>
              <span>Description</span> <p className="detail-content-lowercase">{listApplications[this.state.detailIndex].Description}</p><br/>
              <span>3 Main Key Success Factors</span><br/>
              <p className="detail-content-lowercase">{listApplications[this.state.detailIndex].Key_success}</p><br/>
              <span>Starts the latest:</span> <p>{listApplications[this.state.detailIndex].Date_demande}</p><br/>
              <span>Duration:</span> <p>{}</p> <span>Month(s) and</span> <p>{}</p> <span>days(s)</span><br/>
              <span>Localisation:</span> <p>{listApplications[this.state.detailIndex].Localisation}</p><br/>
              <span>Status</span> <p>{listApplications[this.state.detailIndex].Statut}</p><br/>
            </div>
          <div className="detail-title">Contact for this need</div>
            <div className="detail-content">
              <span>First name</span> <p>{listApplications[this.state.detailIndex].Interlocuteur_prenom}</p><br/>
              <span>Last name</span> <p>{listApplications[this.state.detailIndex].Interlocuteur_nom}</p><br/>
              <span>Email</span> <p>{listApplications[this.state.detailIndex].Interlocuteur_mail}</p><br/>
              <span>Phone</span> <p>{listApplications[this.state.detailIndex].Interlocuteur_tel}</p><br/>
            </div>
          <div className="detail-title">Proposal</div>
            <div className="detail-content">
              <span>Price</span> <p>{listApplications[this.state.detailIndex].Prix}</p> <span>Euros</span><br/>
              <span>Mail Op Director</span> <p>{listApplications[this.state.detailIndex].Interlocuteur_mail}</p><br/>
            </div>
          <button className="edit-button"></button>
        </div>
      </div>
    );
  };
}

export default detailComponent;
