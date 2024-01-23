import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () =>{
        // console.log("UpperCase was clicked" + text);
        // let newText = text.toLowerCase();
        let newText2 = text.toLowerCase();
        setText(newText2);
    }
    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter the Text');
  return (
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value = {text} onChange = {handleOnChange}id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>ConvertUpperCase</button>
        <button className="btn btn-primary" onClick={handleLowClick}>ConvertLowerCase</button>
    </div>
  )
}
