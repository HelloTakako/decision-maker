'use client';

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

// Contextの作成
const ValueContext = createContext({
  values: [],
  setValues: () => {},
});

// Providerコンポーネントの作成
export const ValueProvider = ({ children }) => {
  const [values, setValues] = useState([]);

  return (
    <ValueContext.Provider value={{ values, setValues }}>
      {children}
    </ValueContext.Provider>
  );
};

// コンテキストを使用するためのカスタムフック
export const useValue = () => useContext(ValueContext);