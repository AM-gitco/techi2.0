/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-vars */
import React, { useContext  } from 'react'
import './App.css'
import va from './assets/ai.png'
import { CiMicrophoneOn } from "react-icons/ci";
import { dataContext } from './context/UserContext';
import speakimg from './assets/speak.gif';
import waveimg from './assets/aiVoice.gif'

function App() {
  let {recognition , speaking , setSpeaking, recognitionText , response , setResponse , setRecognitionText} = useContext(dataContext)
 

  return (
    <>
    <div className="main">
      <img src={va} alt="" id='techie-img'/>
      <span>Hello, I am <span className='special'>Techie! 2.0 </span> Your advanced <span className='va'>virtual assistant.</span></span>
      {!speaking? <button onClick={() => {
        setRecognitionText('listening.....')
        setSpeaking(true)
        setResponse(false)
        recognition.start();
      }}>Talk to Me! <CiMicrophoneOn /></button> :
      <div className='response'>
        {!response? <img src={speakimg} alt="" id='speakimg'/> : <img src={waveimg} alt="" id='waveimg'/>}
        <p>{recognitionText}</p>
      </div>
      }
    </div>
    </> 
  )
}

export default App