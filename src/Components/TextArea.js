import React,{useState} from 'react'  //{useState} is hook in react for function based
// import propType from 'prop-types'
export default function TextArea(props){

    const[text,setText]=useState("Enter text here");
    //text="jainam bheda" //wrong way to change state
    // setText("Jainam")       //correct way to change state

    const handleUpClick=()=>{
        console.log("Uppercase was clicked");
        setText(text.toUpperCase());
    }
    const handleLoClick=()=>{
        console.log("Lowercase was clicked");
        setText(text.toLowerCase());
    }
     const handleOnchange=(event)=>{
        console.log("handle on change");
        setText(event.target.value) //using this we can type is text area
    }
    const handleCopyClick=()=>{
        // setText.select();
        // setText.setSelectionRange(0,99999);
        navigator.clipboard.writeText(text);
        alert("Text copie :" + text)
    }
    let isspeaking=true
    const texttospeech=()=>{
        const synthesis=window.speechSynthesis;
        // const text=text;
        if(!synthesis.speaking && text){
        const utternace=new SpeechSynthesisUtterance(text);
        synthesis.speak(utternace);
        }
    
        if(text.length > 50){
            if(synthesis.speaking && isspeaking){
                synthesis.resume();
                isspeaking=false;
            }
            else{
                // button.innerText="Resume to Play"
                synthesis.pause();
                isspeaking=true;
            }
        }
        else{
            isspeaking=false;
            // button.innerText="Convert to Speech"
        }
        setInterval(()=>{
            if(!synthesis.speaking && !isspeaking){
                // button.innerText="Convert to Speech"
                // synthesis.pause();
                isspeaking=true;
            }
        })
    }

    return(
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>{props.heading} </h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="9" style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} ></textarea>
        </div>   
        <p>Click below Button to convert</p>
        <button className="btn btn-success mx-2" onClick={handleUpClick} >Uppercase</button>
        <button className="btn btn-warning mx-2" onClick={handleLoClick} >Lowercase</button>
        <button className="btn btn-success mx-2" onClick={handleCopyClick} >Copy</button>
        <button className="btn btn-warning mx-2" onClick={texttospeech} >Listen</button>
        </div>
        <div className="container my-5">
            <h5>Your Text Summary</h5>
            <h3>{text.split(" ").length} words and {text.length} characters</h3>
            {/* <h3>{0.008*text.split(" ").length} minutes to read above sentences</h3> */ }
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
