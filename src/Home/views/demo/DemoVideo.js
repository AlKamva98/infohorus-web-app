import React from 'react';
import ReactPlayer from 'react-player'

function DemoVideo(props) {
    return (
      <>
      <ReactPlayer url="https://youtu.be/ClqxwaVBvp0" style={{position: 'relative', margin:'auto', top: '0', left: '0', width: '100%', height: '100%'}}/>
      </>
    );
}

export default DemoVideo;