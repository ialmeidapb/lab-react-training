import React from "react";

import diceEmpty from "../img/dice-empty.png";
import dice1 from "../img/dice1.png"
import dice2 from "../img/dice2.png"
import dice3 from "../img/dice3.png"
import dice4 from "../img/dice4.png"
import dice5 from "../img/dice5.png"
import dice6 from "../img/dice6.png"


class Dice extends React.Component {
    
    state = {
    img: diceEmpty,
    
    };

  
    getImg=()=>{
      

      setTimeout(()=>{
        let number=this.randomPic();

        switch(number){
          case 1:
          return this.setState({img:dice1});
          case 2:
          return this.setState({img:dice2});
          case 3:
          return this.setState({img:dice3});
          case 4:
          return this.setState({img:dice4});
          case 5:
          return this.setState({img:dice5});
          case 6:
          return this.setState({img:dice6});
      }

      }, 1000);
      this.setState({img:diceEmpty})
      
    

    }
    
    
    randomPic=()=> {
      let min = 1
      let max = 6
      return Math.floor(Math.random() * (max - min + 1)) + min;
    
    
    }
  
  
    
  
    render() {
    
        return (
          <div>
          <img src={this.state.img} onClick={this.getImg} width={150} />
          </div>
        
      );
    }
  }
  
  export default Dice;