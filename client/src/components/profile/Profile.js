import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import NewTotalFunds from './NewTotalFunds';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state= {
      newTotalFundsFormVisible: false,
      addNewSavingsAndIncome: true
    }
  }

  componentDidMount() {
    this.props.auth;
  }

  showNewTotalFundsFrom(){
    this.setState({
      newTotalFundsFormVisible: !this.state.newTotalFundsFormVisible,
      addNewSavingsAndIncome: !this.state.addNewSavingsAndIncome
     });
  }

  renderContent() {
    const { auth } = this.props;

    if (!auth) {
      return <div>Loading ...</div>
    }
    const newAvatarSize = "300"
    var imageStr = auth.data.avatar;
    var newImageStr = imageStr.split("?sz=50")[0]+"?sz="+newAvatarSize;

    return (
      <div>
        <div className="row">
          <div className="col s6">
            <img src={newImageStr} />
            <p><strong>Name --- </strong>{auth.data.name}</p>
            <p><strong>Email --- </strong>{auth.data.email}</p>
          </div>
          <div className="col s6">
            <p><strong>Savings --- </strong></p>
            <p><strong>Total Earning --- </strong></p>

            { this.state.addNewSavingsAndIncome ?
              <button
                onClick={() => this.showNewTotalFundsFrom()}
                className="waves-effect waves-light btn"
              >
                Add Savings Goal and Income
              </button>
            : null }
            { this.state.newTotalFundsFormVisible ? <NewTotalFunds /> : null }
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  };
}

function mapStateToProps(state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(Profile);