import Button from "../Button/Button";
import './CalWrapper.css'
const CalWrapper=(props)=>{
    const allButton = props.allBtArr.map((btObj)=>{
        return <Button key={btObj.value} btName={btObj.value} btFun={btObj.btFun}/>
    })
    const alloperator = props.operatorArr.map((btObj)=>{
        return <Button key={btObj.value} btName={btObj.value} btFun={btObj.btFun}/>
    })
    // console.log("allButton",allButton);
    
    return(
        <div className="main-cal">
            <div  className="bt-name" >{allButton}</div>
           <div  className="op-cal"> {alloperator}</div>
        </div>
    )
}
export default CalWrapper;