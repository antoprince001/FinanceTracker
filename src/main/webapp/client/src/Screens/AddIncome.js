import React,{ useState } from 'react';
import { useHistory} from 'react-router-dom'
import Accordion from '../Components/Accordion/Accordion';
import { connect } from "react-redux";
import { saveIncome } from "../redux/index";
import axios from 'axios';

const AddIncome = (props) => {
    const history = useHistory()
    const [amount,setAmount] = useState("0");
    const [source,setSource] = useState('');
    const [date,setDate] = useState('');
    const [type,setType] = useState('');
    
    const PostIncome = ()=>{
        console.log(amount);
        console.log(date);
        let entryDate = date.split('-');
        let entryYear = Number(entryDate[0]);
        let entryDay = Number(entryDate[2]);
        let entryMonth = Number(entryDate[1]);
        console.log(entryYear,entryDay,entryMonth);
        const Income= {
            amount : amount,
            type : type,
            source : source,
            entryDay : entryDay,
            entryMonth : entryMonth,
            entryYear : entryYear
        };
        console.log(Income);
        axios
        .post("http://localhost:5000/api/addincome", Income)
        .then((response) => {
        console.log(response);
        //dispatch(incomeSuccess(response.data));
      })
      .catch((error) => {
        console.log('error'+error);
        //dispatch(incomeFailure(error));
      });
        //history.push('/');
    }

    return (
        <div>
            <br/>
            <center>
            <div className="card col-8">
            <Accordion title="Income" content="Money that an individual or business receives in exchange for providing labor, producing a good or service, or through investing capital." />

            <form>
                <div className="col-6 form-group">
                    <label htmlFor="exampleFormControlInput1">Amount</label>
                    <input 
                    type="number" 
                    className="form-control"
                    id="exampleFormControlInput1" 
                    placeholder="Enter Amount in Rupees"
                    value = {amount}
                    onChange={(e)=>setAmount(e.target.value)}
                     />
                </div>
                <br/>
                <div className="col-6 form-group">
                    <label htmlFor="exampleFormControlInput1">Source</label>
                    <input 
                    type="text" 
                    className="form-control"
                    id="exampleFormControlInput1" 
                    placeholder="Enter Source" 
                    value = {source}
                    onChange={(e)=>setSource(e.target.value)}/>
                </div>
                <br/>
                <div className="col-6 form-group">
                    <label htmlFor="exampleFormControlInput1">Type</label>
                    <input 
                    type="text" 
                    className="form-control"
                    id="exampleFormControlInput1" 
                    placeholder="Enter Type"
                    value = {type}
                    onChange={(e)=>setType(e.target.value)} />
                </div>
                <br/>
                <div className="col-6 form-group">
                    <label htmlFor="exampleFormControlInput1">Entry for</label>
                    <input 
                    type="date" 
                    className="form-control"
                    id="exampleFormControlInput1" 
                    value = {date}
                    onChange={(e)=>setDate(e.target.value)}/>
                </div>
                <br/>
                
                <br/>
                
                <br/>
                <button type="button" className="btn btn-success" onClick={()=>PostIncome()}>Add Income</button>
            </form>
            </div>
            </center>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      incomeObject: state.income,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      saveIncome: (income) => dispatch(saveIncome(income)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddIncome);
