import React from 'react';
import ReactPlayer from 'react-player'

function DemoVideo(props) {
    return (
      <>
<div className="bg-gradient-to-r from-gray-500 to-gray-800">
      <div className='bg-blue-500 py-8'>
      <div className='text-white ml-10 my-8'>
      <h1 className="text-4xl drop-shadow-md font-extrabold tracking-tight sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl " >Infohorus Demo</h1>
      <p className="font-semibold drop-shadow-md" >by Bahati Tech</p>
      </div>
      </div>
      <div className='py-12 bg-white'>
      <ReactPlayer url="https://youtu.be/ClqxwaVBvp0" style={{position: 'relative', margin:'auto', top: '0', left: '0', width: '100%', height: '100%'}}/>
      </div>
      <div className="py-8 text-white text-center">
      <h1 className="text-2xl font-extrabold tracking-tight sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl " >Thank you for watching our demo video</h1>
      {/* <p className="font-semibold " >by Bahati Tech</p> */}
      </div>
      </div>
      </>
    );
}

export default DemoVideo;