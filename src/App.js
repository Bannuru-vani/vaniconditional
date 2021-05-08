import React, {Component} from "react";
class App extends Component{
  constructor(){
    super();
    this.state={
      isLoggedIn:true
    }
    this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
      console.log("i am working")
      this.setState(prevState=>{
        return{
            isLoggedIn:!prevState.isLoggedIn

        }
        
        
      })
    }
  
  
  render(){
    let button1 = this.state.isLoggedIn ? "Logg in" :"Logg out"
  return(
      <div>
      
          <h1>welcome to conditional</h1>
          <button onClick={this.handleClick}>{button1}</button>
      </div>
    )
  }

}
export default App;
