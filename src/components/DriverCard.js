import './App.css';

function DriverCard(props) {

    const stars = Math.round(props.rating)

    const rating = (stars) => {
        if (stars == 0) {
            return '☆☆☆☆☆'
        } else if (stars == 1) {
            return '★☆☆☆☆'
        } else if (stars == 2) {
            return '★★☆☆☆'
        } else if (stars == 3) {
            return '★★★☆☆'
        } else if (stars == 4) {
            return '★★★★☆'
        } else if (stars == 5) {
            return '★★★★★'
        }
    }

    return (
        <div className="flexRow driverBox">
            <div><img className="driverImg" src={props.img} alt=""/></div>
            <div>
                <h2 className="text-white">{props.name}</h2>
                <h2 className="text-white">{rating(stars)}</h2>
                <p className="text-white">{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard;