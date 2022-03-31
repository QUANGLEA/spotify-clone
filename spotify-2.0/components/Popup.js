import { XCircleIcon } from "@heroicons/react/solid"

function Popup( { trigger, setTrigger } ) {
    return (trigger) ? ( 
        <div>
            <div className="grid w-80 h-30 p-3 bg-black rounded items-center text-white">
                <p>To use this clone, please start a Spotify player first.</p>
            </div>
        </div>
    ) : "";
}

export default Popup