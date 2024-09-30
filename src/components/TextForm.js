import React, { useState } from 'react';

export default function TextForm(props) {
    const [Text, setText] = useState("Enter text here!!");


    const handleupclick = ()=>{
        console.log("handleupclick button was clicked!  " + Text);
        let newText = Text.toUpperCase();
        setText(newText);
        props.showAlert("Text has successfully converted to UpperCase","success")
    }


    const handleloclick = ()=>{
        console.log("handleloclick button was clicked!  " + Text);
        let newText = Text.toLowerCase();
        setText(newText);
        props.showAlert("Text has successfully converted to LowerCase","success")

    }

    const handleonchange = (event) =>{
        console.log("on change");
        setText(event.target.value);

    }

    const handeclclick = (event) =>{
        let clearText = "";
       setText(clearText);
       props.showAlert("Text cleared successfully","success")


    }

    const Removespace = ()=>{
      let splittedtext = Text.split(/[ ]+/);
      setText(splittedtext.join(" "))
      props.showAlert("Extra spaces removed successfully","success")


    }

    const handlecopy = () =>{
        let copybtn = document.getElementById("mybox");
        copybtn.select();
        navigator.clipboard.writeText(copybtn.value);
        props.showAlert("Text copied successfully","success")
    }

    return (
        <>
        <div>
            <h1 className={`text-${props.modes==="light"?"dark":"light"}`}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className= "form-control  text-dark" id="mybox" rows="8" value={Text}  onChange={handleonchange}
                form-floating-label-disabled-color="black"></textarea>
            </div> 
            <button disabled ={Text.length===0} className="btn btn-primary mx-2" onClick={handleupclick}>Convert to UpperCase</button>
            <button  disabled ={Text.length===0} className="btn btn-primary" onClick={handleloclick}>Convert to LowerCase</button>
            <button disabled ={Text.length===0} className="btn btn-primary mx-2" onClick={handeclclick}>Clear Text</button>
            <button disabled ={Text.length===0} className="btn btn-primary mx-2" onClick={handlecopy}>Copy Text</button>

            <button disabled ={Text.length===0} className="btn btn-primary mx-2" onClick={Removespace}>Remove Extra spaces</button>



        </div>

        <h1 className={`text-${props.modes==="light"?"dark":"light"}`}>Your Text Summary </h1>
        <p className={`text-${props.modes==="light"?"dark":"light"}`}>{Text.split(" ").filter((element)=>{return element.length!==0}).length} words and {Text.length} characters </p>
        <p className={`text-${props.modes==="light"?"dark":"light"}`}>Minutes to read : {0.008 * Text.split(" ").filter((element)=>{return element.length!==0}).length}</p>
        <h1 className={`text-${props.modes==="light"?"dark":"light"}`}>Preview</h1>
        <p className={`text-${props.modes==="light"?"dark":"light"}`}>{Text.length>0?Text:"Nothing to preview!!"}</p>
        </>
    )
}
