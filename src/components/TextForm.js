import React,{ useState } from "react";

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleClearClick = ()=>{
        setText("");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className="container" style={{color:props.mode === 'dark'? 'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">    
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          style={{backgroundColor: props.mode === 'dark'? 'grey' : 'white', color: props.mode==='dark' ? 'white':'black'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode === 'dark'? 'white':'black'}}>
        <h2>Text Summary</h2>
        <p>{text.split(' ').length} words and {text.length} characters and {text.split('.').length} Sentences and {text.split('').length} paragraph</p>
        <p>{0.008 * text.split(' ').length} Minutes Read</p>
        <p>{0.008 * text.length} seconds</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
