import React, { Component } from 'react';

class addComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {proposalCompany: '', proposalTitle:'', proposalDescription:'', proposalFactor1: '', proposalFactor2: '', proposalFactor3: '' };
  }

  handleChange(e){
   this.setState({[e.target.name]: e.target.value})
 }

  render() {

    const addNewProposal = () => {
      console.log(this.state);
      fetch('http://192.168.43.97:8080/addProposal', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        	"idSalesPerson" : 3,
        	"idDirOps" : 3,
        	"idCustomer" : "1010593246521",
        	"proposalDate" : "2017-10-10",
        	"interlocutorLastName" : "GHFFFUFU ",
        	"interlocutorFirstName" : "Franz",
        	"interlocutorMail" : "inter@mail.com",
        	"interlocutorPhone" : "0658953214",
        	"proposalTitle" : "Title",
        	"description" : "une description comme les autres",
        	"keySuccess" : "succès",
        	"beginning" : "2017-10-20",
        	"location" : "Nantes",
        	"status": "Open",
        	"price" : 300
        })
      })

    }

    return (
      <div className="add-component">
        <div className="add-title">New proposal</div>
          <div className="add-content">
            <div className="add-line"><span>Customer:*</span> <input type="text" name="proposalCompany" value={this.state.proposalCompany} onChange={(e) => this.handleChange(e)}/></div>
            <div className="add-line"><span>Title:*</span> <input type="text" name="proposalTitle" value={this.state.proposalTitle} onChange={(e) => this.handleChange(e)}/></div>
            <div className="add-line"><span>Description:</span> <input type="text" name="proposalDescription" value={this.state.proposalDescription} onChange={(e) => this.handleChange(e)}/></div>
            <div className="add-line"><span>3 Factors:</span></div>
            <input type="text" name="proposalFactor1" value={this.state.proposalFactor1} onChange={(e) => this.handleChange(e)}/>
            <input type="text" name="proposalFactor2" value={this.state.proposalFactor2} onChange={(e) => this.handleChange(e)}/>
            <input type="text" name="proposalFactor3" value={this.state.proposalFactor3} onChange={(e) => this.handleChange(e)}/>
            <span>Starts the latest:</span> <input type="date" name="proposalDate" value={this.state.proposalDate} onChange={(e) => this.handleChange(e)}/><br/>
            <span>Duration:</span> <input type="number" name="proposalMonth" value={this.state.proposalMonth} onChange={(e) => this.handleChange(e)}/> <span>Month\(s) and</span> <input type="number" name="proposalDay" value={this.state.proposalDay} onChange={(e) => this.handleChange(e)}/> <span>day\(s)</span><br/>
            <div className="add-line"><span>Localisation:</span> <input type="text" name="proposalLocalisation" value={this.state.proposalLocalisation} onChange={(e) => this.handleChange(e)}/><br/></div>
            <div className="add-line-centered">
              <span>Status:</span><br/>
              <div className="add-radio">
                <input id="current" type="radio" name="status" value="current" defaultChecked="checked"/>
                <label htmlFor="current">Current</label>
                <input id="win" type="radio" name="status" value="win"/>
                <label htmlFor="win">Win</label>
                <input id="lose" type="radio" name="status" value="lost"/>
                <label htmlFor="lose">Lose</label>
              </div>
            </div>
          </div>
        <div className="add-title">Contact for this proposal</div>
          <div className="add-content">
            <div className="add-line"><span>First name:*</span> <input type="text" name="contactFirstName" value={this.state.contactFirstName} onChange={(e) => this.handleChange(e)}/></div>
            <div className="add-line"><span>Last name:*</span> <input type="text" name="contactLastName" value={this.state.contactLastName} onChange={(e) => this.handleChange(e)}/></div>
            <div className="add-line"><span>Email:*</span> <input type="text" name="contactEmail" value={this.state.contactEmail} onChange={(e) => this.handleChange(e)}/></div>
            <div className="add-line"><span>Phone:</span> <input type="text" name="contactPhone" value={this.state.contactPhone} onChange={(e) => this.handleChange(e)}/></div>
          </div>
        <div className="add-title">Proposal</div>
          <div className="add-content">
            <span>Price:</span> <input type="number" name="opPrice" value={this.state.opPrice} onChange={(e) => this.handleChange(e)}/> <span>Euros</span><br/>
            <div className="add-line"><span>OP Mail:</span> <input type="text" name="opEmail" value={this.state.opEmail} onChange={(e) => this.handleChange(e)}/></div><br/>
          </div>
        <button onClick={()=>{addNewProposal()}}>Ok</button>
      </div>
    );
  }
}

export default addComponent;
