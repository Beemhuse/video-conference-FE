import { useDispatch, useSelector } from "react-redux"
import { setCallStatus } from "../store/reducers/callReducer"

const HangupButton = ({largeFeedEl, smallFeedEl})=>{

    const dispatch = useDispatch()
    const callStatus = useSelector(state=>state.call.current)
    const streams = useSelector(state=>state.streams)
console.log(callStatus)
    const hangupCall = ()=>{
        dispatch(setCallStatus('complete'))
        //user has clicked hang up
        for(const s in streams){
            //loop through all streams, and if there is a pc, close it
            //remove listeners
            //set it to null
            if(streams[s].peerConnection){
                streams[s].peerConnection.close();
                streams[s].peerConnection.onicecandidate = null
                streams[s].peerConnection.onaddstream = null
                streams[s].peerConnection = null;
            }
        }
        //set both video tags to empty
        smallFeedEl.current.srcObject = null;
        largeFeedEl.current.srcObject = null;
    }

    if(callStatus === "complete"){
        return null
    }

    return(
        <button 
            onClick={hangupCall} 
            className="btn btn-danger hang-up"
        >Hang Up</button>
    )
}

export default HangupButton