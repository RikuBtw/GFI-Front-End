import React, { Component } from 'react';

class addComponent extends Component {
  render() {
    return (
      <div className="add-component">
        <div className="add-title">New need</div>
          <div className="add-content">
            <div className="add-line"><span>Customer:*</span> <input type="text"/></div>
            <div className="add-line"><span>Title:*</span> <input type="text"/></div>
            <div className="add-line"><span>Description:</span> <input type="text"/></div>
            <div className="add-line"><span>3 Factors:</span></div>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <span>Starts the latest:</span> <input type="date"/><br/>
            <span>Duration:</span> <input type="number"/> <span>Month\(s) and</span> <input type="number"/> <span>day\(s)</span><br/>
            <div className="add-line"><span>Localisation:</span> <input type="text"/><br/></div>
            <div className="add-line-centered">
              <span>Status:</span><br/>
              <div className="add-radio">
                <input id="current" type="radio" name="status" value="current" checked="checked"/>
                <label for="current">Current</label>
                <input id="win" type="radio" name="status" value="win"/>
                <label for="win">Win</label>
                <input id="lose" type="radio" name="status" value="lost"/>
                <label for="lose">Lose</label>
              </div>
            </div>
          </div>
        <div className="add-title">Contact for this need</div>
          <div className="add-content">
            <div className="add-line"><span>First name:*</span> <input type="text"/></div>
            <div className="add-line"><span>Last name:*</span> <input type="text"/></div>
            <div className="add-line"><span>Email:*</span> <input type="text"/></div>
            <div className="add-line"><span>Phone:</span> <input type="text"/></div>
          </div>
        <div className="add-title">Proposal</div>
          <div className="add-content">
            <span>Price:</span> <input type="number"/> <span>Euros</span><br/>
            <div className="add-line"><span>OP Mail:</span> <input type="text"/></div><br/>
          </div>
        <button>Ok</button>
      </div>
    );
  }
}

export default addComponent;
