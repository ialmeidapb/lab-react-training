function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }



function Random(props){
    return (
    <div>
        <p>Random value between {props.min} and {props.max} => {getRandomIntInclusive(props.min, props.max)}</p>
       
    </div>
      );
}



export default Random;