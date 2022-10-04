import { useLanyardWs } from "use-lanyard";
import { SiSpotify, SiVisualstudiocode } from "react-icons/si";

const Status = () => {
    const data = useLanyardWs("");
    const listening = data?.spotify || null;
    const coding = data?.activities.find(
        (a) => a.application_id === "383226320970055681"
      ) || null;

    if (coding) {
        return (
            <div className="flex w-full bg-black dark:bg-[#1ea1dc] sm:rounded-lg items-center text-white leading-none h-8 ">
            <SiVisualstudiocode className="ml-4 h-4 w-4" />
                <p className="ml-2 truncate">Editing<a className="font-semibold text-inherit">{coding.details?.replace("Editing", "")}</a> in <a className="font-semibold text-inherit">{coding.name}</a></p>
            </div>
        )
    } else if (listening) {
        return (
            <a href={`https://open.spotify.com/track/${listening.track_id}`}>
            <div className="flex w-full bg-black dark:bg-[#1DB954] sm:rounded-lg items-center text-white leading-none h-8 ">
            <SiSpotify className="ml-4 h-4 w-4" />
                <p className="ml-2 truncate">Listening to <a className="font-semibold text-inherit">{listening.song}</a> by <a className="font-semibold text-inherit">{listening.artist}</a></p>
            </div>
            </a>
        )
    } return (
        <div className="hidden">
            <p className="font-medium">Not Doing Anything</p>
        </div>
    )
}

export default Status;