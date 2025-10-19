import React from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
    return (
        <>
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_left} alt="" />
                    <img className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_right} alt="" />
                </div>
                <div className="flex items-center gap-2">
                    <div className="bg-black p-2 rounded-full cursor-pointer hover:bg-[#1a1a1a]">
                        <img className="w-6 h-6" src={assets.home_icon} alt="Home" />
                    </div>
                    <div className="flex items-center gap-2 bg-[#242424] px-4 py-2 rounded-full">
                        <img className="w-4 h-4" src={assets.search_icon} alt="Search" />
                        <input 
                            type="text" 
                            placeholder="What do you want to play?" 
                            className="bg-transparent border-none outline-none text-white placeholder-gray-400 w-80 text-sm"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button className='bg-white text-black text-sm font-bold px-4 py-2 rounded-full hover:scale-105 transition'>Explore Premium</button>
                    <button className='bg-black text-white text-sm px-4 py-2 rounded-full hover:bg-[#1a1a1a]'>
                        Install App
                    </button>
                    <div className='bg-black p-1 rounded-full cursor-pointer hover:bg-[#1a1a1a]'>
                        <img className="w-5 h-5" src={assets.bell_icon} alt="Notifications" />
                    </div>
                    <div className='bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold cursor-pointer'>T</div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
