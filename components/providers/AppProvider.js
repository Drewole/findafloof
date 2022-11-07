import { createContext, useContext, useState } from 'react';

const AppContext = createContext({});

function AppProvider({ children, content, history, location }) {
  const [modal, setModal] = useState(false);
  const [animating, setAnimating] = useState(false);
  return (
    <AppContext.Provider
      value={{
        animating,
        setAnimating,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export default AppProvider;
