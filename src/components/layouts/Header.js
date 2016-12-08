import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {

  render() {
    return (
      <header>
        <div><Link to='/'>Home</Link></div>
      </header>
    )
  }

}

export default Header;
