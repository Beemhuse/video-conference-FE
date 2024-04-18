import axios from 'axios';
import "./VideoComponents.css"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import ChatWindow from './ChatWindow';
import CallInfo from './CallInfo';
import ActionButtons from './ActionButton';

export default function MainVideoPage() {

  const [searchParams, setSearchParams] = useSearchParams()
  const [apptInfo, setApptInfo] = useState({})
useEffect(()=>{
  const fetchMedia = async()=>{
    const constraints = {
      video: true,
      audio: false
    }
try{
const stream = await navigator.mediaDevices.getUserMedia(constraints);
console.log(stream)
}
catch(err){
console.log(err)
}
  }
  fetchMedia()
})

useEffect(()=>{
  const token = searchParams.get('token')
  console.log(token)
  const fetchDecodedToken = async()=>{
    const res = await axios.post("https://localhost:9000/validate-link", {token});
    console.log(res.data)
    setApptInfo(res.data)
  }
  fetchDecodedToken()
}, [])
  // const token = searchParams.get('token')
  // console.log(token)
  return (
    <div className='main-video-page'>
<div className="video-chat-wrapper">
  <video id='large-feed' autoPlay controls playsInline></video>
  <video id='own-feed' autoPlay controls playsInline></video>
  {apptInfo.professionalFullName ? <CallInfo />: <></>}
  <ChatWindow />
</div>
<ActionButtons />

    </div>
  )
}