import React,{ useState } from 'react';
//import { useHistory} from 'react-router-dom';
import Accordion from '../Components/Accordion/Accordion';

const AddLiability = () => {
    //const history = useHistory()
    const [amount,setAmount] = useState("0");
    const [source,setSource] = useState('');
    const [date,setDate] = useState('');
    
    const PostIncome = ()=>{
        console.log(amount);
        console.log(date);
    }
    return (
        <div>
            <br/>
            <center>
            <div className="card col-8">
            <Accordion title="Liability" content="A liability is typically an amount owed to a supplier, bank, lender, or other provider of goods, services, or loans." />

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
                <button type="button" className="btn btn-success" onClick={()=>PostIncome()}>Add Liability</button>
            </form>
            </div>
            </center>
        </div>
    )
}

export default AddLiability;
