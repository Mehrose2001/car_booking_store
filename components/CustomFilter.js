"use client"

import React from 'react'
import { useState,Fragment } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Listbox,Transition } from '@headlessui/react'
// import { updateSearchParams } from '../Utilities'

export default function CustomFilter( {title, options} ) {
  
  const [selected, setSelected] = useState(options[0])
  const router = useRouter();

  // let handleUpdateParams = (title,value) =>{
  //   let newPathname = updateSearchParams({title,value});
  //   router.push(newPathname);
  // }
 

  return (
    <div className='w-fit'> 
      <Listbox
      value={selected}
      onChange={(e)=>{
      setSelected(e);
      // handleUpdateParams(e);
    }}
      >
        <div className='w-fitt relative z-10'>
        <Listbox.Button className="custom-filter__btn" >
        <span className='block truncate'>{selected.title}</span>
        <Image 
        src="/chevron-up-down.svg"
        width={20}
        height={20}
        className='ml-4 object-contain'
        alt='chevron up down'
        />
        </Listbox.Button>
        <Transition
        as={Fragment}
        leave='transition ease-in duration-100'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
        >
          <Listbox.Option className="custom-filter__options" >
            {options.map((option)=>(
              <Listbox.Option
              key={option.title}
              value={option}
              className={ ({active})=>`list-none relative select-none py-2 px-4 ${active ? 'bg-primary-blue text-white':'bg-grey-900' }`}
              >
                {({ Selected })=>(
                  
                    <span className={ ({selected})=>`block truncate ${selected ? 'font-medium':'font-normal' }`}
                    > {option.title} </span>
                  )
                }
              </Listbox.Option>
            ))}
          </Listbox.Option>
        </Transition>
        </div>
      </Listbox>
    </div>
  )
}
