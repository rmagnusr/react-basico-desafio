import './sentence.css'
import React from 'react'

let text = 'Olá, eu sou o Renato Magnus.'
let textUC = text.toUpperCase();

let textP = 'Exercício de react'
let textPUC = textP.toUpperCase();




const Sentence = ({color}) => {
  return (
    <div className='paragrafo' 
    onClick={() => (color)} >
    <h3 style={{color: 'green'}} >{textUC} </h3> 
    <p>{textPUC}</p> 
    </div>
    
  )
}


export default Sentence
  