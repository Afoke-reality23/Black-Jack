import ButtonData from "./ButtonData"
import { useState } from "react"
export default function BetFund(props){
const [position,setPosition]=useState(
  {
    pos:-1
  }
)
    const button=ButtonData.map(data=>{
        return(
            <div key={data.value} className={data.buttonClass} style={{
                background:data.btnBackground
            }}>
                <div className={data.border} style={{
                    border:data.borderBg
                }}>
                    <button style={{background:data.buttonBg}}>{data.value}</button>
                </div>
            </div>
        )
    })
    function handleClick(index){
      setPosition({
        ...position,
        pos:index
      })
      console.log(position)
      console.log(index)
    }
const button1Array=new Array(2).fill(button[0])
const button1=button1Array.map((sti,index)=>{
  return(
<div key={index} onClick={()=>handleClick(index)} className={position.pos !== index ? `coin` : `coin animate-coin`}>{sti}</div>
  )
})
    return(
        <div className={!props.animate.hideFund ? 'bet' : `bet animate-fund`}>
            <div className="fund">
                <h4>Bank:$900</h4>
                <button>ALL IN</button>
            </div>
            <div className="stake">
            <ul>  
              {button1}
            </ul>
            </div>
        </div>
    )
}