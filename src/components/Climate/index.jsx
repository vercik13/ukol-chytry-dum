import React, {useState} from 'react';
import './style.css';

import temp from './images/temp.svg';

const Climate = ({temperature, humidity}) => {

  const [degree, setDegree] = useState (temperature);

    return (
        <div className="climate">
            <div className="climate__icon">
                <img src={temp}/>
            </div>
            <div className="climate__content">
                <div className="climate__temperature">{degree}&deg;C</div>
                <div className="climate__humidity">Vlhost vzduchu 51 &nbsp;%</div>
            </div>
            <div className="climate__controls">
                <button className="button" onClick={ () => setDegree(degree + 1 || degree < 0)}>+</button>
                <button className="button" onClick={ () => setDegree (degree - 1 || degree > 0)}>-</button>
            </div>
        </div>
    );
}

export default Climate;