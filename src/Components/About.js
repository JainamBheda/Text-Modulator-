import React,{useState} from "react";
export default function About(){
    const[mystyle,setmystyle]=useState({
        color: 'white',
        backgroundColor: 'black'
    })
    const[btntext,setbtntext]=useState("Dark Mode")
    let mystyle2={
        color: 'white',
        backgroundColor:'darkslategrey'
    }
     const toggle=()=>{
        if(mystyle.color==='white'){
            setmystyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setbtntext("dark mode")
        }
        else{
            setmystyle({
                color: 'white',
                backgroundColor: 'black'
            })
            
            setbtntext("Light mode")
        }
    }
    return(
        <>
        <div className="container" style={mystyle}>
                            <h1>About Us</h1>
                        <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={mystyle2}>
                        Features
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                    <div className="accordion-body" style={mystyle}>
                        <strong>A text modulator</strong>  text utility tool can provide a variety of features for manipulating and processing text. Here are some common functionalities that such a tool might include:
                        <br />
                        1. Text Transformation <br />
                        2. Text Analysis <br />
                        3. File Handling <br />
                        4. Listen Written Text

                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={mystyle2}>
                        Upcomming Features
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                    <div className="accordion-body" style={mystyle}>
                        <strong>In Comming Text Modulator we,</strong> String utilities enable operations like extracting substrings, finding and replacing specific phrases, and concatenating multiple strings. Regular expressions play a crucial role in pattern matching and validation tasks, such as checking the format of email addresses or phone numbers. Text comparison tools can highlight differences between two texts or measure their similarity. Localization and internationalization features may include translation services and text encoding conversions to support various languages and formats. Text generation functions, such as creating placeholder text (Lorem Ipsum) or generating random strings, are also common. Additionally, file handling capabilities allow the tool to read from and write to text files, as well as convert between different file formats. Overall, a text utility tool is a versatile asset for anyone dealing with text data, providing essential functions to streamline and enhance text manipulation and analysis.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree" style={mystyle2}>
                        Links
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                    <div className="accordion-body" style={mystyle}>
                         <code>https://github.com/JainamBheda</code>
                         <br />
                         <code>https://x.com/Jainam03121857</code>
                    </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
            <button type="button" className="btn btn-primary" onClick={toggle}>{btntext}</button>
            </div>
        </div>

        </>
    )
}