import React from "react";
import {assets} from "../assets/assets";    

const Sidebar = () => {
    return (
        <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
            <div className="bg-[#121212] h-[85%] rounded">
                <div className="p-4 flex item-center justify-between">
                    <div className="flex item-center gap-3">
                        <img className="w-5" src={assets.stack_icon} alt=""/>
                        <p className="text-sm font-semibold">Your Library</p>
                    </div>
                    <div className="flex item-center gap-3">
                        <img className="w-4 h-4" src={assets.arrow_icon} alt=""/>
                        <img className="w-4 h-4" src={assets.plus_icon} alt=""/>
                    </div>
                </div>
                <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
                    <h1>Create your first playlist</h1>
                    <p className="font-light">It's easy, we'll help you</p>
                    <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">Create Playlists</button>
                </div>
                <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
                    <h1>Let's find some podcast to follow</h1>
                    <p className="font-light">We'll keep you update on new episodes</p>
                    <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">Browse Podcasts</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;