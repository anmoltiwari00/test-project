import React, { Component } from 'react';
import drawerIcon from '../images/drawerIcon.png';
import search from '../images/search.png';

class AppHeader extends Component {
  render() {
      const headerStyle = {
        width: "100%",
        height: "60px",
        backgroundColor: "#FFFFFF",
        fontSize: "150%",
        marginBottom: "30px",
      }
      const span = {
        marginLeft: "30px",
        color: "#DB0B0B",
        fontSize: "120%",
      }
      const img = {
        paddingTop: "22px",
        paddingLeft: "20px",
      }
      const books = {
        color: "white",
        backgroundColor: "#BE0000",
        height: "34px",
        width: "67px",
        borderRadius: "5px",
        border: "none",
        marginLeft: "30px",
        fontSize: "60%",
      }
      const searchIcon = {
        float: "right",
        marginTop: "18px",
      }
      const getApp = {
        backgroundColor: "#BE0000",
        float: "right",
        height: "34px",
        width: "100px",
        borderRadius: "5px",
        border: "none",
        margin: "15px",
        color: "white",
        fontSize: "60%",
      }
    return(
      <div style={headerStyle}>
        <img style={img} src={drawerIcon} alt="" />
        <span style={span}>Knappily</span>
        <button style={books}>Books</button>
        <button style={getApp}>Get the app</button>
        <img style={searchIcon} src={search} alt="" />
      </div>
    );
  }
}

export default AppHeader;
