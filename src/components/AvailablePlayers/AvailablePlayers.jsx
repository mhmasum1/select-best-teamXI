import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({ playerPromise, setAvailableBalance, avaiableBalance, purchasedPlayer, setPurchasedPlayed }) => {

    const playerData = use(playerPromise)

    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-5'>
            {
                playerData.map(player => <PlayerCard purchasedPlayer={purchasedPlayer} setPurchasedPlayed={setPurchasedPlayed} player={player} avaiableBalance={avaiableBalance} setAvailableBalance={setAvailableBalance}></PlayerCard>)
            }
        </div>
    );
};

export default AvailablePlayers;
