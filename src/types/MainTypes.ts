
export type ProductType = {
  [x:string]: any | undefined
  id: number;
	name: string;
  brandName: string;
  soldBy: string;
  rating: number;
  reviewsCount: number;
  price: number;
  offers: number;
  photos: Array<string>;
  sizes?: any;
  colors?: any;
  category: number;
  reviews?: Array<ReviewType>;
}


export type ReviewType = {
  author: string,
  date: string,
  rating: number,
  title: string,
 description: string,
  photos: Array<string>
}


//State types
export type StateType = {
	products: ProductType[]
  
}


export type SettingsType = {
  sortBy : string
  category? : string;
  allFilters? : any
  search? : string
  searchAll? : string
  page?: number
}


export type FilterType = {
  brandName: string[],
  colors: string[],
  offers: string[],
}


export type ObjectArraySlice = {
  [key: string]: any[],
  brandName: any[],
  colors: string[],
  offers: string[],
  sizes: string[],
  
}

export type  CartProductType = {
  id: string | undefined;
  newId: number;
  count:number;
	name: string;
  brandName: string;
  soldBy: string;
  rating: number;
  price: number;
  offers: number;
  photos: Array<string>;
  size: string;
  color: string;
  
}

export enum StatusTypes {
  PENDING = 'pending',
	FULFILLED = 'fulfilled',
	REJECTED = 'rejected',
}

export type userType = {
  email : string | null
  id : string | null
  token : string | null

}