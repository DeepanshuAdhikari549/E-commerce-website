import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

function SearchBar() {

    const {search ,setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const [visible,setVisible] = useState(false);
    const location = useLocation();

    useEffect(()=>{
        if (location.pathname.includes('collection')) {
            setVisible(true);
        }
        else{
            setVisible(false);
        }
    },[location])

    return showSearch && visible ? (

    <div className="text-center py-2 border-t bg-white">
      <div className="inline-flex items-center justify-between px-5 py-3 my-5 mx-3 rounded-full w-11/12 sm:w-2/3 md:w-1/2 bg-gray-100 shadow-sm focus-within:shadow-md transition-all duration-300">
        <input value={search} onChange={(e) => setSearch(e.target.value)} className="flex-1 outline-none bg-transparent text-sm text-gray-700 placeholder-gray-400" type="text" placeholder="Search..."/>
        <img className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity duration-200" src={assets.search_icon}alt="Search"/>
      </div>
      <img onClick={() => setShowSearch(false)} className="inline w-4 h-4 cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-200" src={assets.cross_icon} alt="Close"/>
    </div>

  ) : null
}

export default SearchBar
