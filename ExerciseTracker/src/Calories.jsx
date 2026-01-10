import PropTypes from 'prop-types'
import './Calories.css'

function Calories (props) {
    return (
        <>
        <div className="card">
            <img  alt="food icon"></img>
            <h2>Current Macronurient Intake:</h2>
            <p>Calories: {props.cals} | Protien: {props.protien} | Carbohydrates: {props.carbs} | Fats: {props.fats} </p>
        </div>
        <hr></hr>
        </>
    );

}

Calories.PropTypes = {
    cals: PropTypes.number,
    protien: PropTypes.number,
    carbs: PropTypes.number,
    fats: PropTypes.number
}

Calories.defaultProps = {
    cals: 0,
    protien: 0,
    carbs: 0,
    fats: 0

}

export default Calories