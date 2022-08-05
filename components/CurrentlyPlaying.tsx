import 'react-app-polyfill/ie11';
import * as React from 'react';
import { useLastFM } from 'use-last-fm';

const CurrentlyPlaying = () => {
    const lastFM = useLastFM('shibbbe', '');
  
    if (lastFM.status === 'error') {
      return (
        <div className="pb-2 w-full bg-black dark:bg-[#1DB954] rounded-lg items-center text-white leading-none lg:rounded-lg flex h-8">
            <i className="ml-4 fa-brands fa-spotify"></i>
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
      <div className="pb-2 w-full bg-black dark:bg-[#1DB954] rounded-lg items-center text-white leading-none lg:rounded-lg flex h-8">
        <i className="ml-4 fa-brands fa-spotify"></i>
        <p className="ml-2">Listening to <a className="font-semibold text-inherit">{lastFM.song.name}</a> by <a className="font-semibold text-inherit">{lastFM.song.artist}</a></p>
      </div>
    );
  };

export default CurrentlyPlaying;

