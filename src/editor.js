import React, { useState } from "react";
import { Controlled } from "react-codemirror2";
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { CgArrowsExpandRight,CgCompressRight } from 'react-icons/cg';
export default function Component (props){ 
  const [Open,setOpen]=useState(true);
    const codeMirrorOptions = {
      theme: "material",
      lineNumbers:true,
      lineWrapping: true,
      lint: true
    };
    
    return(
    <div className={!Open?'editorcollapsed':'editor'}>
      <div className="editor-title">
      <h1 style={
       {
        fontSize:"3vw",
       }      
    }>
      {props.title}</h1>
      <button onClick={()=>{
         setOpen(!Open);
      }}>{Open?<CgCompressRight/> :<CgArrowsExpandRight/>}</button>

      </div>
   
    <div className="Editor">
   <Controlled 
   className="code-mirror-wrapper"
   value={props.value}
   onBeforeChange={
        (editor,data,code)=>{
           props.handlechange(editor,data,code)
        }
  }
 options={
   {
     mode:props.mode,
     ...codeMirrorOptions
   }
 }
/>
 </div>
</div>
    )

}


