import { createContext, useContext, useState } from 'react';
import Modal from '../library/Modal';

const ModalContext = createContext({});

ModalProvider.propTypes = {
  children: PropTypes.node,
};

export function ModalProvider({ children }) {
  const [visible, setVisibility] = useState();
  const [modalChildren, setChildren] = useState(null);

  const openModal = (node) => {
    setVisibility(true);
    setChildren(node);
  };

  function closeModal() {
    setVisibility(null);
    setChildren(null);
  }

  return (
    <ModalContext.Provider
      value={{
        visible,
        openModal,
        closeModal,
      }}
    >
      <Modal visible={visible} close={closeModal} children={modalChildren} />
      {children}
    </ModalContext.Provider>
  );
}

export default function useModalContext() {
  return useContext(ModalContext);
}
