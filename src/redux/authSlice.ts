import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'
import { userType } from "../types/MainTypes"

export interface  IAuth {
	openModal: boolean
	typeModal: boolean
  user: userType
}


const initialState:IAuth = {
	openModal: false,
  typeModal: false,
  user : {
	email: null,
	id: null,
	token: null
  }
}


export const authSlice = createSlice({
	name : 'authReducer',
	initialState,
	reducers : {
		setOpenModal: (state, action:PayloadAction<boolean>) => {
			state.openModal = action.payload
		},
		setTypeModal: (state, action:PayloadAction<boolean>) => {
			state.typeModal = action.payload
		},
		authUser: (state, action:PayloadAction<userType>) => {
			state.user = action.payload
		},
		removeUser: (state) => {
			state.user = initialState.user
		}
	}
})

export const {setOpenModal, setTypeModal, authUser, removeUser} = authSlice.actions

export default authSlice.reducer