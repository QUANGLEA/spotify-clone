import { ChevronDownIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useState } from "react";
import { shuffle } from "lodash";
import Songs from "./Songs";
import useSpotify from "../hooks/useSpotify";
import { useRecoilState, useRecoilValue } from "recoil"
import { playlistIdState, playlistState } from "../atoms/playlistAtom"
import { signOut } from "next-auth/react";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
import Popup from "./Popup"

const colors = [
    "from-indigo-500",
    "from-blue-500",
    "from-green-500",
    "from-red-500",
    "from-yellow-500",
    "from-pink-500",
    "from-purple-500",
];

function Center() {
    const { data: session } = useSession();
    const spotifyApi = useSpotify();
    const [color, setColor] = useState(null);
    const playlistId = useRecoilValue(playlistIdState);
    const [playlist, setPlaylist] = useRecoilState(playlistState)
    const [isOpenHelp, setIsOpenHelp] = useState(false);

    useEffect(() => {
        setColor(shuffle(colors).pop());
    }, []);

    useEffect(() => {
        spotifyApi
            .getPlaylist(playlistId)
            .then((data) => {
                setPlaylist(data.body);
            })
            .catch((err) => console.log("Something went wrong!", err));
    }, [spotifyApi, playlistId]);

    return (
        <div className="flex-grow h-screen overflow-y-scroll scrollbar-hide">
            <header className="absolute top-5 right-8">
                <div 
                    className="flex items-center bg-black text-white space-x-3 opacity-90 hover:opacity-70 cursor-pointer rounded-full p-1 pr-2"
                    onClick={signOut}
                >
                    <img className="rounded-full w-10 h-10" 
                    src={session?.user.image} 
                    alt="" 
                    />
                    <h2>{session?.user.name}</h2>
                    <ChevronDownIcon className="h-5 w-5" />
                </div>
                <div className="absolute bg-white rounded-full w-10 h-10 top-16 right-0">
                    <QuestionMarkCircleIcon onClick={() => {isOpenHelp ? setIsOpenHelp(false) : setIsOpenHelp(true)}}/>
                </div>
                
            </header>
            <div className="absolute top-[9rem] right-8">
                <Popup trigger={isOpenHelp}/>
            </div>
            <section className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8 w-full`}>
                <img 
                    className="h-44 w-44 shadow-2xl" 
                    src={playlist?.images?.[0]?.url} 
                    alt="" 
                /> 
                <div>
                    <p>PLAYLIST</p>
                    <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">
                        {playlist?.name} 
                    </h1>
                </div>
            </section>

            <div>
                <Songs />
            </div>
        </div>
    )
}

export default Center;