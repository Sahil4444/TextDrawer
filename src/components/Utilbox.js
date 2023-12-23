import React, { useState } from "react";
export default function Utilbox(props) {
  let [Text, SetText] = useState("Enter text here...");

  let funUpper = () => {
    let nText = Text.toUpperCase();
    SetText(nText);
  };

  let funLower = () => {
    let nText = Text.toLowerCase();
    SetText(nText);
  };

  let funCap = () => {
    let nText = Text.charAt(0).toUpperCase();
    let oldText = Text.substring(1, Text.length);
    SetText(nText + oldText);
  };

  let funClear = () => {
    SetText("");
  };

  let funChange = (event) => {
    console.log(event.target.value);
    SetText(event.target.value);
  };

  let wordCount = 0;
  if (Text === "") {
    wordCount = 0;
  } else {
    wordCount = Text.split(" ").length;
  }

  return (
    <div>
      <div className="mt-5 mb-4 container" >
        <div className="my-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            onChange={funChange}
            value={Text}
            style={{backgroundColor: props.mode === 'dark'?'#2E2E2E': 'white', color: props.mode === 'dark'?'white': 'black'}}
          ></textarea>
        </div>
        <div id="btnsfun" className="my-3">
          <div className="d-grid gap-2 d-md-block">
            <button
              type="button"
              className="btn btn-outline-primary me-3"
              onClick={funUpper}
            >
              UPPERCASE
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary me-3"
              onClick={funLower}
            >
              lowercase
            </button>
            <button
              type="button"
              className="btn btn-outline-success me-3"
              onClick={funCap}
            >
              Capitalize
            </button>
            <button
              type="button"
              className="btn btn-outline-danger me-3"
              onClick={funClear}
            >
              Clear
            </button>
            {/* <button type="button" className="btn btn-outline-warning me-3">
              Warning
            </button>
            <button type="button" className="btn btn-outline-info me-3">
              Info
            </button> */}
            <button type="button" className="btn btn-outline-dark">
              Word Count
            </button>
          </div>
        </div>
        <div className="mt-5">
          <div className="card" style={{backgroundColor: props.mode === 'dark'?'#2E2E2E': 'white', color: props.mode === 'dark'?'white': 'black'}}>
            <div className="card-header">Word Count & Preview</div>
            <div className="card-body">
              <h5 className="card-title">Word Count</h5>
              <p className="card-text">
                There are total {Text.length} characters and {wordCount} words
              </p>
              <h5 className="card-title">Preview</h5>
              <p className="card-text">{Text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
