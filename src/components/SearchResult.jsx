import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Context } from '../context/ContextApi';
import { fetchDataFromApi } from '../utils/Api';
import LeftNav from './LeftNav';
import SearchResultsVideoCard from './SearchResultsVideoCard';

const SearchResult = () => {
  const [result,setResult]=useState();
  const {searchQuery} = useParams();
  const {setLoading}=useContext(Context);
  useEffect(()=>{
    document.getElementById("root").classList.remove("custom-h");
    featchSearchResults();
  },[searchQuery]);

  const featchSearchResults=()=>{
    setLoading(true);
    console.log("ddd",searchQuery);
    fetchDataFromApi(`search/?q=${searchQuery}`).then((res)=>{
      console.log("seacrhReas",res);
      setResult(res?.contents);
      setLoading(false);
    });
  }
  return (
    <div className='flex flex-row h-[calc(100%-56px)]'>
      <LeftNav/>
    <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
      <div className="grid grid-cols-1 gap-1 p-5">
        {
          result?.map((items)=>{
            if(items?.type!=="video") return false;
            let video = items?.video;
           return (
            <SearchResultsVideoCard key={video?.videoId} item={video}/>
           )
          })
        }
      </div>
    </div>
    </div>
  )
}

export default SearchResult
