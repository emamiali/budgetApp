import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBills } from '../../../actions';


class BillList extends Component {
  componentDidMount() {
    this.props.fetchBills();
  }

  renderBills() {
    if (_.isEmpty(this.props.bills)) {
      return (<div> Add a Bill</div>)
    }
    return _.map(this.props.bills, bill => {
      return (
        <li className="collection-item" key={bill._id}>
          <Link to={`/bills/${bill._id}`} >
            <strong>Title: </strong>{bill.billTitle}
            <br />
            <strong>Amount: $</strong>{bill.billAmount}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div>
          <ul className="collection">
            {this.renderBills()}
          </ul>
        </div>
        <div>
          <Link to="/bills/new" className="waves-effect waves-light btn">
            Add
          </Link>
        </div>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return { bills: state.bills}
}

export default connect(mapStateToProps, { fetchBills })(BillList);
