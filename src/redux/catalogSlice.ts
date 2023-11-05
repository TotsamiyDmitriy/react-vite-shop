import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import type { AppDispatch } from './store'
import type { ProductType, SettingsType,ObjectArraySlice } from '../types/MainTypes'

import { filterWrapper, filterRangeValues, filterPriceRange } from '../utils/filters'

// Define a type for the slice state



export interface  ICatalog {
  products : ProductType[],
  uniqueProducts :ProductType[],
  currentProducts:ProductType[],
  searchProducts:ProductType[],
  allFilters: ObjectArraySlice,
  sortBy : string,
  category? : string,
  allArrayFilters: any,
  priceRangeProducts: number[],
  priceRangeFilter: number[],
  checked: boolean[],
  isLoaded:boolean,
  searchQuery : string,
  searchAllQuery: string,

  pageCount: number
  page: number,

}


// Define the initial state using that type
const initialState: ICatalog = {
  priceRangeProducts:[0,0],
  priceRangeFilter: [],
  products: [],
  category: '',
  uniqueProducts :[],
  currentProducts :[],
  searchProducts : [],
  isLoaded: false,
  allFilters:{
    brandName:[],
    colors: [],
    offers: [],
  },
  sortBy: '_sort=rating&_order=desc',
  allArrayFilters: {
    colors: [],
    sizes: [],
  },
  checked: [],
  searchQuery:'',
  searchAllQuery: '',
  page:1,
  pageCount: 1,
}


export const catalogSlice = createSlice({
  name: 'catalogReducer',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
     setProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.products = filterPriceRange(filterWrapper(filterWrapper(action.payload, state.allArrayFilters['sizes'], 'sizes'), state.allArrayFilters['colors'], 'colors'), state.priceRangeFilter)
      if (state.priceRangeFilter.length === 0) {
      state.priceRangeProducts = filterRangeValues(state.products);   
      }
    },
    setUnique : (state, action: PayloadAction<ProductType[]>) => {
      state.uniqueProducts = action.payload
    },
    setCurrentProducts : (state, action: PayloadAction<ProductType[]>) => {
      state.currentProducts = action.payload
    },
    setSearchProducts : (state, action: PayloadAction<ProductType[]>) => {
      state.searchProducts = action.payload
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload
    },
    switchFilters: (state, action: PayloadAction<string[]>) => {

        if(state.allFilters[action.payload[1]].length !== 0 && state.allFilters[action.payload[1]].includes(action.payload[0])) {
          state.allFilters[action.payload[1]] = state.allFilters[action.payload[1]].filter((filter:string) => filter !== action.payload[0]);
        } else {
          state.allFilters[action.payload[1]].push(action.payload[0])
          }
        },
    switchArrayFilters: (state, action: PayloadAction<string[]>) => {
        if (state.allArrayFilters[action.payload[1]].length !== 0 && state.allArrayFilters[action.payload[1]].includes(action.payload[0])) {
          state.allArrayFilters[action.payload[1]] = state.allArrayFilters[action.payload[1]].filter((ArrFilters:string) => ArrFilters !== action.payload[0])
        } else {
        state.allArrayFilters[action.payload[1]].push(action.payload[0])
        }
      },

      setPriceRangeProducts: (state, action: PayloadAction<number[]>) => {
        state.priceRangeProducts = action.payload
      },
      setPriceRangeFilter: (state, action: PayloadAction<number[]>) => {
        state.priceRangeFilter = action.payload
      },

      clearAllFilters:(state) => {
        state.allArrayFilters = initialState.allArrayFilters
        state.allFilters = initialState.allFilters
        state.priceRangeFilter = initialState.priceRangeFilter
        
      },
      reloadFilters: (state) => {
        state.allArrayFilters = initialState.allArrayFilters
        state.allFilters = initialState.allFilters
      },
      setLoaded:(state, action: PayloadAction<boolean>) => {
        state.isLoaded = action.payload
      },
      setCategory: (state, action: PayloadAction<string | undefined>) => {
        state.category = action.payload
      },
      setSearch: (state, action: PayloadAction<string>) => {
        state.searchQuery = action.payload
        
      },
      setSearchAll: (state, action: PayloadAction<string>) => {
        state.searchAllQuery = action.payload
      },
      setPage:(state, action: PayloadAction<number>) => {
        state.page = action.payload
      },
      setPageCount: (state, action: PayloadAction<ProductType[]>) => {
       state.pageCount = Math.ceil(action.payload.length / 12)
       console.log(state.pageCount)
      }
    }
  }
)



export function fetchProducts(settings:SettingsType, setFunction:any) {

  const {sortBy, allFilters, category, search, page} = settings
  let filterQuery:string[] = []
  for (let key in allFilters) {
    if (allFilters[key].length !== 0) {
    filterQuery.push(allFilters[key].map((filter:any) => {return(`${key}=${filter}`)}).join('&'))
      
    }
  } 
  const allFiltersQuery = filterQuery.join('&')

  return async function (dispatch:AppDispatch) {
    await axios.get(`http://localhost:3004/products?${`_page=${page}&_limit=12&`}${search ? `name_like=${search}&`: ''}${category ? `category=${category}&`: ''}${sortBy}&${allFiltersQuery}`).then(({data}) => {
      dispatch(setFunction(data))
          
    })
     
  }
}
export function fetchUniqueProducts(settings:SettingsType) {

  const {category} = settings
    return async function (dispatch:AppDispatch) {
    await axios.get(`http://localhost:3004/products?${category ? `category=${category}&`: ''}`).then(({data}) => {
      dispatch(setUnique(data))     
      dispatch(setPageCount(data))  
    })
     
  }
}


export function fetchSearchProducts(settings:SettingsType) {

  const {searchAll} = settings
  return async function (dispatch:AppDispatch) {
    await axios.get(`http://localhost:3004/products?${searchAll ? `name_like=${searchAll}&`: ''}`).then(({data}) => {
      dispatch(setSearchProducts(data))       
    })
     
  }
}




export const {setPageCount,setPage,setSearchProducts,setSearch,setSearchAll,setCurrentProducts, setCategory, reloadFilters, setProducts, switchFilters,clearAllFilters,setSortBy, setUnique,switchArrayFilters,setPriceRangeProducts, setPriceRangeFilter } = catalogSlice.actions

export default catalogSlice.reducer