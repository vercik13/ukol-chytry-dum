import React, {useState} from 'react';
import './style.css';
import blindsClosed from './images/blinds-closed.svg';
import blindsOpen from './images/blinds-open.svg';

const Blinds = ({state}) => {

  const [blinds, setBlinds] = useState(state);

    return (
        <div className="blinds">
				<div className="blinds__icon">
					<img src={blinds ? blindsOpen : blindsClosed}/>
				</div>
				<div className="blinds__name">
					Žaluzie
				</div>
				<div className="blinds__controls">
					<button onClick={() => {setBlinds(state)}} className={blinds ? 'button button--active' : 'button'}>Otevřeno</button>
					<button onClick={() => {setBlinds(!state)}} className={!blinds ? 'button button--active' : 'button'}>Zavřeno</button>
				</div>
			</div>
    )
}

export default Blinds;