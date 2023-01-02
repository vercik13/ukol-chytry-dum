import React from 'react';
import './style.css';

import Lights from "../Lights";
import Climate from "../Climate";
import Blinds from "../Blinds";
import Energy from "../Energy";


const Dashboard = ({data}) => {
    return (
        <main className="dashboard">
          <div className="dashboard__left">
            <Lights lights={data.lights} />
          </div>
          <div className="dashboard__right">
            <Climate climate={data.climate} 
                      temperature={data.climate.temperature}
                      humidity={data.climate.humidity}/>
            <Blinds state={data.blinds} />
            <Energy energyComsumption={data.energyConsumption} />
          </div>
        </main>
    )
}

export default Dashboard;