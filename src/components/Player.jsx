import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
    const { track, seekBar, seekBg, playStatus, play, pause, time, previous, next, seekSong, volume, changeVolume } = useContext(PlayerContext);

    return (
        <div className="h-[10%] bg-black flex items-center text-white px-4">
            <div className="hidden lg:flex items-center gap-4 w-[25%]">
                <div className="relative">
                    <img className="w-12 h-12 rounded" src={track.image} alt=""/>
                    {playStatus && (
                        <div className="absolute inset-0 flex items-end justify-center gap-0.5 pb-1">
                            <div className="w-1 bg-green-500 rounded-sm animate-music-bar-1"></div>
                            <div className="w-1 bg-green-500 rounded-sm animate-music-bar-2"></div>
                            <div className="w-1 bg-green-500 rounded-sm animate-music-bar-3"></div>
                            <div className="w-1 bg-green-500 rounded-sm animate-music-bar-4"></div>
                        </div>
                    )}
                </div>
                <div>
                    <p className="text-sm">{track.name}</p>
                    <p className="text-xs text-gray-400">{track.singer}</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-1 flex-1">
                <div className="flex gap-4 items-center justify-center">
                    <img 
                        className="w-4 cursor-pointer opacity-60 hover:opacity-100 transition-all" 
                        src={assets.shuffle_icon} 
                        alt="Shuffle"
                    />  
                    <img 
                        onClick={previous} 
                        className="w-4 cursor-pointer hover:scale-110 transition-all" 
                        src={assets.prev_icon} 
                        alt="Previous"
                    />  
                    <img 
                        onClick={playStatus ? pause : play} 
                        className="w-5 cursor-pointer hover:scale-110 transition-all" 
                        src={playStatus ? assets.pause_icon : assets.play_icon} 
                        alt={playStatus ? "Pause" : "Play"}
                    />  
                    <img 
                        onClick={next} 
                        className="w-4 cursor-pointer hover:scale-110 transition-all" 
                        src={assets.next_icon} 
                        alt="Next"
                    />  
                    <img 
                        className="w-4 cursor-pointer opacity-60 hover:opacity-100 transition-all" 
                        src={assets.loop_icon} 
                        alt="Loop"
                    />  
                </div>
                <div className="flex items-center gap-5 w-full justify-center">
                    <p className="text-xs">
                        {time.currentTime.minute}:{time.currentTime.second < 10 ? `0${time.currentTime.second}` : time.currentTime.second}
                    </p>
                    <div 
                        ref={seekBg} 
                        onClick={seekSong} 
                        className="w-[60vh] max-w-[500px] bg-gray-600 rounded-full cursor-pointer hover:bg-gray-500 transition-all group"
                    >
                        <hr ref={seekBar} className="h-1 border-none w-0 bg-green-500 rounded-full group-hover:bg-green-400"/>
                    </div>
                    <p className="text-xs">
                        {time.totalTime.minute}:{time.totalTime.second < 10 ? `0${time.totalTime.second}` : time.totalTime.second}
                    </p>
                </div>
            </div>
            <div className="hidden lg:flex items-center gap-4 opacity-75 w-[25%] justify-end">
                <img className="w-4 cursor-pointer hover:opacity-100 transition-all" src={assets.plays_icon} alt="Connect" />
                <img className="w-4 cursor-pointer hover:opacity-100 transition-all" src={assets.mic_icon} alt="Lyrics" />
                <img className="w-4 cursor-pointer hover:opacity-100 transition-all" src={assets.queue_icon} alt="Queue" />
                <img className="w-4 cursor-pointer hover:opacity-100 transition-all" src={assets.speaker_icon} alt="Devices" />
                <img className="w-4 cursor-pointer hover:opacity-100 transition-all" src={assets.volume_icon} alt="Volume" />
                <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={volume} 
                    onChange={changeVolume}
                    className="w-20 h-1 bg-gray-600 rounded-lg cursor-pointer slider"
                />
                <img className="w-4 cursor-pointer hover:opacity-100 transition-all" src={assets.mini_player_icon} alt="Mini Player" />
                <img className="w-4 cursor-pointer hover:opacity-100 transition-all" src={assets.zoom_icon} alt="Full Screen" />
            </div>
        </div>
    )
}

export default Player;