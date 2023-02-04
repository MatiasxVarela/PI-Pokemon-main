import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import pokeBall from "../../../img/Pokeball.png"
import { useNavigate } from "react-router-dom";


const StyledButton = styled.button`
   &::after {
        content: "";
        position: absolute;
        background-image: url("${pokeBall}");
        background-repeat: no-repeat;
        width: 36px;
        height: 36px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: transparent;
        transition: transform 0.55s linear;
        transform: translateX(${props => props.position}px);
    }
    border: 2px solid rgba(255, 215, 0, 0.83);
    background-color: rgba(76, 109, 242, 0.83);
    margin: 0px 0px 0px 10px;
    width: 68px;
    height: 32px;
    transition: 0.6s linear;
    border-radius: 45px;
    transform: translateX(0px) ;
    transition: transform 0.55s linear;
    filter: grayscale(${props => props.grayScale}%);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
    cursor: pointer;
`;

const StyledH4 = styled.h4`
   margin-top: 33px;
   font-family: 'OldPokemonFont';
`;

export default function SwitchButton(props) {
   const navigate = useNavigate()
   const [ position, setPosition] = useState(0)
   const [ grayScale, setGrayScale ] = useState(100)
   const click = props.click
   const active = props.active
   const tittle = props.tittle

   useEffect(() => {
      if(active === false){
         setPosition(0)
         setGrayScale(100)
      } else {
         setPosition(36)
         setGrayScale(0)
      }
   },[active])

   const handleOnClick = () => {
      if (position === 0){
         setPosition(position + 36)
         setGrayScale(grayScale - 100)
      } else {
         setPosition(position - 36)
         setGrayScale(grayScale + 100)
      }
      setTimeout(() => {
         navigate("/home/1")
         click();
         }, 275);
      
   }

    return (
       <>
       <StyledH4>{tittle}</StyledH4>
       <StyledButton 
         position={position} 
         grayScale={grayScale} 
         onClick={handleOnClick}>

         </StyledButton>
       </>
    );
 }