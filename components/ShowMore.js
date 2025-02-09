"use client"

import React from 'react'
// import { useRouter } from 'next/navigation'
import CustomButton from './CustomButton';
// import { updateSearchParams } from '../Utilities';0

export default function ShowMore({pageNumber, isNext}) {

    // const router = useRouter();
    // const handleNavigation = () => {
    //     const  newLimit = (pageNumber + 1) * 10;
    //     const newPathname = updateSearchParams("limit",`${newLimit}`)
    //     router.push(newPathname)
    // }
  return (
    
    <div className='w-full flex-center gap-5 mt-10'>
        {!isNext && (
            <CustomButton 
            title="Show More"
            btnType='button'
            containerStyle="bg-primary-blue rounded-full text-white"
            // handleClick={handleNavigation}
            />
        )}
    </div>
  )
}
