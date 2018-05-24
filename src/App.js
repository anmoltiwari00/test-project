import React, { Component } from 'react';
import AppHeader from './components/AppHeader';
import HeaderBar from './components/HeaderBar';
import OpeningPost from './components/OpeningPost';
import Item from './components/Item';
import LoadMore from './components/LoadMore';
import Social from './components/Social';
import Footer from './components/Footer';

class App extends Component {
  render() {
    const container = {
      backgroundColor: "#EDEDED",
      height: "100%",
      width: "100%",
      padding: "0",
      margin: "0",
    }
    return (
      <div style={container}>
        <AppHeader />
        <HeaderBar />
        <OpeningPost />
        <Item />
        <LoadMore />
        <Social />
        <Footer />
      </div>
    );
  }
}

export default App;
