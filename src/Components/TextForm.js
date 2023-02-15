import React,{useState} from "react";


export default function TextForm(props) {
  const[text,setText]=useState('A new text');

   const handleClick=()=>{
    setText(text.toUpperCase())
  }
  const handleOnChange=(event)=>{
    setText(event.target.value)
  }

  return (
    <div className="container">
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleClick}>Convert to upperCase</button>
      </div>
  );
}
