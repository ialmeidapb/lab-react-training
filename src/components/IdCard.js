import './App.css';


function IdCard(props){
    return (
     <div className='border'>
    <div className='firstPerson'>
    <img src={props.picture} className="img" alt={props.firstName} />
    <p className="firstName"><b>First Name:</b> {props.firstName}</p>
    <p className="lastName"><b>Last Name:</b>{props.lastName}</p>
    <p className="gender"><b>Gender:</b>{props.gender}</p>
    <p className="height"><b>Height:</b>{props.height}</p>
    <p className="birth"><b>Birth:</b>{props.birth}</p>
    </div>

    </div>

    
      );
}

export default IdCard;