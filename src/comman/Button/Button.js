import './Button.css'
const Button=(props)=>{
    return(
        <div>
            <button className="bt-cal" onClick={props.btFun}>{props.btName}</button>
        </div>
    )
}
export default Button;