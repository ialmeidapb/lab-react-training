import React from "react";



let botao = ['purple','blue','green','yellow','orange','red']

class LikeButton extends React.Component {
    state = {
      count: 0,
      color:"grey",
    
    };

  
    handleIncrement = () => {
      console.log(this.state);
     
  
      this.setState({ count: this.state.count + 1 });
      this.setState({color: botao[this.state.count]})


    };
  
    
  
    render() {
    
      
        return (

        <div>
          <button style= {{backgroundColor:this.state.color}} className="btn" onClick={this.handleIncrement}>
          {this.state.count} Likes
          </button> 
         
        </div>
      );
    }
  }
  
  export default LikeButton;
  