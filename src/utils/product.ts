import { CartProductType } from "../types/MainTypes";

export function getCartStorage() {
	const items = getLocalStorage('cart')
	const accumPrice = items.reduce((accum:number, item:CartProductType) => (item.price - (item.price * item.offers) / 100) * item.count + accum, 0);
	return {
		accumPrice,
		items
	}
}


export function getLocalStorage(key:string) {
	const data = localStorage.getItem(key)
 return data ? JSON.parse(data) as CartProductType[] : []
}
