import React from 'react';
import './style.css';

import Lights from "../Lights";
import Climate from "../Climate";
import Blinds from "../Blinds";
import Energy from "../Energy";


const Dashboard = ({data}) => {
    return (
        <main className="dashboard">
            <Lights lights={data.lights} />
            <Climate climate={data.climate} 
                      temperature={data.climate.temperature}
                      humidity={data.climate.humidity}/>
            <Blinds state={data.blinds} />
            <Energy energyComsumption={data.energyConsumption} />

        </main>
    )
}

export default Dashboard;