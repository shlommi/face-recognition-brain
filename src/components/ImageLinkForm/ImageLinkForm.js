import React from "react";
import "./ImageLinkForm.css";
import Logo from '../Logo/Logo';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div >
      <Logo />
      <header className="tc pv4 pv5-ns">
        <h1 className="f5 f3-ns fw6 black-70">This Magic Brain will detect faces in your pictures.</h1>
        <h2 className="f5 black-70 fw2 ttu tracked">Give it a try.</h2>
      </header>
      <div className="center">
        <div className=" center pa4 br3 shadow-5 form">
          <input
            onChange={onInputChange}
            type="text"
            className="f4 pa2 w-70 center"
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};
export default ImageLinkForm;
