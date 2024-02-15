import { useState } from 'react'
import Header from './Header'
import Body from './Body'
import Menu from './Menu'
import Controls from './Controls'
import GameCards from './GameCards'
import BetFund from './BetFund'
export default function App(){
 const [hide,setHide]=useState({
  hideGamePart:true,
  hideGameCard:true,
  hideFund:false
 })
 function handleDisplay(){
  setHide({
    ...hide,
    hideGamePart:false,
  })
 }
 function handleDisplayCard(){
  setHide({
    ...hide,
    hideGameCard:false,
    hideFund:true
  })
 }

  return(
    <div>
      <Header/>
      <Body>
        <Menu/>
       <Controls hidden={hide} handleClick={handleDisplay} onCardDisplay={handleDisplayCard}/>
       {!hide.hideGameCard && <GameCards/>} 
       {!hide.hideGamePart &&  <BetFund animate={hide}/>}   
      </Body>
    </div>
  )
}