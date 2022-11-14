import React from 'react';
import Link from 'next/link';
import { FiArrowUp } from "react-icons/fi";

const ScrollButton = () => {

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };

    return (
        <button className="flex flex-col items-center" onClick={scrollToTop}>
            <FiArrowUp size={24}/>
            <h5 className="text-xs mt-1">back to top</h5>
        </button>
    );

}

export default ScrollButton;