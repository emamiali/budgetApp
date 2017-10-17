import React, { Component } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { connect } from 'react-redux';
import { fetchSpendings, fetchBills, fetchSavings } from '../../actions';

class BudgetRings extends Component {
  constructor(props){
    super(props);
    this.state = {
      billDataArray : []
    }
    console.log(this.props);
  }
  componentDidMount(){
    const { billData } = this.props;
    
    var billDataArray = Object.keys(billData).map( key => {
      return billData[key];
    });
    this.setState={billDataArray: billDataArray}
    console.log('potatoes: ', billDataArray);
  }

  // convertDataObjectToArray() {
  //   const { billData } = this.props;
  //
  //   var billDataArray = Object.keys(billData).map( key => {
  //     return billData[key];
  //   });
  //   this.setState={billDataArray: billDataArray}
  // }

  render() {
    const { billData } = this.props;
    if (!billData) {
      return (
        <div>
          Loading ...
        </div>
      )
    }
    return (
      <div className="row">
        <div className="col s4">
          <ResponsiveContainer width="100%" aspect={6.0/5.0}>
            <PieChart margin={{top: 30, right: 5, left: 30, bottom: 30}}>
              <Pie dataKey='value' data={data} innerRadius='85%' outerRadius='95%' label />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="col s4">
          <ResponsiveContainer width="100%" aspect={6.0/5.0}>
            <PieChart margin={{top: 30, right: 5, left: 30, bottom: 30}}>
              <Pie dataKey='value' data={data} innerRadius='85%' outerRadius='95%' label />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="col s4">
          <ResponsiveContainer width="100%" aspect={6.0/5.0}>
            <PieChart margin={{top: 30, right: 5, left: 30, bottom: 30}}>
              <Pie dataKey='value' data={data} innerRadius='85%' outerRadius='95%' label />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    billData: state.bills,
    spendingData: state.spendings,
    savingData: state.savings
  }
}

export default connect(mapStateToProps, {fetchSpendings, fetchBills, fetchSavings})(BudgetRings);

const data = [
  {
    name: "TotalSavings",
    value: 2500,
    fill: '#eb3939'
  },
  {
    name: "SavingsRemaining",
    value: 1000,
    fill: 'rgb(15, 115, 232)'
  }
]
