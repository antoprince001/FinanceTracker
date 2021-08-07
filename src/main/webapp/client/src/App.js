import './App.css';
import React, {createContext, useContext, useEffect, useReducer} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Screens/Home';
import AddIncome from './Screens/AddIncome';
import AddExpense from './Screens/AddExpense';
import AddAsset from './Screens/AddAsset';
import AddLiability from './Screens/AddLiability';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/income' component={AddIncome} />
        <Route path='/expense' component={AddExpense} />
        <Route path='/asset' component={AddAsset} />
        <Route path='/liability' component={AddLiability} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
      </Router>
      <br/>
      <Footer></Footer>
    </div>
  );
}

export default App;
