
import React, { Component } from 'react';
import Navbar from '../component/Navbar';
import Search from '../component/Search';
import Footer from '../component/Footer';



class App extends Component { 

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Search/>
        <Footer/>
      </div>
    )
  }
}




export default App;
