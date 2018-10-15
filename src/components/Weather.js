import React from 'react'

const Weather = props => (
       <div>
                {props.temperature && props.country && 
                <p className='weather__key '>Temperature= <span className='weather__value'>{props.temperature} °C</span></p>}
                
                {props.city && props.country &&
                <p className='weather__key '>City: <span className='weather__value'>{props.city}</span></p>}
                
                {props.city && props.country &&
                <p className='weather__key '>Country: <span className='weather__value'>{props.country}</span> </p>}
                
                {props.humidity && props.country &&
                <p className='weather__key '>Humidity: <span className='weather__value'>{props.humidity}</span></p>}
                
                {props.description && props.country &&
                <p className='weather__key '>Description: <span className='weather__value'>{props.description}</span></p>}
                
                {props.error && 
                <p className='weather__error'>Error: <span>{props.error}</span></p>}

            </div>
);

export default Weather;