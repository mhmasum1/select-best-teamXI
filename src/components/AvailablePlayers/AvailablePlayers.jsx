import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({ playerPromise, setAvailableBalance, avaiableBalance }) => {

    const playerData = use(playerPromise)
    console.log(playerData)

    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-5'>
            {
                playerData.map(player => <PlayerCard player={player} avaiableBalance={avaiableBalance} setAvailableBalance={setAvailableBalance}></PlayerCard>)
            }
        </div>
    );
};

export default AvailablePlayers;
