import React from "react";

import max from "../img/persons/maxence.png"
import maxGlass from "../img/persons/maxence-glasses.png"



class ClickablePicture extends React.Component {
    
    state = {
      img: max,
      imgChange: false
    };

  
    changePic = () => {
    
        if(this.state.imgChange == false){
         this.setState({img:maxGlass});
         this.setState({imgChange: true});
        } else {
         this.setState({img:max}); 
         this.setState({imgChange: false});
        }
        
        
    };
  
    
  
    render=()=> {
    
      
        return (
        <div>
         <img src={this.state.img} onClick={this.changePic} width={150} /> 
        </div>
      );
    }
  }
  
  export default ClickablePicture;