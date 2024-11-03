'use client';
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  let router = useRouter()
  useEffect(()=>{
    if(!localStorage.getItem('token')){
        // router.push('/login')
    }
   
  })
  return (
    <>Board</>
  );
}
