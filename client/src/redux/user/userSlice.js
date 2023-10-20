import { createSlice } from "@reduxjs/toolkit";

const initialState={
    currentUser:null,
    error:null,
    loading:false
}

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        signInStart:(state,action)=>{
            state.loading=true;

        },
        signInSuccess:(state,action)=>{
            state.currentUser=action.payload,
            state.loading=false,
            state.error=null
        },
        signInFailure:(state,action)=>{
            state.error=action.payload
            state.loading=false
        },
        updateUserStart:(state)=>{
            state.loading=true
        },
        updateUserSucess:(state,action)=>{
            state.currentUser=action.payload
            state.loading=false
            state.error=null
        },
        updateUserfailure:(state,action)=>{
            state.error=action.payload
            state.loading=false
        }
    }
})

export const {signInStart,signInFailure,signInSuccess,updateUserStart,updateUserSucess,updateUserfailure}=userSlice.actions
export  const userReducer= userSlice.reducer;
export const userSelector=(state)=>state.user