import React, {Component} from 'react';

const usersCount = {
  float: 'right'
}

function NavBar (props) {
  return(
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
      <p style={usersCount}>{props.users}: Users online</p>
    </nav>
  );
}
export default NavBar;