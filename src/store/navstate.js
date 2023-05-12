import React, { createContext, useState } from 'react';

export const NavContext = createContext();

export const NavProvider = (props) => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <NavContext.Provider value={[activeNav, setActiveNav]}>
      {props.children}
    </NavContext.Provider>
  );
};

