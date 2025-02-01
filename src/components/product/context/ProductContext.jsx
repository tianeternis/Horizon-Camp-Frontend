import { createContext, useContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ value, children }) => {
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
