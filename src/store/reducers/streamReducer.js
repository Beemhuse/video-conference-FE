import { createSlice } from '@reduxjs/toolkit'

export const streamSlice = createSlice({
  name: 'stream',
  initialState: {
    streamType: null,
    localStream: null,
    remoteStream: null,
    offerData: null,
  },

  reducers: {
    setStreamType: (state, action) => {
      state.streamType = action.payload
    },
    setLocalStream: (state, action) => {
      state.localStream = action.payload
    },
    setRemoteStream: (state, action) => {
      state.remoteStream = action.payload
    },
    updateRemotePeerconnection: (state, action) => {
      state.remoteStream = action.payload
     
    },
    setOfferData: (state, action) => {
      state.offerData = action.payload
    },
  },
})

export const { setStreamType, setLocalStream, setRemoteStream, setOfferData } =
  streamSlice.actions

export default streamSlice.reducer
