import React, { createContext, useContext } from 'react';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {

  return (
    <SessionContext.Provider value={{ }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  return useContext(SessionContext);
};
