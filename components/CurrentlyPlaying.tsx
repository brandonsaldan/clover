import 'react-app-polyfill/ie11';
import * as React from 'react';
import { useLastFM } from 'use-last-fm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

const CurrentlyPlaying = () => {
    const lastFM = useLastFM('shibbbe', '');
  
    if (lastFM.status === 'error') {
      return (
        <div className="flex pb-2 w-full bg-black dark:bg-[#1DB954] sm:rounded-lg items-center text-white leading-none h-8">
            <FontAwesomeIcon icon={faSpotify} className="ml-4 h-4 w-4" />
            <p className="ml-2">API Error: Please contact me :)</p>
        </div>
        );
    }
  
    if (lastFM.status !== 'playing') {
      return (
        <div className="hidden">
            <p className="ml-2">Not listening to anything</p>
        </div>
    );
    }
  
    return (
      <a href="https://www.last.fm/user/shibbbe">
        <div className="flex pb-2 w-full bg-black dark:bg-[#1DB954] sm:rounded-lg items-center text-white leading-none h-8 ">
        <FontAwesomeIcon icon={faSpotify} className="ml-4 h-4 w-4" />
          <p className="ml-2 truncate">Listening to <a className="font-semibold text-inherit">{lastFM.song.name}</a> by <a className="font-semibold text-inherit">{lastFM.song.artist}</a></p>
        </div>
      </a>
    );
  };

export default CurrentlyPlaying;

