// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import './App.scss';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import Editor  from "./editor";
import usinglocalstorage from "./localstorage";
import { BiCodeAlt } from 'react-icons/bi';

function App (){
  const [Html,setHtml]=usinglocalstorage('html','');
  const [Css,setCss]=usinglocalstorage('css','');
  const [Js,setJs]=usinglocalstorage('js','');
  const [OurDoc,setDoc]=useState('');
  useEffect(()=>{
       setTimeout(()=> {
          setDoc(
            `
            <html>
             <body>
              ${Html}
             </body>
             <style>${Css}</style>
             <script>${Js}</script>
            </html>
            `
          )
      }, 250);
  },[Html,Css,Js]);

  function handlecsschange(editor,body,data){
    setCss(data);
 };

  function handlehtmlchange(editor,body,data){
     setHtml(data);
};
 function handlejschange(editor,body,data){
    setJs(data);
};
  
   
  return (
    
       <div>
         <div className="start">
         < BiCodeAlt size="3em" />
         <div>
         <h1>Code Editor</h1>
         </div>
       
         </div>
          
             <div className="flex-container">
              
                  < Editor className= "box-container" title="HTML" mode="xml" handlechange={handlehtmlchange} value={Html}/>
                 <  Editor className=  "box-container" title="CSS" mode="css" handlechange={handlecsschange} value={Css}/>
                 <  Editor className=  "box-container" title="JS" mode="javascript" handlechange={handlejschange} value={Js}/> 
  
             </div>

              <iframe
              className="Web"
              title="Website" 
              srcDoc= {OurDoc}
                >
              </iframe>
     </div>
  );

}

 export default App;
