import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import './Video.css'

function VideoSlider() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Tambahkan ID video YouTube yang ingin Anda tampilkan di sini
    setVideos([
      '_HWuKUou2bE',
      'giWG4ztgmqo',
      'Xf-reo-uR-s',
      'DlI9AS2WQ34',
      'k1YgxC54LWE',
      'YCx4OpH5BGU',
      'CMpHn2GU0qc',
    ]);
  }, []);

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };

  function handlePrevVideo() {
    setCurrentVideoIndex(currentVideoIndex - 1);
  }

  function handleNextVideo() {
    setCurrentVideoIndex(currentVideoIndex + 1);
  }

  return (
    <div className='layar' id='videopage'>
      <div className='title'>
        <h1>A Lot Of People Has Enjoyed Our Island</h1>
      </div>
      <div className='youtube'>
        {videos.length > 4 && (
          <YouTube 
            className="video"
            videoId={videos[currentVideoIndex]}
            opts={opts}
            
          />
        )}
      </div>
      <div className='button'>
        {currentVideoIndex > -1 && (
          <button className="prev-button" onClick={handlePrevVideo}>Prev</button>
        )}
        {currentVideoIndex < videos.length - 1 && (
          <button className="next-button" onClick={handleNextVideo}>Next</button>
      )}
      </div>
    </div>
  );
}

export default VideoSlider;
