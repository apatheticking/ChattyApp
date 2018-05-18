import React, {Component} from 'react';
//positions the number of online users to the right side of the navbar
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