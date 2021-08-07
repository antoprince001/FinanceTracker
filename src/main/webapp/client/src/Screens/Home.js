import React, { useState, useEffect } from "react";
import DataTable from 'react-data-table-component';
import { connect } from "react-redux";
import AuthToken from "../utils/AuthToken";
import { fetchIncome } from "../redux/index";
import axios from 'axios';

const data = [{ id: 1, source: 'Conan the Barbarian', amount: '1982',entryYear: '1982',entryMonth: '1982',entryDay: '1982' }];
const columns = [
  {
    name: 'ID',
    selector: 'id',
    sortable: true,
  },
  {
    name: 'Source',
    selector: 'source',
    sortable: true,
  },
  {
    name: 'Amount',
    selector: 'amount',
    sortable: true,
    
  },
  {
    name: 'Year',
    selector: 'entryYear',
    sortable: true,
    right: true,

  },
  {
    name: 'Month',
    selector: 'entryMonth',
    sortable: true,
    right: true,
  },
  {
    name: 'Day',
    selector: 'entryDay',
    sortable: true,
    right: true,
  }
];

const Home = (props) => {



  useEffect(()=>{
    if (localStorage.jwtToken) {
      AuthToken(localStorage.jwtToken);
    }
    //incomeget();
    props.fetchIncome(6,2020);
    console.log('props');
    console.log(props.income.income);

    setTimeout(() => {
      let incomeData = props.income.income;
      if (incomeData) {
        console.log(incomeData);
        setIncome(incomeData);
      }
    }, 8000);
  },[]);
  
  const [income, setIncome] = useState(data);

  

  const incomeget = ()=>{
    axios
      .get("http://localhost:5000/api/income")
      .then((response) => {
        console.log('all');
        console.log(response);
        //dispatch(incomeSuccess(response.data));
      })
      .catch((error) => {
        console.log('err'+error);
        //dispatch(incomeFailure(error));
      });
  }

  const customStyles = {
    rows: {
      style: {
        minHeight: '72px', // override the row height
        fontWeight : 'bold',
      }
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };
    return (
        <div>
          <br/>
          
            <DataTable
                title="Income"
                columns={columns}
                data={income}
                striped= {true}
                customStyles={customStyles}
                //theme="dark"
            />
            <DataTable
                title="Expense"
                columns={columns}
                data={data}
            />
            <DataTable
                title="Assets"
                columns={columns}
                data={data}
            />
            <DataTable
                title="Liabilities"
                columns={columns}
                data={data}
            />
            <button onclick={incomeget}>Get income</button>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    income: state.income,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchIncome: (month,year) => dispatch(fetchIncome(month,year)),    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
