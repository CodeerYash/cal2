import { useState } from "react";
import CalWrapper from "../CalWrapper/CalWrapper";
import './Cal.css'

const Cal=()=>{
    const [inputValue,setInputValue]= useState(0)
    const [currentOperation,setCurretOperation]= useState('')
    const [operationValue,setOperationValue] = useState('')
    const allBtArr =[
        {
            value:0, 
            btFun:()=>{
            setInputValue((preValue)=>parseInt(inputValue.toString()+0))}},
        {
            value:1, 
            btFun:()=>{
            setInputValue((preValue)=>parseInt(inputValue.toString()+1))}},
        {
            value:2, 
            btFun:()=>{
            setInputValue((preValue)=>parseInt(inputValue.toString()+2))}},
        {
            value:3, 
            btFun:()=>{
            setInputValue((preValue)=>parseInt(inputValue.toString()+3))}},
        {
            value:4, 
            btFun:()=>{
            setInputValue((preValue)=>parseInt(inputValue.toString()+4))}},
        {
            value:5, 
            btFun:()=>{
            setInputValue((preValue)=>parseInt(inputValue.toString()+5))}},
        {
            value:6, 
            btFun:()=>{
            setInputValue((preValue)=>parseInt(inputValue.toString()+6))}},
        {
            value:7, 
            btFun:()=>{
            setInputValue((preValue)=>parseInt(inputValue.toString()+7))}},
        {
            value:8, 
            btFun:()=>{
            setInputValue((preValue)=>parseInt(inputValue.toString()+8))}},
        {
            value:9, 
            btFun:()=>{
            setInputValue((preValue)=>parseInt(inputValue.toString()+9))}},
        {
            value:"00", 
            btFun:()=>{
            setInputValue((preValue)=>parseInt(inputValue.toString()+"00"))}},
                
                            
    ];

    const operatorArr =[
        {
            value:'+', 
            btFun:()=>{
                setCurretOperation('+')
                setOperationValue(inputValue)
                setInputValue(0)
            }},
        {
            value:'-', 
            btFun:()=>{
                setCurretOperation('-')
                setOperationValue(inputValue)
                setInputValue(0)
                }},
        {
            value:'*', 
            btFun:()=>{
                setCurretOperation('*')
                setOperationValue(inputValue)
                setInputValue(0)
                }},
        {
            value:'/', 
            btFun:()=>{
                setCurretOperation('/')
                setOperationValue(inputValue)
                setInputValue(0)
                }},
                {
                    value:'Del', 
                    btFun:()=>{
                        setCurretOperation(0)
                        setOperationValue(0)
                        setInputValue(0)
                        }},
        {
            value:'=', 
            btFun:()=>{
                setCurretOperation(currentOperation + inputValue + "=")
                setInputValue((preValue)=>{
                if(currentOperation==="+"){
                    return preValue + operationValue;
                }
                else if(currentOperation ==="-"){
                        return operationValue - preValue;
                }
                else if(currentOperation ==="*"){
                        return operationValue * preValue;
                }
                else if(currentOperation ==="/"){
                        return operationValue / preValue;
                }
                else if(currentOperation ==="Del"){
                        return 0;
                }else if(currentOperation ==="="){
                    return eval(inputValue)
                }
                
                })
                }},
    ]
    return(
        <div className="cal-main">
           <div className="display">
           <p>{operationValue}{currentOperation}</p>
           <p>{inputValue}</p>
           </div>
            <CalWrapper allBtArr={allBtArr} operatorArr={operatorArr}/>
        </div>
    )
}
export default Cal;