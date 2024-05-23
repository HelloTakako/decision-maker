'use client';

import { useState } from "react";
import Link from "next/link";
import { useValue } from "./context/valueContext";

export default function Form() {
  const { values, setValues } = useValue();
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== '') {
        setValues([...values, value]);
        setValue('');
    }
  };

  return (
    <>
      <div className="wrapper">
        <p className="text-center text-[14px] mb-[40px]">Add more than 2 important things for you.</p>
        <form onSubmit={handleSubmit} className="mb-8">
          <input className="w-full text-[18px] border-b-[1px] border-[#ccc] p-2 mb-4 text-center" type="text" value={value} onChange={e => setValue(e.target.value)} />
          <button className="text-center block w-[100px] mx-auto rounded-md py-1 border-[1px] border-[#ccc] " type="submit">Add</button>
        </form>

        <ul className="flex gap-x-3 gap-y-2 mb-[80px] w-full flex-wrap">
            {values.map((value, index) => (
                <li key={index} className="text-[14px] font-[400] italic">{value}</li>
            ))}
        </ul>

        {values.length >= 2 ? 
        (
          <Link href="/decision" className="button">
            Make a decision
          </Link>
        )
        :
          (
            <p className="opacity-70 text-center block w-full mx-auto bg-[#aaa] text-[20px] font-[600] rounded-md p-2 text-white">
              Make a decision
            </p>
          )
        }
        
      </div>
    </>
  );
}
