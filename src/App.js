import React, { Component } from 'react';
import './App.css';
import Navbar from './component/navbar';
import Footer from './component/footer';



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      text:"",
      count:0
    }
  }
  handleChange=(event)=>{
    this.setState({text:event.target.value})
  
  }
    
  render() { 
    return ( 
      <div className="App">
      <Navbar/>

      <div className="body">
        <div className="container">
        <div className="row">
        <div className="input col-md-6 col-12">
        <form>
          <textarea className="textarea" placeholder="Type or Paste content"name="w3review" rows="15" cols="70" onChange={this.handleChange} value={this.state.text}></textarea>
      </form>
        </div>
        <div className="output col-md-6 col-12"> 
             <h1>No of Words</h1>
            <h3>{this.state.text.split(' ').length}</h3>
        </div>

        </div>




        </div>
       
      </div>
      <Footer/>
     </div>
     
     );
  }
}
 


export default App;
