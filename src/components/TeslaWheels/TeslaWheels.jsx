import React from 'react'
import PropTypes from 'type-check'
import './TeslaWheels.css'

const LabelList = (props) => {
    const value = props.wheels.value
    const changeHandler = props.wheels.handleChangeWheels
    const size = [19, 21]
    const LabelItems = size.map(size => (
        <label key={size} className={`tesla-wheelsitem tesla-wheels__item--${size} ${value === size ? 'tesla-wheelsitem--active' : '' }`}>
          <input
            type="radio"
            name="wheelsize"
            value={size}
            checked={value === size} 
            onChange={() => {changeHandler(size)}} />
          <p>
            {size}
          </p>
        </label>
    ))
    return(
        <div>
            {LabelItems}
        </div>
    )
}

const TeslaWheels = (props) => (
    <div className="tesla-wheels__component">
      <p className="tesla-wheels__title">Wheels</p>
      <div className="tesla-wheels__container cf">
        <LabelList wheels={props}/>
      </div>
    </div>
)

TeslaWheels.propTypes = {
    value: PropTypes.number,
    handleChangeWheels: PropTypes.func
}

export default TeslaWheels
