import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext(null);

export default function ShoppingCartProvider({children}){

    const [loading, setLoading] = useState(true);
    const [listOfProducts, setListOfProducts] = useState([])

    async function fetchListOfProducts() {
        const apiResponse  = await fetch('https://dummyjson.com/products');
        const result = await apiResponse.json();
        console.log(result);
        
        
        if(result && result?.products){
            setListOfProducts(result?.products)
            setLoading(false)
        }
    
    }

    useEffect(()=>{
        fetchListOfProducts()
    },[])

    
    
    

    return (
        <ShoppingCartContext.Provider value={{listOfProducts, loading}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}