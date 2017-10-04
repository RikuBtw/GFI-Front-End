import React, { Component } from 'react';

class listComponent extends Component {
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
          {listApplications.map(function(need, index){
              return (
                <li key= {index} onClick={() => { showDetail(index)}}>
                  <div className="need-list-top">
                    <p>{need.Date_demande}</p>
                    <p>-</p>
                    <p>{need.Entreprise}</p>
                  </div>
                  <div className="need-list-middle">
                    <p>{need.Titre_demande}</p>
                    <p className={need.Statut === "Win" ? "need-list-status win" : need.Statut === "Lose" ? "need-list-status lose" : "need-list-status"}>{need.Statut}</p>
                  </div>
                  <div className="need-list-bottom">
                    <p>
                      {need.Localisation}
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

export default listComponent;
