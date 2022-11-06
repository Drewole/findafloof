import React, { useEffect } from 'react';

import store from 'store/dist/store.modern.min';
import { Trash } from 'react-bootstrap-icons';

export default function DeleteModal({ deleteAllFavs }) {
  const deleteAndClose = () => {
    deleteAllFavs();
    // need to add a close function and import content from state.

    return (
      <>
        <button className="button" onClick={onOpen}>
          <Trash /> &nbsp;Remove All
        </button>

        <div className="modal" onClose={onClose} isOpen={isOpen} isCentered>
          <div className="scrim" />
          <div className="modal-content">
            <h2>Remove All Favorites?</h2>
            <p>Are you sure you want to remove all favorites?</p>
            <div className="button-wrap">
              <button className="delete-all" onClick={deleteAndClose}>
                <Trash color="white" />
                &nbsp; Remove All
              </button>
              <button onClick={onClose}> No Thanks</button>
            </div>
          </div>
        </div>
      </>
    );
  };
}
