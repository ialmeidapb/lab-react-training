import React from 'react';
import './numbers.css';

function NumbersTable(props) {

    const arrAux = [];
    
    for (let i = 0; i <= props.limit; i++) {
      arrAux.push(<div className="red-white-boxes" style={{background: (i+1)%2===0 ? 'red' : 'white'}}>
      {i+1}</div>
      );
    }
    return <div className="out">
        {arrAux}
    </div>;
  };


export default NumbersTable;
