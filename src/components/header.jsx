import React, { Component } from "react";
import Chuck from "../../public/images/chuck.png";

class Header extends Component {
  render() {
    return (
      <div>
        <img src={Chuck} alt="Logo" />
      </div>
    );
  }
}

export default Header;
