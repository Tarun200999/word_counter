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

  handleChange = async function(event) {

    await this.setState({text: event.target.value});
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
          <div className="textarea">
          <span>
          <textarea className="form-control" placeholder="Type or Paste content and Press Enter"name="w3review"
           rows="15"
          onChange={(e)=>{this.handleChange(e)}} value={this.state.text}></textarea>
          <br></br>
          </span>
         </div>
      
      </form>
        </div>
        <div className="output col-md-6 col-12"> 
             <h1>No of Words</h1>
    <h3>{this.state.text.split(" ").length-1}</h3>
    <h1>no of characters</h1>
    <h3>{this.state.text.length}</h3>
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
