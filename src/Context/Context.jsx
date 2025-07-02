import { createContext, useState } from "react";
import main from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) =>{
    // ?create state variable
    const [input,setInput] = useState("");
    const [recentPrompt,setRecentPrompt] = useState("");
    const [prevPrompt,setPrevoPrompt] = useState([]);
    const [showResult,setShowResult] = useState(false);
    const [loading,setLoading] = useState(false);
    const [recentData,setRecentData] = useState("");


    const dealyPara = (index,nextWord)=>{

        setTimeout(function(){
            setRecentData(prev =>prev+nextWord);
        }, 75*index);
    }

    const newChat = ()=>{
        setLoading(false)
        setShowResult(false)
    }

const onSent = async (prompt)=>{
    setRecentData("");
    setLoading(true);
    setShowResult(true);
    let response;
    if(prompt !== undefined){
        response = await main(input)
        setRecentPrompt(prompt)
    }else{
        setPrevoPrompt(prev=>[...prev,input])
        setRecentPrompt(input)
        response = await main(input)
    }
    setRecentPrompt(input)

    setPrevoPrompt(prev =>[...prev,input])

   
   
   let responseArray = response.split("**");
   let newResponse = '';
   for(let i = 0;i<responseArray.length;i++){
        if(i === 0 || i%2 !== 1){
            newResponse += responseArray[i];
        }else{
            newResponse+= "<b>" +responseArray[i] +"</b>"
        }
   }
   let newResponse2 = newResponse.split("*").join("</br>")

//    setRecentData(newResponse2);
    let newResponseArrray = newResponse2.split(" ");
    for (let i = 0; i < newResponseArrray.length; i++) {
        const nextWord = newResponseArrray[i];
        dealyPara(i,nextWord+" ");
    }
   setLoading(false);
   setInput("");

}
// onSent('hello waht is react')

    const contexValue = {
        prevPrompt,
        setPrevoPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        recentData,
        input,
        setInput,
        newChat
    }
    return (
        <Context.Provider value={contexValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;