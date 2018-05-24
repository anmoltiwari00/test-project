import React, { Component } from 'react';

class HeaderBar extends Component {
  render() {
      const headerStyle = {
        margin: "0 auto",
        width: "800px",
        height: "70px",
        backgroundColor: "#233442",
        color: "white",
        borderRadius: "5px",
        fontSize: "150%",
      }
      const headerText = {
        padding: "20px",
        float: "left",
      }
      const spanText = {
        fontSize: "75%",
        textAlign: "center",
        width: "400px",
        float: "left",
        marginLeft: "30px",
        marginTop: "10px",
      }
      const getApp = {
        height: "45px",
        width: "160px",
        fontSize: "75%",
        borderRadius: "3px",
        fontWeight: "bold",
        backgroundColor: "white",
        float: "right",
        margin: "15px",
      }

    return(
      <div style={headerStyle}>
        <div style={headerText}>Knappily</div>
        <div style={spanText}>THE ONLY NEWS APP IN INDIA FEATURED IN <b>GOOGLE EDITOR'S CHOICE - 2018</b></div>
        <button style={getApp}>GET THE APP</button>
      </div>
    );
  }
}

export default HeaderBar;
