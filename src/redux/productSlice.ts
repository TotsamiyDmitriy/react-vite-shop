import {createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { AppDispatch } from "./store"
import {ProductType } from "../types/MainTypes"
import axios from "axios"


export interface IProductSlice {
	singleProduct : ProductType[] | null,

	isLoaded: boolean
}


const initialState:IProductSlice = {
	singleProduct: null,
	isLoaded: false,
}


export const productSlice = createSlice({
	name:'productReducer',
	initialState,
	reducers: {
		setSingleProduct: (state, action: PayloadAction<ProductType[]>) => {
			state.singleProduct = action.payload
		  },
		setLoaded:(state, action: PayloadAction<boolean>) => {
			state.isLoaded = action.payload
		},
	},
},
)

export function fetchSingleProduct(index: string | undefined) {
	return async function (dispatch:AppDispatch) {
		dispatch(setLoaded(false))
	  await axios.get(`http://localhost:3004/products?id=${index}`).then(({data}) => {
		dispatch(setSingleProduct(data)) 
		dispatch(setLoaded(true))     
	  })
	   
	}

}

export const {setLoaded,setSingleProduct} = productSlice.actions

export default productSlice.reducer