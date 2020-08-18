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
  handlesubmit=(event)=>{
    this.setState({count:this.state.text.split(" ").length})
    event.preventDefault();
  }
    
  render() { 
    return ( 
      <div className="App">
      <Navbar/>

      <div className="body">
        <div className="container">
        <div className="row">
        <div className="input col-md-6 col-12">
        <form onSubmit={this.handlesubmit}>
          <textarea className="textarea" placeholder="Type or Paste content and Press Enter"name="w3review"
           rows="15" cols="60" 
          onChange={this.handleChange} value={this.state.text}></textarea>
          <br></br>
          <input type="submit" className="btn btn-info" value="Submit" />
      
      </form>
        </div>
        <div className="output col-md-6 col-12"> 
             <h1>No of Words</h1>
         <h3>{this.state.count}</h3>
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
