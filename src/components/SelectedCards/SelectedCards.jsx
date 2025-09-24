import React from 'react';

const SelectedCards = ({ player }) => {
    return (
        <div className=' flex justify-between items-center border-2 border-gray-300 p-3 rounded-2xl mb-2 '>
            <div className='flex gap-3'>
                <div>
                    <img className=' h-[50px] w-[50px] rounded-2xl ' src={player.image} alt="" />
                </div>
                <div>
                    <p className='font-bold'>{player.name}</p>
                    <p className='text-xs'>{player.role}</p>
                </div>
            </div>
            <div>
                <img src="https://i.ibb.co.com/yBcs3Xp2/Vector.png" alt="" />
            </div>
        </div>
    );
};

export default SelectedCards;