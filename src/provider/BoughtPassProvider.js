import { createContext, useContext, useState } from "react";

const BoughtPassContext = createContext();

export const BoughtPassProvider = ({ children }) => {
  const [boughtPass, setBoughtPass] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const setPass = (pass, qty) => {
    setBoughtPass((prevPasses) => [...prevPasses, { pass, qty }]);
  };

  return (
    <BoughtPassContext.Provider value={{ boughtPass, quantity, setPass }}>
      {children}
    </BoughtPassContext.Provider>
  );
};

export const useBoughtPass = () => {
  const context = useContext(BoughtPassContext);
  if (!context) {
    throw new Error("useBoughtPass must be used within a BoughtPassProvider");
  }
  return context;
};
