import React, { Component } from 'react';
import trump from '../images/trump.jpg'

class Item extends Component {
  render() {
    const container = {
      width: "100%",
      margin: "0 auto",
      height: "300px",
      marginLeft: "90px",
    }

    const imgItem = {
      width: "100%",
      height: "270px",
    }
    const item = {
      float: "left",
      marginRight: "30px",
      marginBottom: "20px",
      backgroundColor: "white",
      width: "370px",
      paddingBottom: "20px",
    }
    const context1 = {
      position: "relative",
      bottom: "15px",
      left: "20px",
      height: "25px",
      backgroundColor: "#DDBA00",
      color: "white",
      textAlign: "center",
      lineHeight: "25px",
      width: "120px",
    }
    const context2 = {
      position: "relative",
      bottom: "15px",
      left: "20px",
      height: "25px",
      backgroundColor: "#766280",
      textAlign: "center",
      lineHeight: "25px",
      color: "white",
      width: "70px",
    }
    const context3 = {
      position: "relative",
      bottom: "15px",
      left: "20px",
      height: "25px",
      backgroundColor: "#DC1616",
      color: "white",
      textAlign: "center",
      lineHeight: "25px",
      width: "100px",
    }

    const headline = {
      marginTop: "-5px",
      fontSize: "160%",
      fontFamily: "Times New Roman",
      marginLeft: "20px",
    }
    const text = {
      lineHeight: "180%",
      textAlign: "left",
      marginLeft: "20px",
      marginTop: "10px",
      paddingRight: "15px",
    }
    const clear = {
      clear: "both",
    }
    return (
      <div style={container}>
        <div style={item}>
          <img style={imgItem} src={trump} alt="" />
          <div style={context1}>On this day</div>
          <div style={headline}>The headline must be stated</div>
          <div style={text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada
            tempor hendrerit. Vivamus egestas felis eu lectus suscipit malesuada. Phasellus
            imperdiet urna ac sapien auctor tincidunt. Morbi dolor metus, pellentesque a venenatis quis.
          </div>
        </div>
        <div style={item}>
          <img style={imgItem} src={trump} alt="" />
          <div style={context2}>Law</div>
          <div style={headline}>The headline must be stated</div>
          <div style={text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada
            tempor hendrerit. Vivamus egestas felis eu lectus suscipit malesuada. Phasellus
            imperdiet urna ac sapien auctor tincidunt. Morbi dolor metus, pellentesque a venenatis quis.
          </div>
        </div>
        <div style={item}>
          <img style={imgItem} src={trump} alt="" />
          <div style={context3}>Business</div>
          <div style={headline}>The headline must be stated</div>
          <div style={text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada
            tempor hendrerit. Vivamus egestas felis eu lectus suscipit malesuada. Phasellus
            imperdiet urna ac sapien auctor tincidunt. Morbi dolor metus, pellentesque a venenatis quis.
          </div>
        </div>
        <div style={item}>
          <img style={imgItem} src={trump} alt="" />
          <div style={context1}>On this day</div>
          <div style={headline}>The headline must be stated</div>
          <div style={text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada
            tempor hendrerit. Vivamus egestas felis eu lectus suscipit malesuada. Phasellus
            imperdiet urna ac sapien auctor tincidunt. Morbi dolor metus, pellentesque a venenatis quis.
          </div>
        </div>
        <div style={item}>
          <img style={imgItem} src={trump} alt="" />
          <div style={context2}>Law</div>
          <div style={headline}>The headline must be stated</div>
          <div style={text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada
            tempor hendrerit. Vivamus egestas felis eu lectus suscipit malesuada. Phasellus
            imperdiet urna ac sapien auctor tincidunt. Morbi dolor metus, pellentesque a venenatis quis.
          </div>
        </div>
        <div style={item}>
          <img style={imgItem} src={trump} alt="" />
          <div style={context3}>Business</div>
          <div style={headline}>The headline must be stated</div>
          <div style={text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada
            tempor hendrerit. Vivamus egestas felis eu lectus suscipit malesuada. Phasellus
            imperdiet urna ac sapien auctor tincidunt. Morbi dolor metus, pellentesque a venenatis quis.
          </div>
        </div>
        <div style={clear} />
      </div>
    );
  }
}

export default Item;
