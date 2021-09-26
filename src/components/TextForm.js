import React, { useState } from "react";


export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('');

    const paraStyle = {
        color: props.mode === 'light' ? '#107896' : '#CCD1D1'
    }

    const buttonStyle = {
        color: props.mode === 'light' ? '#107896' : '#E5E8E8'
    }

    return (
        <>
            <div classname="container " style={{paddingTop: '65px'}}>
                <h5 className={`mb-4 text-${props.mode === 'light' ? 'muted' : 'light'} text-center`}>Enter Text Below</h5>
                <div className="mb-3 ">
                    <textarea className="form-control" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#95A5A6', borderColor: props.mode === 'light' ? '#107896' : '#CCD1D1', borderWidth: '2px' }} value={text} id="myBox" rows="8"></textarea>
                </div>
                <div className="container">
                <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'light' : 'dark'} mx-1 my-1`} onClick={handleUpClick} style={buttonStyle}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'light' : 'dark'} mx-1 my-1`} onClick={handleLoClick} style={buttonStyle}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'light' : 'dark'} mx-1 my-1`} onClick={handleClearClick} style={buttonStyle}>Clear Text</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'light' : 'dark'} mx-1 my-1`} onClick={handleCopy} style={buttonStyle}>Copy Text</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'light' : 'dark'} mx-1 my-1`} onClick={handleExtraSpaces} style={buttonStyle}>Remove Extra Spaces</button>
                </div>           
            </div>
            <div className="container my-3 text-center">
                <h3 className={`text-${props.mode === 'light' ? 'muted' : 'light'}`}>Your Text Summary</h3>
                <p style={paraStyle}>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p style={paraStyle}>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h3 className={`text-${props.mode === 'light' ? 'muted' : 'light'}`}>Preview</h3>
                <div className="container" style={{height: '220px', overflowX: 'scroll', overflowX:'hidden'}}>
                <p style={paraStyle}>{text.length > 0 ? text : "Nothing to preview!"}</p>
                </div>
            </div>
        </>
    )
}