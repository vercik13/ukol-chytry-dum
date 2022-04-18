import React, {useState} from 'react';
import './style.css';

import lightOff from './images/light-off.svg';
import lightOn from './images/light-on.svg';


const Light = ({name, state}) => {

  const [isOn, setIsOn] = useState(state);

  const handleClick = () => {
    setIsOn(!isOn);
  }

    return (
        <div className="light" onClick={handleClick}>
			<div className="light__icon">
				<img src={isOn ? lightOn : lightOff}/>
			</div>
			<div className="light__name">
				{name}
			</div>
		</div>
	)
		
}

export default Light;