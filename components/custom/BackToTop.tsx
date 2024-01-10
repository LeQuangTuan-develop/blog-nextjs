'use client'

import ChevronDoubleUp from "@components/icon/ChevronDoubleUp"
import { useEffect, useRef, useState } from "react";

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

const BackToTop = () => {
  
  const [isVisible, setIsVisible] = useState(false); 
  const ref = useRef(null); 
  
  useEffect(() => { 
    const onWindScroll = () => { 
      const element = ref.current; 
      if (element) { 
        const isVisible = window.pageYOffset > 450; 
        setIsVisible(isVisible); 
      } 
    }

    window.addEventListener("scroll", onWindScroll); 
    return () => { 
      window.removeEventListener("scroll", onWindScroll); 
    }
  }, [])

  const classes = `transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button className={`fixed bottom-6 right-3 lg:bottom-5 lg:right-5 p-1 rounded-md bg-slate-200 z-20 dark:text-gray-700 ${classes}`} ref={ref} onClick={scrollToTop}>
      <ChevronDoubleUp />
    </button>
  )
}

export default BackToTop