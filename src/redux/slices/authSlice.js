import { createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
     name: "auth",
     initialState: {
          token: '856d190761d67926abf3976d0269795d681fed9f',
          username: 'endy',
          phone_number: '08529893764'
     },
     reducers: {
          setToken(state, action){
               state.token = action.payload
          },
          setUsername(state, action){
               state.username = action.payload
          },
          setPhoneNumber(state, action){
               state.phone_number = action.payload
          }
     }
})

export const {setToken} = authSlice.actions
export default authSlice.reducer