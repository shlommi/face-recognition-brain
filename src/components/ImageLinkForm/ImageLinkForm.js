import React from "react";
import "./ImageLinkForm.css";
import Logo from '../Logo/Logo';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div >
      <div className="header-wrapper" >
      <Logo />
      <header >
        <h2 >Hi, </h2>
        <h2 >I'm ROBO-FD20</h2>
        <h2 >I detect faces in your pictures.</h2>
        <h3 >You only need to copy and paste the URL of the image</h3>
      </header>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/></svg>
      <div className="center">
        <div className="center pa4 br3 shadow-5 form">
          <input
            onChange={onInputChange}
            type="text"
            className="f4 pa2 w-70 center"
          />
          <button
            onClick={onButtonSubmit}
          >
            DETECT
          </button>
        </div>
      </div>
    </div>
  );
};
export default ImageLinkForm;
