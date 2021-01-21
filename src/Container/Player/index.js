import React from 'react';
import Header from '../Header/index';
import PlayerData from './PlayerData';


const PlayerList = () => {
    return(
        <div className="container" style={{backgroundColor: "grey"}}>
            <Header/>
            <PlayerData />
        </div>
    )
}

export default PlayerList


