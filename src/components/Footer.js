import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const container = {
      backgroundColor: "#2F2F2F",
      height: "50px",
      width: "100%",
      padding: "0",
      margin: "0",
      color: "white",
      paddingLeft: "80px",
      paddingTop: "10px",
    }
    return (
      <div style={container}>
        Knappily © 2017
      </div>
    );
  }
}

export default Footer;
