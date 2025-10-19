import React, { useRef, useContext } from "react";
import Navbar from "./Navbar";
import { albumsData, songsData, assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";

const DisplayHome = () => {
    const navigate = useNavigate();
    const { playWithId } = useContext(PlayerContext);
    const albumsScrollRef = useRef(null);
    const songsScrollRef = useRef(null);

    const scrollLeft = (ref) => {
        ref.current.scrollBy({ left: -400, behavior: 'smooth' });
    };

    const scrollRight = (ref) => {
        ref.current.scrollBy({ left: 400, behavior: 'smooth' });
    };

    return (
        <>
            <Navbar />
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
                <div className="relative group">
                    <button 
                        onClick={() => scrollLeft(albumsScrollRef)} 
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 w-12 h-12 rounded-full items-center justify-center hover:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity hidden group-hover:flex shadow-xl"
                    >
                        <img className="w-6 h-6 opacity-80" src={assets.arrow_left} alt="Scroll Left" />
                    </button>
                    <div ref={albumsScrollRef} className="flex overflow-x-auto gap-4 scrollbar-hide">
                        {albumsData.map((item, index) => (
                            <div 
                                onClick={() => navigate(`/album/${item.id}`)} 
                                key={index} 
                                className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
                            >
                                <img className="rounded" src={item.image} alt="" />
                                <p className="font-bold mt-2 mb-1">{item.name}</p>
                                <p className="text-slate-200 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <button 
                        onClick={() => scrollRight(albumsScrollRef)} 
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 w-12 h-12 rounded-full items-center justify-center hover:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity hidden group-hover:flex shadow-xl"
                    >
                        <img className="w-6 h-6 opacity-80" src={assets.arrow_right} alt="Scroll Right" />
                    </button>
                </div>
            </div>
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
                <div className="relative group">
                    <button 
                        onClick={() => scrollLeft(songsScrollRef)} 
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 w-12 h-12 rounded-full items-center justify-center hover:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity hidden group-hover:flex shadow-xl"
                    >
                        <img className="w-6 h-6 opacity-80" src={assets.arrow_left} alt="Scroll Left" />
                    </button>
                    <div ref={songsScrollRef} className="flex overflow-x-auto gap-4 scrollbar-hide">
                        {songsData.map((item, index) => (
                            <div 
                                onClick={() => playWithId(item.id)} 
                                key={index} 
                                className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
                            >
                                <img className="rounded" src={item.image} alt="" />
                                <p className="font-bold mt-2 mb-1">{item.name}</p>
                                <p className="text-slate-200 text-sm">{item.singer}</p>
                            </div>
                        ))}
                    </div>
                    <button 
                        onClick={() => scrollRight(songsScrollRef)} 
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 w-12 h-12 rounded-full items-center justify-center hover:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity hidden group-hover:flex shadow-xl"
                    >
                        <img className="w-6 h-6 opacity-80" src={assets.arrow_right} alt="Scroll Right" />
                    </button>
                </div>
            </div>
        </>

    );
}

export default DisplayHome;
