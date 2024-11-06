import React, { useState } from 'react'

const TextForm = (props) => {
    const [text, setText] = useState("");
    let wordCounter = text.split(" ").length;
    let letterCounter = text.length;
    let timeToRead = ((0.25*wordCounter)/60).toFixed(2);
    
    const handleUpClick = () => {
        let uptext = text.toUpperCase();
        setText(uptext);
    }
    const handleLowClick = () => {
        let uptext = text.toLowerCase();
        setText(uptext);
    }
    const clearAll =()=>{
        setText('')
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
        
    } 

    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <textarea className="form-control"  onChange={handleOnChange} style={
                        { backgroundColor: `${props.mode==="light"? "white":"#454544"}`,
                          color:`${props.mode==="light"? "black":"white"}`
                        }
                    } value={text}  id="textBox" rows="12"></textarea>
                </div>
                <button className={`btn btn-${props.mode ==="light"?"dark":"light"} mb-3`} onClick={handleUpClick}>To UpperCase</button>
                <button className={`btn btn-${props.mode ==="light"?"dark":"light"} ms-2 mb-3`} onClick={handleLowClick}>To LowerCase</button>
                <button className="btn btn-primary ms-2 mb-3 " onClick={clearAll}>Clear All</button>

            </div>

            <div className="container">
                <p><b>Words: {wordCounter} &nbsp; | &nbsp; Letters: {letterCounter} &nbsp; | &nbsp; Time to Read : {timeToRead} mins</b></p>
            </div>
        </>
    )
}

export default TextForm

