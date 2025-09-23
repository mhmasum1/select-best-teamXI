import React, { useState } from 'react';
import userImg from '../../assets/user-1.png'
import countryFlag from '../../assets/report-1.png'

const PlayerCard = ({ player, setAvailableBalance, avaiableBalance, purchasedPlayer, setPurchasedPlayed }) => {

    const [isSelected, setIsSelected] = useState(false)

    const handleSelect = (playerData) => {

        setIsSelected(true)
        if (avaiableBalance < playerData.price) {
            alert("Not enough coins for buying your choosen player")
            return
        } else {
            setAvailableBalance(avaiableBalance - playerData.price)
        }
        setPurchasedPlayed([...purchasedPlayer, playerData])

        //  balance er majhe jdi koma thake thle ba last a doller thake thle playerData.price.split("USD").join("").split(",").join("") kore korbo 
    }

    return (
        <div className="card bg-base-100 w-96 shadow-sm p-4 ">
            <figure>
                <img className='rounded-xl object-cover'
                    src={player.image} />
            </figure>
            <div className="">
                <div className='flex gap-2 mt-4 items-center '>
                    <img className='h-[20px] w-[20px]' src={userImg} alt="" />
                    <h2 className="card-title">{player.name}</h2>
                </div>
                <div className='flex justify-between mt-3 mb-2 '>
                    <div className='font-bold flex gap-2 items-center '> <img className='h-[20px] w-[20px]' src={countryFlag} alt="" />  {player.country}</div>
                    <span className="btn btn-sm">{player.role}</span>
                </div>
                <hr className='text-gray-700' />
                <div className='flex justify-between mt-3 mb-2'>
                    <div className='font-bold'>Ratings</div>
                    <div>{player.rating}</div>
                </div>
                <div className='flex justify-between mb-2'>
                    <div className='font-bold'>{player.battingStyle}</div>
                    <div>{player.bowlingStyle}</div>
                </div>
                <div className="card-actions flex justify-between items-center">
                    <div className='flex'>
                        <div className='font-bold'>Price : </div>
                        <div className='font-bold'> ${player.price}</div>
                    </div>
                    <div>
                        <button disabled={isSelected} onClick={() => { handleSelect(player) }} className="btn ">{isSelected === true ? "Selected" : "Choose Player"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;