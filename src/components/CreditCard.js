const getMonth = (num) => {
    if (num < 10) {
      return '0' + num;
    } else {
      return num;
    }
  };


function CreditCard(props) {

    const logo = (type) => {
        if (type == "Visa") {
            return 'https://marcas-logos.net/wp-content/uploads/2020/03/VISA-Emblem.jpg'
        } else {
            return 'https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo.png'
        }
    }

    const divStyle = {
        width: '350px',
        margin: '20px',
        borderRadius: '20px',
        padding: '20px',
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`
    };

    return (

            <div style={divStyle}>
                <div><img src={logo(props.type)} height="20" /></div>
                <div>
                    <h2>**** **** **** {props.number.slice(12)}</h2>
                    
                    <p>Expires {getMonth(props.expirationMonth)}/{props.expirationYear % 2000}</p>
                
                <p>{props.bank}</p>
                <p>{props.owner}</p>
                            </div>
                        </div>

    )
}
export default CreditCard;