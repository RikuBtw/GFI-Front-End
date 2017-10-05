import React, { Component } from 'react';

class addComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {listCompany:[] ,loaded:false, proposalCompany: '', proposalTitle:'', proposalDescription:'', proposalFactor1: '', proposalFactor2: '', proposalFactor3: '' };
  }

  handleChange(e){
   this.setState({[e.target.name]: e.target.value})
 }

  render() {

    if (!this.state.loaded) {
      fetch('http://192.168.43.97:8080/customers/company?q=')
      .then((response) => response.json()
      .then((responseJson) => {
        this.setState({listCompany: responseJson});
        this.setState({proposalCompany: this.state.listCompany[0].siret});
      }))
      .catch((error) => {
        console.error(error);
      });
      this.setState({loaded: true});
    }

    const today = new Date();
    console.log(new Date(this.state.proposalDate));

    const addNewProposal = () => {
      const begin = new Date(this.state.proposalDate);

      const obj = {
        "idSalesPerson" : sessionStorage.getItem('id'),
        "idDirOps" : 3,
        "idCustomer" : this.state.proposalCompany,
        "proposalDate" : today.getFullYear() + "/" + ('0' + (today.getMonth()+1)).slice(-2) + "/" + ('0' + (today.getDate()+1)).slice(-2) ,
        "interlocutorLastName" : this.state.contactLastName,
        "interlocutorFirstName" : this.state.contactFirstName,
        "interlocutorMail" : this.state.contactMail,
        "interlocutorPhone" : this.state.contactPhone,
        "proposalTitle" : this.state.proposalTitle,
        "description" : this.state.proposalDescription,
        "keySuccess" :  this.state.proposalFactor1 + "\n" + this.state.proposalFactor2 + "\n" + this.state.proposalFactor3,
        "beginning" : begin.getFullYear() + "/" + ('0' + (begin.getMonth()+1)).slice(-2) + "/" + ('0' + (begin.getDate())).slice(-2),
        "ending": "2017/11/10",
        "location" : this.state.proposalLocation,
        "status": "Open",
        "price" : this.state.opPrice,
      };
      fetch('http://192.168.43.97:8080/addProposal', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
      })

    }
    const listCustomer = this.state.listCompany;
    return (
      <div className="add-component">
        <div className="add-title">New proposal</div>
          <div className="add-content">
            <div className="add-line"><span>Customer:*</span>
              <select name="proposalCompany" value={this.state.proposalCompany} onChange={(e) => this.handleChange(e)}>
                {listCustomer.map(function(customer, index){
                    return (
                      <option key={index} value={customer.siret}>{customer.company}</option>
                    );
                  }
                )}
              </select>
            </div>
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
            <div className="add-line"><span>Email:*</span> <input type="text" name="contactMail" value={this.state.contactMail} onChange={(e) => this.handleChange(e)}/></div>
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
