import { createContext, useContext, useState } from 'react';

import { usePrevious } from '../utils/hooks';
const AppContext = createContext({});

function AppProvider({ children, content, history, location }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <AppContext.Provider
      value={{
        modalOpen,
        setModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export default AppProvider;
