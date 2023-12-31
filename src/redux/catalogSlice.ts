import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import type { AppDispatch } from './store'
import { ProductType, SettingsType,ObjectArraySlice, StatusTypes } from '../types/MainTypes'

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
  priceRangeProducts: number[],
  priceRangeFilter: number[],
  checked: boolean[],
  isLoaded:boolean,
  searchQuery : string,
  searchAllQuery: string,

  pageCount: number
  page: number,
  status: StatusTypes,

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
    offers: [],
    colors: [],
    sizes: [],
  },
  sortBy: '_sort=rating&_order=desc',
  checked: [],
  searchQuery:'',
  searchAllQuery: '',
  page:1,
  pageCount: 1,
  status: StatusTypes.PENDING,
}




export const fetchProducts = createAsyncThunk<ProductType[], SettingsType>( 
  'products/fetchProducts',
  async (settings) => {

  const {sortBy, allFilters, category, search, page} = settings
  let filterQuery:string[] = []
  const filtersKeys = Object.keys(allFilters)
  for (let i = 0; i <= 1; i++) {
    if (allFilters[`${filtersKeys[i]}`].length !== 0) {
    filterQuery.push(allFilters[`${filtersKeys[i]}`].map((filter:any) => {return(`${filtersKeys[i]}=${filter}`)}).join('&'))
    }
  } 
  const allFiltersQuery = filterQuery.join('&')
  const {data} = await axios.get(`https://json-server-react-shop.vercel.app/products?${`_page=${page}&_limit=12&`}${search ? `name_like=${search}&`: ''}${category ? `category=${category}&`: ''}${sortBy}&${allFiltersQuery}`)
    return data 
  }
)

export const fetchCurrentProducts = createAsyncThunk<ProductType[]>(
  'products/fetchCurrentProducts',
  async () => {
    const {data} = await axios.get(`https://json-server-react-shop.vercel.app/products`)
  return data 
  }   
)



export const catalogSlice = createSlice({
  name: 'catalogReducer',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setUnique : (state, action: PayloadAction<ProductType[]>) => {
      state.uniqueProducts = action.payload
    },
    setSearchProducts : (state, action: PayloadAction<ProductType[]>) => {
      state.searchProducts = action.payload
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload
    },
    switchFilters: (state, action: PayloadAction<string[]>) => {
      const allFiltersByKey = state.allFilters[action.payload[1]]
        if(state.allFilters[action.payload[1]].length !== 0 && state.allFilters[action.payload[1]].includes(action.payload[0])) {
          
          state.allFilters[action.payload[1]] = allFiltersByKey.filter((filter:string) => filter !== action.payload[0]);
        } else {
          state.allFilters[action.payload[1]] = [...allFiltersByKey,(action.payload[0])]
          }
        },
    

      setPriceRangeProducts: (state, action: PayloadAction<number[]>) => {
        state.priceRangeProducts = action.payload
      },
      setPriceRangeFilter: (state, action: PayloadAction<number[]>) => {
        state.priceRangeFilter = action.payload
      },

      clearAllFilters:(state) => {
        state.allFilters = initialState.allFilters
        state.priceRangeFilter = initialState.priceRangeFilter
        console.log("CLEAR");
        
      },
      reloadFilters: (state) => {
        state.allFilters = initialState.allFilters
        console.log("RELOAD")
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
      },
      setFilters: (state, action:PayloadAction<any>) => {
        state.allFilters.brandName = action.payload.brandName
        state.allFilters.sizes = action.payload.sizes
        state.allFilters.colors = action.payload.colors
        state.allFilters.offers = action.payload.offers
        console.log("SET FILTERS", action.payload);
      }    
    },

    


    extraReducers : (builder) => {
      builder.addCase(fetchProducts.pending, (state) => {
        state.status = StatusTypes.PENDING;
        state.products = [];
      });
  
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = StatusTypes.FULFILLED;
        
        state.products = filterPriceRange(filterWrapper(filterWrapper(action.payload, state.allFilters.sizes, 'sizes'), state.allFilters.colors, 'colors'), state.priceRangeFilter)
      if (state.priceRangeFilter.length === 0) {
      state.priceRangeProducts = filterRangeValues(state.products);   
      }
      });
  
      builder.addCase(fetchProducts.rejected, (state) => {
        state.status = StatusTypes.REJECTED;
        state.products = [];
      });
      builder.addCase(fetchCurrentProducts.pending, (state) => {
        state.status = StatusTypes.PENDING;
        state.currentProducts = [];
      });
  
      builder.addCase(fetchCurrentProducts.fulfilled, (state, action) => {
        
        state.status = StatusTypes.FULFILLED;
        state.currentProducts = action.payload;
      });
  
      builder.addCase(fetchCurrentProducts.rejected, (state) => {
        state.status = StatusTypes.REJECTED;
        state.currentProducts = [];
      });
    },
  })

export function fetchUniqueProducts(settings:SettingsType) {

  const {category} = settings
    return async function (dispatch:AppDispatch) {
    await axios.get(` https://json-server-react-shop.vercel.app/products?${category ? `category=${category}&`: ''}`).then(({data}) => {
      dispatch(setUnique(data))     
      dispatch(setPageCount(data))  
    })
     
  }
}

export function fetchSearchProducts(settings:SettingsType) {

  const {searchAll} = settings
  return async function (dispatch:AppDispatch) {
    await axios.get(` https://json-server-react-shop.vercel.app/products?${searchAll ? `name_like=${searchAll}&`: ''}`).then(({data}) => {
      dispatch(setSearchProducts(data))       
    })
     
  }
}




export const {setFilters,setPageCount,setPage,setSearchProducts,setSearch,setSearchAll, setCategory, reloadFilters, switchFilters,clearAllFilters,setSortBy, setUnique,setPriceRangeProducts, setPriceRangeFilter } = catalogSlice.actions

export default catalogSlice.reducer