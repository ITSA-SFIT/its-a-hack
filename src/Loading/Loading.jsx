import React from 'react'
import itsahackLogo from './../logo.svg'
import './Loading.css'

const Loading = ({isLoaded}) => {
  return (
    <div className={`fixed h-full w-full bg-black z-[1000] flex justify-center items-center ${isLoaded ? "loaded": ""}`}>
      <img src={itsahackLogo} alt="" className='h-[50%] animate-pulse' />
    </div>
  )
}

export default Loading