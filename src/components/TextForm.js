import './TextForm.css';
import React, { useState } from 'react'
import PropTypes from 'prop-types'
function TextForm(props) {
  const[text, setText] = useState('Enter Text Here');
  const handleUpclick = ()=>{
    // console.log("Uppercase was clicked");
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase","success")
  }
  const handleLoclick = ()=>{
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase","success")
  }
  const handleClearclick = ()=>{
    setText("");
    props.showAlert("Textarea Cleared","success")
  }
  const handleCopyclick = ()=>{
    // console.log(text)
    navigator.clipboard.writeText(text)
    props.showAlert("Textarea Copied","success")
  }
  const handleonchange = (event)=>{
    // console.log("Value is changed");
    setText(event.target.value);
  }
  return (
    <>
    <div className='maintextform'>
      <h1 style={{color: props.mode==='light'?'black':'#61dbfb'}}>{props.heading}</h1>
      <div className='ta'>
      <textarea className='textarea' cols="180" rows="10" value={text} onChange={handleonchange}></textarea>
      </div>
      {/* style={{color: props.mode==='dark'?'black':'#61dbfb',backgroundColor: props.mode==='dark'?'#61dbfb':'black'}} onMouseEnter={() =>{color: props.mode==='dark'?'#61dbfb':'black';backgroundColor: props.mode==='dark'?'black':'#61dbfb'}} */}
      <button className='btn-submit' onClick={handleUpclick} id='uppertag'>Convert To UpperCase</button> 
      <button className='btn-submit' onClick={handleLoclick}>Convert To LowerCase</button>
      <button className='btn-submit' onClick={handleClearclick}>Clear Text</button>
      <button className='btn-submit' onClick={handleCopyclick}>Copy Text</button>
    </div>
    <div className="container">
      <h1 style={{color: props.mode==='light'?'black':'#61dbfb'}}>Your Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to Read</p>
      <h2 style={{color: props.mode==='light'?'black':'#61dbfb'}}>Preview</h2>
      <p>{text}</p>
    </div>
    </>
 );
}

TextForm.propTypes={
  heading: PropTypes.string.isRequired
}

TextForm.defaultProps={
  title: 'Enter Your Task That Will Be Performed'
}
export default TextForm;