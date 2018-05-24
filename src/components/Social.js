import React, { Component } from 'react';
import home from '../images/home.png';
import books from '../images/books.png';
import blog from '../images/blog.png';
import twit from '../images/twit.png';
import you from '../images/you.png';
import face from '../images/face.png';

class Social extends Component {
  render() {
    const container = {
      backgroundColor: "#454545",
      height: "320px",
      width: "100%",
      padding: "0",
      margin: "0",
    }
    const ul1 = {
      listStyle: "none",
      marginLeft: "300px",
      paddingTop: "40px",
    }
    const ul2 = {
      marginLeft: "500px",
      listStyle: "none",
      marginTop: "-148px",
    }
    const li = {
      marginBottom: "25px",
    }
    const liText = {
      color: "white",
    }
    const newsletter = {
      float: "right",
      marginTop: "-155px",
      marginRight: "300px",
      color: "white",
      width: "300px",
      textAlign: "center",
    }
    const label = {
      color: "white",
    }
    const input = {
      borderRadius: "5px",
      width: "400px",
      height: "35px",
      border: "none",
      marginBottom: "10px",
    }
    const form = {
      float: "right",
      marginRight: "200px",
      marginTop: "-100px",
    }
    const subscribe = {
      color: "white",
      backgroundColor: "#175D92",
      width: "90px",
      fontSize: "85%",
      height: "40px",
      borderRadius: "5px",
      border: "none",
      textAlign: "center",
      marginTop: "5px",
    }
    return (
      <div style={container}>
        <ul style={ul1}>
          <li style={li}>
            <img src={home} alt="" />
            <span style={liText}>Home</span>
          </li>
          <li style={li}>
            <img src={books} alt="" />
            <span style={liText}>Books</span>
          </li>
          <li style={li}>
            <img src={blog} alt="" />
            <span style={liText}>Blog</span>
          </li>
        </ul>
        <ul style={ul2}>
          <li style={li}>
            <img src={face} alt="" />
            <span style={liText}>Facebook</span>
          </li>
          <li style={li}>
            <img src={twit} alt="" />
            <span style={liText}>Twitter</span>
          </li>
          <li style={li}>
            <img src={you} alt="" />
            <span style={liText}>You Tube</span>
          </li>
        </ul>
        <div style={newsletter}>Subscribe to get Knappily Newsletter and Printable books</div>
        <form style={form}>
          <label style={label} for="name">Name</label><br/>
          <input style={input} type="text" name="name" /><br/>
          <label style={label} for="email">Email Address *</label><br/>
          <input style={input} type="email" name="email" /><br/>
          <input style={subscribe} value="Subscribe" />
        </form>
      </div>
    );
  }
}

export default Social;
