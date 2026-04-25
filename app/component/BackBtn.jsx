"use client"
import React from 'react'
import { MoveLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import useTheme from "../context/useTheme";
function BackBtn() {
  const {theme} = useTheme();
  const router = useRouter();
  const handlerBack = () =>{
    if(window.history.length > 1){
        router.back();
    }else{
        router.push("/");
    }
  }
  return (
   
        <button onClick={handlerBack} className={`flex gap-2 cursor-pointer px-3! py-1.5! border ${theme === "light" ? "border-[#ccc] bg-white hover:bg-gray-100" : "bg-[#2b3945] text-white border-[#ccc]"} shadow-sm hover:shadow-md   rounded-md  transition`}><MoveLeft className='w-4!'/>Back</button>

  )
}

export default BackBtn