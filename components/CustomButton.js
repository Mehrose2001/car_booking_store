"use client";

import Image from 'next/image';
import SearchManufacturer from './SearchManufacturer';
import React from 'react'



export default function CustomButton({rightIcon,title, handleClick, containerStyle, textStyles}) {
  return (
    <div>
    <button
    disabled={false}
    type={"button"}
    className={`custom-btn ${containerStyle}`}
    // onClick={handleClick}
    onClick={handleClick}
    >
    <span className={`flex-1 ${textStyles}`}>
        {title}
    </span>
     { rightIcon && 
      <div className="relative w-6 h-6">
        <Image 
        src={'/right-arrow.svg'}
        alt="right icon"
        fill
        className='object-contain'
        />
      </div>
      }
    </button>
    </div> 
  )
}






// "use client"

// export default function CustomButton({title,textStyles,containerStyles,handleClick}) {
//   return (
//     <div>
    {/* <button
    disabled={false}
    type={"button"}
    className={"custom-btn"}
    onClick={handleClick}
    >
    <span className={"flex-1"}>
        {title}
    </span>
     { rightIcon && 
      <div className="relative w-6 h-6">
        <Image 
        src={rightIcon}
        alt="right icon"
        fill
        className='object-contain'
        />
      </div>
      }
    </button> */}
//     hello
//     </div>
//   )
// }
