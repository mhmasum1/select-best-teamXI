import React from 'react';
import SelectedCards from '../SelectedCards/SelectedCards';

const SelectedPlayers = ({ purchasedPlayer }) => {
    console.log(purchasedPlayer)
    return (
        <div className='max-w-[1200px] mx-auto'>
            {
                purchasedPlayer.map(player => <SelectedCards player={player}></SelectedCards>)
            }

        </div>
    );
};

export default SelectedPlayers;