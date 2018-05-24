import React, { Component } from 'react';

class LoadMore extends Component {
  render() {
    const container = {
      textAlign: "center",
    }
    const buttonStyle = {
      backgroundColor: "#D90000",
      width: "140px",
      margin: "0 auto",
      height: "50px",
      color: "white",
      border: "none",
      textAlign: "center",
      marginTop: "20px",
      marginBottom: "60px",
    }
    return (
      <div style={container}>
        <button style={buttonStyle}>Load More</button>
      </div>
    );
  }
}

export default LoadMore;
