  import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavHead,
} from './NavbarElements';
import Burger from './Burger';
import {logoutUser} from '../../redux/index';
import {connect} from 'react-redux';


const Navbar = (props) => {
  console.log(props);
  const logout = () => {
    props.logoutUser();
  };
  
  return (
    <>
      <Nav>
       <NavHead>
        
        <NavLink to='/' activeStyle>
            Finance Tracker            
        </NavLink>
        </NavHead>
        <NavMenu>
       {  localStorage.getItem('jwtToken') ?  (
         <>
          <NavLink to='/income' activeStyle>
            Income
          </NavLink>
          <NavLink to='/expense' activeStyle>
            Expense
          </NavLink>
          <NavLink to='/asset' activeStyle>
            Asset
          </NavLink>
          <NavLink to='/liability' activeStyle>
            Liability
          </NavLink>
          <NavLink to='/logout' activeStyle onClick={logout}>
            Logout
          </NavLink>
          </> ) : (
            <>
          <NavLink to='/login' activeStyle>
            Login
          </NavLink>
          <NavLink to='/register' activeStyle>
            Register
          </NavLink>
            </>

          ) }      
        </NavMenu>
        <Burger />
    
      </Nav>
    </>
  );
};
  
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);