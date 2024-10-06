"use client";

import SearchManufacturer from './SearchManufacturer';
import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
// import { URLSearchParams } from 'next/dist/compiled/@edge-runtime/primitives/url';
import { useRouter } from 'next/navigation';

const SearchButton = ({dynamic__Class}) =>(
  <button type='submit' className={`-ml-5 z-10 ${dynamic__Class}`}>
    <Image
    src="/magnifying-glass.svg"
    alt="magnifying"
    height={40} 
    width={40}
    className="object-contain" 
    />
  </button>
)


export default function SearchBar() {

    const [manufacturer, setManufacturer] = useState("")
    const [model, setModel] = useState("")
    const router = useRouter(); 

    const handleSearch = (e) =>{
      e.preventDefault();
      if (manufacturer === '' && model === ''){
       return alert("Hello")
      } 
      updateSearchParams(
        model.toLowerCase(),
        manufacturer.toLowerCase()
      )
   }
   const updateSearchParams = (model,manufacturer) => {
      const searchParams = new URLSearchParams(window.location.search);
      
      if (model) {
        searchParams.set('model',model)
      } else {
        searchParams.delete('model')
      }
      if (manufacturer) {
        searchParams.set('manufacturer',manufacturer)
      } else {
        searchParams.delete('manufacturer')
      }
      const newPathname =`${window.location.pathname} ? ${searchParams.toString()}`

      router.push(newPathname)
   }

    return (
    <form className='searchbar' onSubmit={handleSearch}> 
        <div className='searchbar__item'>
            <SearchManufacturer 
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
            />
            <SearchButton dynamic__Class="sm:hidden"/>
        </div>
        <div className='searchbar__item'>
        <Image
        src="/model-icon.png"
        width={25}
        height={25}
        className='absolute w-[20px] h-[20px] ml-4'
        alt='car-model'
        />
        <input 
        type='text'
        name="model"
        value={model}
        onChange={(e)=> setModel(e.target.value)}
        placeholder='Tiguan'
        className='searchbar__input'
        />
        <SearchButton dynamic__Class="sm:hidden"/>
        </div>
        <SearchButton dynamic__Class="max-sm:hidden"/>
    </form>
  )
}
