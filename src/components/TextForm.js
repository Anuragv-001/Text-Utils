import React, {useState}from 'react'

export default function TextForm(props) {
    const handleUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLoclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }
    const handlespaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handlecleartext = () => {
        let newText = ('');
        setText(newText);
        props.showAlert("Text Cleared", "success");

    }
    const handlecopy = () => {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard", "success");
    }
    const handleduplicatewords = () => {
        const words = text.split(" ");
        const uniqueWords = [...new Set(words)];
        setText(uniqueWords.join(" "));
        props.showAlert("Removed duplicate words", "success");
    }
    const handleOnChange = () => {
        setText(event.target.value);
    }
    // react hooks to handle the state 
    const [text, setText] = useState('Enter the text here...');
  return (
    <>
    <div className = "Container" style = {{color: props.mode == 'dark' ? 'white' : '#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="mybox" rows="8" value = {text} style = {{backgroundColor: props.mode == 'dark' ? '#134662' : 'white', color: props.mode == 'dark' ? 'white' : '#042743'}} onChange = {handleOnChange}></textarea>
        </div>
        <button disabled = {text.length == 0} className="btn btn-primary mx-2 my-1" onClick = {handleUpclick}>Convert to UpperCase</button>
        <button disabled = {text.length == 0} className="btn btn-primary mx-2 my-1" onClick = {handleLoclick}>Convert to LowerCase</button>
        <button disabled = {text.length == 0} className="btn btn-danger mx-2 my-1" onClick = {handlecleartext}>Clear Text</button>
        <button disabled = {text.length == 0} className="btn btn-primary mx-2 my-1" onClick = {handleduplicatewords}>Remove Duplicate words</button>
        <button disabled = {text.length == 0} className="btn btn-primary mx-2 my-1" onClick = {handlecopy}>Copy Text</button>
        <button disabled = {text.length == 0} className="btn btn-primary mx-2 my-1" onClick = {handlespaces}>Remove extra spaces</button>
    </div>
    <div className="container my-3" style = {{color: props.mode == 'light' ? '#042743' : 'white'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} Characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read this </p>
        <h2>Preview what you have written</h2>
        <p>{text.length>0 ? text : "Nothing to preview!!"}</p>
    </div>
    </>
  )
}
