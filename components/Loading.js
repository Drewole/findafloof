import React from 'react';

const Loading = () => {
  return (
    <div className="loader_container">
      <div className="dog-svg">
        <img src="logoDog.svg" alt="" />
      </div>

      <div className="loader">
        <div className="paw">
          <img src="/paw.svg"></img>
        </div>
        <div className="paw">
          <img src="/paw.svg"></img>
        </div>
        <div className="paw">
          <img src="/paw.svg"></img>
        </div>
        <div className="paw">
          <img src="/paw.svg"></img>
        </div>
        <div className="paw">
          <img src="/paw.svg"></img>
        </div>
        <div className="paw">
          <img src="/paw.svg"></img>
        </div>
      </div>

      <h2>Finding Floofs...</h2>
    </div>
  );
};

export default Loading;
