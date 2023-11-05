import { createSlice, type PayloadAction  } from "@reduxjs/toolkit"
import { getCartStorage } from "../utils/product"
import { CartProductType } from "../types/MainTypes"

interface ICartSlice {
	items : CartProductType[],
	accumPrice : number
}
const {accumPrice, items} = getCartStorage();

const initialState:ICartSlice = {
	items,
	accumPrice,
}	

export const cartSlice = createSlice({
	name: 'cartReducer',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		addItems(state, action: PayloadAction<CartProductType>) {   
			const duplicate = findDuplicates(state.items, action.payload)
			
			if(duplicate.length > 0) {
				state.items = deleteDuplicates(state.items, action.payload);
				

				const newItemChecked = {
						...action.payload,
						newId: duplicate[0].newId,
						count: action.payload.count + duplicate[0].count
				}

				state.items.push(newItemChecked);
			} else {
				const newItem = {
					...action.payload, count: 1,  newId: state.items.length ? state.items[state.items.length - 1].newId + 1 : 1
				}

				state.items.push(newItem)
			}
    	},

		plusItems(state, action: PayloadAction<number>) {
      		const findItem = state.items.find((obj) => obj.newId === action.payload);
			
      		if (findItem) {
				findItem.count++;
				state.accumPrice = state.items.reduce((accum, item) => item.price * item.count + accum, 0);
      		}
    	},
		minusItems(state, action: PayloadAction<number>) {
			const findItem = state.items.find((obj) => obj.newId === action.payload);
			  
		if (findItem) {
				findItem.count--;
				state.accumPrice = state.items.reduce((accum, item) => item.price * item.count + accum, 0);
	   		}
	  	},
	  	removeItems(state, action: PayloadAction<number>) {
			state.items = state.items.filter((obj) => obj.newId !== action.payload);
			state.accumPrice = state.items.reduce((accum, item) => item.price * item.count + accum, 0);
	  		},
		},
	}
)
  
const findDuplicates = (arr: CartProductType[], item: CartProductType) => arr.filter(elem => elem.size === item.size && elem.color === item.color && elem.name === item.name);
const deleteDuplicates = (arr: CartProductType[], item: CartProductType) => arr.filter(elem => elem.size !== item.size || elem.color !== item.color || elem.name !== item.name);
  
  export const {addItems, plusItems, minusItems, removeItems} = cartSlice.actions
  
  export default cartSlice.reducer