
import  React ,{createContext, useState, useEffect} from "react";
import {fetchDataFromApi} from "../utils/Api";
export const Context=createContext();

export const AppContext=(probs)=>{
    const [loading,setLoading]=useState(false);
    const [searchResults,setSearchResults]=useState([]);
    const [selectCategories,setSelectCategories]=useState("News");
    const [mobileMenu,setMobileMenu]=useState(false);

    useEffect(()=>{
        fetchSelectedCategoryData(selectCategories)
    },[selectCategories,setSearchResults]);

    const fetchSelectedCategoryData=(query)=>{
        setLoading(true);
        // fetchDataFromApi(`search/?query=${query}`).then(({videos})=>{
        fetchDataFromApi(`search/?query=${query}`).then(({contents})=>{
            setSearchResults(contents)
            console.log(searchResults);
            console.log("context",contents);
            setLoading(false)
        })
    }

    return(
        <Context.Provider 
            value={{
                loading,
                setLoading,
                searchResults,
                selectCategories,
                setSelectCategories,
                mobileMenu,
                setMobileMenu
        }}
        >
            {probs.children}
        </Context.Provider>
    );
}