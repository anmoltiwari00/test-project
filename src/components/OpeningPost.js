import React, { Component } from 'react';
import trump from '../images/trump.jpg';
import readImg from '../images/read.png';


class OpeningPost extends Component {
  render() {

    const container = {
      paddingTop: "15px",
      marginLeft: "110px",
      marginBottom: "50px",
      width: "100%",
      height: "415px",
    }
    const img =  {
      height: "400px",
      width: "600px",
      float: "left",
    }

    const innerDiv = {
      backgroundColor: "white",
      height: "400px",
      width: "460px",
      paddingLeft: "20px",
      paddingTop: "30px",
      paddingRight: "30px",
      float: "left",
    }

    const head = {
      fontSize: "180%",
      width: "100%",
    }

    const context = {
      width: "70px",
      backgroundColor: "#766280",
      height: "25px",
      lineHeight: "25px",
      textAlign: "center",
      color: "white",
      fontSize: "90%",
      marginTop: "20px",
      marginRight: "20px",
      float: "left",
    }

    const text  = {
      textAlign: "left",
      marginTop: "10px",
      marginBottom: "40px",
      lineHeight: "180%",
      float: "left",
    }

    const ul = {
      float: "left",
      marginLeft: "-40px",
      listStyle: "none",
    }

    const first = {
      height: "67px",
      width: "70px",
      backgroundColor: "#00A688",
      color: "white",
      textAlign: "center",
      lineHeight: "67px",
    }

    const second = {
      height: "67px",
      width: "70px",
      backgroundColor: "#00B763",
      color: "white",
      textAlign: "center",
      lineHeight: "67px",
    }

    const third = {
      height: "67px",
      width: "70px",
      backgroundColor: "#007DBC",
      color: "white",
      textAlign: "center",
      lineHeight: "67px",
    }

    const fourth = {
      height: "67px",
      width: "70px",
      backgroundColor: "#AB42B6",
      color: "white",
      textAlign: "center",
      lineHeight: "67px",
    }

    const fifth = {
      height: "67px",
      width: "70px",
      backgroundColor: "#30485F",
      color: "white",
      textAlign: "center",
      lineHeight: "67px",
    }

    const sixth = {
      height: "67px",
      width: "70px",
      backgroundColor: "#FC2D1F",
      color: "white",
      textAlign: "center",
      lineHeight: "67px",
    }

    const read = {
      color: "#DB5E02",
      float: "right",
      marginRight: "20px",
    }

    const readImgStyle = {
      height: "20px",
      width: "25px",
      float: "right",
      marginTop: "3px",
    }

    const date = {
      paddingTop: "20px",
    }

    return (
      <div style={container}>
        <img style={img} src={trump} alt="" />
        <div style={innerDiv}>
          <span style={head}>The Trump trump trump trump!</span>
          <div style={context}>Politics</div>
          <div style={date}>17 May 2018 </div>
          <div style={text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada
            tempor hendrerit. Vivamus egestas felis eu lectus suscipit malesuada. Phasellus
            imperdiet urna ac sapien auctor tincidunt. Morbi dolor metus, pellentesque a venenatis quis.

          </div>
            <img style={readImgStyle} src={readImg} alt="" />
            <span style={read}>Read more</span>
        </div>
        <ul style={ul}>
          <li style={first}>What</li>
          <li style={second}>Why</li>
          <li style={third}>When</li>
          <li style={fourth}>Where</li>
          <li style={fifth}>Who</li>
          <li style={sixth}>How</li>
        </ul>
      </div>
    );
  }
}

export default OpeningPost;
