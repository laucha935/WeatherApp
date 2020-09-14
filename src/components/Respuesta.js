import React, {Component} from 'react';


const WeatherInfo = props => {
    console.log(props)
    return(
        <div>
            {
                props.error &&
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }
            { props.temperature ?
                <div>
                    <div className="card card-body">
                       <p>
                           Location: {props.city}, {props.country}
                        </p>
                        <p>
                           Temperature: {props.temperature} C, {props.description}
                        </p>

                        <p>
                            Humedity: {props.humedity}
                        </p>
                        <p>
                           Wind Speed: {props.wind_speed}
                         </p>
                         </div>
                </div>
                :
              <div className="card card-body">
                   <p>Not request Yet</p>

                </div>
             
        }    
               
    </div>
        
    )
}


export default WeatherInfo;