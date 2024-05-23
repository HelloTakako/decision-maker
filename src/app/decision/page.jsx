'use client';

import Link from "next/link";
import { useValue } from "../_components/context/valueContext";
import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

export default function DecisionMaking() {
  const { values, setValues } = useValue();
  const [ options, setOptions ] = useState(null);

  const pickTwoRandomValues = (arr) => {
    if(arr.length < 2) {
        return 'The array needs to have at least 2 elements';
    }
    
    const shuffledArray = arr.sort(() => 0.5 - Math.random());
    const selectedItems = shuffledArray.slice(0, 2);
    return selectedItems;
  }

  useEffect(()=>{
    setOptions(pickTwoRandomValues(values))
  }, [])

  useEffect(()=>{
    setOptions(pickTwoRandomValues(values))
  }, [values])

  const handleSelectOption = (optionIndexToRemove) => {
    if(options) {
      const index = values.indexOf(options[optionIndexToRemove]);
      const newArray = [...values]; // making a copy of the array
  
      if (index !== -1) {
          newArray.splice(index, 1);
      }
      
      setValues(newArray);
    }
  }

  return (
    <main className="p-5">
        <div className="wrapper">
          {values.length > 1 ?
          (
            <>
              <p className="mt-20 mb-8 text-center">Which is important for you?</p>
              {options && (
                <>
                  <div className="flex flex-col items-center gap-6 mb-10">
                    <div className="button" onClick={() => handleSelectOption(1)}>{options[0]}</div>
                    <div className="button" onClick={() => handleSelectOption(0)}>{options[1]}</div>
                  </div>
                  <p className="text-center text-[14px]">Choices left: {values.length}</p>
                </>
              )}
            </>
          ):(
            <>
              <p className="mt-20 mb-8 text-center">your most important thing is</p>
              <p className="text-center font-[800] text-[30px] mb-6">{values[0]}</p>
              <FaHeart size={28} className="mx-auto"/>
            </>
          )}
            

            <Link href="/" className="block mt-auto underline cursor-pointer text-center">
              Home
            </Link>
        </div>
    </main>
  );
}
