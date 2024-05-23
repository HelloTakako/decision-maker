'use client';

import { useState } from "react";
import { useValue } from "./context/valueContext";

export default function Form() {
  const { values, setValues } = useValue();
  // const [values, setValues] = useState([]);
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
      <div className="bg-white p-4 shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-md h-[95vh] flex flex-col">
        <form onSubmit={handleSubmit} className="mb-8">
          <input className="w-full text-[18px] border-b-[1px] border-[#ccc] p-2 mb-4 text-center" type="text" placeholder="Type what's important for you." value={value} onChange={e => setValue(e.target.value)} />
          <button className="text-center block w-[100px] mx-auto rounded-md py-1 border-[1px] border-[#ccc] " type="submit">Add</button>
        </form>

        <ul className="flex gap-3 mb-[80px]">
            {values.map((value, index) => (
                <li key={index} className="text-[14px] font-[400] italic">{value}</li>
            ))}
        </ul>

        <button className="text-center block w-full mx-auto bg-[#6895e4] text-[20px] font-[600] rounded-md p-2 text-white">Make a decision</button>
      </div>
    </>
  );
}
