import React from 'react';
import logoImg from '../../assets/logo.png'
import dollarImg from '../../assets/dollar-1.png'

const Navbar = () => {
    return (
        <div className="navbar max-w-[1200px] mx-auto justify-between">
            <div className="w-[60px] h-[60px]">
                <a className='text-xl'>
                    <img src={logoImg} alt="" />
                </a>
            </div>
            <div className="flex flex-row">
                <span className='mr-1'> 60000000000 </span>
                <span className='font-bold mr-1'>Coin</span>
                <img src={dollarImg} alt="" />
            </div>
        </div>
    );
};

export default Navbar;