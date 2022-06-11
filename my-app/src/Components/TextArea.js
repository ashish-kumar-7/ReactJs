import { useState } from "react";
import React from "react";

export default function TextArea(props) {
    const [text, setText] = useState("");

    const handleChange = function(event){
        setText(event.target.value);
    }

    const handleUpper = function(){
        setText(text.toUpperCase());
        props.display("success","Text is converted to Upper-Case");
    }
    const handleLower = function(){
        setText(text.toLowerCase());
        props.display("success","Text is converted to Lower-Case");
    }
    const handleClear = function(){
        setText("");
        props.display("success","Text is erased.");
    }
    const handleCopy = function(){
      navigator.clipboard.writeText(text);
      props.display("success","Text is copied to clipboard");
    }

    // const handleExtraSpaces = () => {
    //   let newText = text.split(/[ ]+/);
    //   setText(newText.join(" "));
    // }


  return (
    <>
      <div className="container" style={{color: props.theme==="dark" ? "white" : "black"}}>
          <h2 className="my-3 mb-3">Try TextUtils - Word Counter |  Character Counter </h2>
      <div className="form">
        <textarea
          className="form-control mb-3"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleChange}
          style={{backgroundColor: props.theme==="light" ? "white" : "#3a8095", color: props.theme==="light" ? "black" : "white"}}
        ></textarea>
        <label htmlFor="floatingTextarea"></label>
      </div>
      <button disabled={text==="" ? true:false} type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpper}>Convert to UpperCase</button>
      <button disabled={text==="" ? true:false} type="button" className="btn btn-primary mx-1 my-1" onClick={handleLower}>Convert to LowerCase</button>
      <button disabled={text==="" ? true:false} type="button" className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
      <button disabled={text==="" ? true:false} type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      </div>
      <div className={`container my-4 text-${props.theme==="light" ? "dark" : "light"}`}>
          <h4>Your Text Summary</h4>
          <p> {text.split(/\s+/).filter((sen) => {
            return sen!==""
          }).length} word and {text.length} characters</p>
          <h5>Preview</h5>
          <p>{text.length===0 ? 'Nothing to preview' : text}</p>
      </div>
    </>
  );
}
