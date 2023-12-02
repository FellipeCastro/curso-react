import React from 'react';

import html from './img/html-5.jpg';
import css from './img/css-3.jpg';

export default function MudarImg(props) {

  return (
    <>
        <img style={{width: '100px'}} src={props.mudado ? css : html}/>
        <br/>
        <button onClick={() => props.setMudado(!props.mudado)}> 
            {props.mudado ? "Mudar para HTML" : "Mudar para CSS"} 
        </button>
    </>
  )
}