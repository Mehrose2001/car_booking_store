"use client";

import React from "react";
import Link from "next/link";
// import Image from 'next/image'
import CustomButton from "./CustomButton";
import { useState } from "react";

export default function Navbar() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full relative z-10">
      {/* <nav className='mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <Link href="/" className='flex justify-center items-center'>
                <Image src="/logo.svg" alt="Car hub logo" width={118} height={18} 
                className="object-contain" >
                </Image>I
            </Link>
            <CustomButton
            title="Sign In"
            btnType="button"
            containerStyle="text-primary-blue rounded-full bg-white min-w-[130px]" />
        </nav> */}
      <nav className="flex items-center justify-between flex-wrap text-white p-2 h-30 bg-slate-200">
        <div className="flex items-center flex-shrink-0 text-white ">
          <img src="/logo.svg" className="w-40 h-20 mr-2" alt="Logo" />
        </div>
        <div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg className={`ml-20 fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="font-black text-lg lg:flex-grow text-end">
            <Link
              href="/home"
              className="hover:text-blue-900 hover:text-xl hover:underline block mt-4 lg:inline-block lg:mt-0 text-black mr-4"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-blue-900 hover:text-xl hover:underline block mt-4 lg:inline-block lg:mt-0 text-black mr-4"
            >
              About
            </Link>
            <a
              href="#"
              className="hover:text-blue-900 hover:text-xl hover:underline block mt-4 lg:inline-block lg:mt-0 text-black mr-4"
            >
              Contact
            </a>
            <a
              href="#"
              className="hover:text-blue-900 hover:text-xl hover:underline block mt-4 lg:inline-block lg:mt-0 text-black mr-4"
            >
              Registration
            </a>
          </div>
        </div>
        </div>
      </nav>
    </header>
  );
}
