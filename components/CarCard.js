"use client";

import React from "react";
import { useState } from 'react'
// import { calculateCarRent } from "../Utilities";
import Image from "next/image";
import CustomButton from "./CustomButton";
import CarModal from "./CarModal";

export default function CarCard({ car }) {
  const { city_mpg,year, make, model, transmission, drive } = car;

  const [isOpen, setIsOpen] = useState(false)
  // const handleModal = () => {
  //   setIsOpen(true)
   
  //  } 

  // const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="card-card__content-title">
          {make} { model}
        </h2>
      </div>
      <p className="flex mt-6 text-[36px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {/* {carRent} */}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
            <Image src="/hero.png" fill preriority  className='object-contain'/>
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
            <div className="flex flex-col justify-center items-center gap-2">
                <Image src="/steering-wheel.svg" width={20} height={20}/>
                <p className="text-[14px]">
                    {transmission === 'a' ? 'Automatic' : 'Manual'}
                </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <Image src="/tire.svg" width={20} height={20}/>
                <p className="text-[14px]">
                    {drive.toUpperCase()}
                </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <Image src="/gas.svg" width={20} height={20}/>
                <p className="text-[14px]">
                    {city_mpg}
                </p>
            </div>
        </div>
        <div className="car-card__btn-container w-full">
            <CustomButton 
            title={"View More"}
            containerStyle="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles = "font-bold text-white text-[14px] leading-[17px]"
            rightIcon="/right-arrow.svg"
           handleClick={() => setIsOpen(true)}
            
            className="object-contain"
            />
        </div>
      </div>
      <CarModal isOpen={isOpen} closeModel={() => setIsOpen(false)} car={car}/>
    </div>
  );
}
