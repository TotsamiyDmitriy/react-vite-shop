import { ProductType } from "../types/MainTypes";

export function UniqueFilter(product:any, keyItem:string, tmpArray:any[]):boolean {
	if (tmpArray.indexOf(product[keyItem]) === -1) {
	 tmpArray.push(product[keyItem]);
	 return true;
   }
   return false;
}


export function UniqueColors(product:any, tmpArray:string[], keys:string) {

  const colorsKeys = Object.keys(product[keys])

	for (let i = 0; colorsKeys.length > i; i++) {
	
		
		if (!tmpArray.includes(colorsKeys[i])) {
			tmpArray.push(colorsKeys[i]);
		
		    return true;
	}
 }
 return false
}



export function filterWrapper(payload:ProductType[], colors:string[], keys:string) {
  return (payload.filter((product:any) => {
    const colorsKeys = Object.keys(product[keys])

        if(colors.length !== 0) {
          for (let i=0; i < colors.length; i++) {
            if (colorsKeys.includes(colors[i])) {
              return true
            }
         }
         return false
      } else {
        return true;
        }
      }))
	}



export function filterRangeValues(uniqueProducts:ProductType[]) {
  const key = 'price'
  let range =  uniqueProducts.length !== 0 ? [uniqueProducts[0][key], uniqueProducts[0][key]] : [0,100]
    for(let i = 0; i<uniqueProducts.length; i++) {
      if  (uniqueProducts[i][key] > range[1]) {
        range[1] = uniqueProducts[i][key] 
      }
      if  (uniqueProducts[i][key] < range[0]) {
        range[0] = uniqueProducts[i][key] 
      }
    }
    return range
}

export function filterPriceRange(payload:ProductType[], stateRange:number[] ) {
  if (stateRange.length !== 0){
    return(payload.filter((product:ProductType) => 
      (stateRange[0] <= product.price && product.price <= stateRange[1])
    ))
  } else {
    return(payload)
  }
}
