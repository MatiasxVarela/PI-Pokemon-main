import { useState } from "react";
import FormButton from "./FormButton";
import styled from "styled-components";

const StyledRange = styled.input`
    -webkit-appearance: none;
    margin-bottom: 35px;
    background-color: rgba(76, 109, 242, 0.83);
    border: 2px solid rgba(255, 215, 0, 1);
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
    width: 40%;
    height: 8px;
    border-radius: 8px;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 25px;
      width: 25px;
      border-radius: 50%;
      background-color: rgba(255, 215, 0, 1);
      border: 3px solid rgba(76, 109, 242, 1);
      box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
      cursor: pointer;
    }
  `;

const StyledButtonDiv = styled.div`
    margin-top: auto;
`;

const StyledH1 = styled.h1`
     font-family: 'OldPokemonFont';
     margin-bottom: 30px;
`;

const StyledH3 = styled.h3`
     font-family: 'OldPokemonFont';
`;

export default function RangesForms(props) {
    const prevData = props.prevData
    const formComplete = props.formComplete
    const setFormComplete = props.setFormComplete
    const formInfo = props.formInfo
    const actualData = props.actualData
    const setValues = props.setValues
    const formTittle = props.formTittle
    const [firstInput, setFirstInput] = useState(125);
    const [secondInput, setSecondInput] = useState(125);
    const [thirdInput, setThirdInput] = useState(125);

    const handleFirstInputChange = (event) => {
        setFirstInput(event.target.value);
    };

    const handleSecondInputChange = (event) => {
        setSecondInput(event.target.value);
    };

    const handleThirdInputChange = (event) => {
        setThirdInput(event.target.value);
    };

    const nextOnClick = () => {
        setFormComplete({
            ...formComplete, 
            [actualData[0].toLowerCase()]: true, 
            [actualData[1].toLowerCase()]: true,
            [actualData[2].toLowerCase()]: true
        });
        setValues({
            ...formInfo, 
            [actualData[0].toLowerCase()]: firstInput, 
            [actualData[1].toLowerCase()]: secondInput, 
            [actualData[2].toLowerCase()]: thirdInput
        })
    }

    const backOnClick = () => {
        prevData.forEach(element => {
            formComplete[element.toLowerCase()] = false
        });
        setFormComplete({...formComplete})
    }

    return (
    <>
        <StyledH1>{formTittle}</StyledH1>
        <StyledH3>{`${[actualData[0]]}: ${firstInput}`}</StyledH3>
        <StyledRange min="1" max="250" type="range" value={firstInput} onChange={handleFirstInputChange}></StyledRange>
        <StyledH3>{`${[actualData[1]]}: ${secondInput}`}</StyledH3>
        <StyledRange min="1" max="250" type="range" value={secondInput} onChange={handleSecondInputChange}></StyledRange>
        <StyledH3>{`${[actualData[2]]}: ${thirdInput}`}</StyledH3>
        <StyledRange min="1" max="250" type="range" value={thirdInput} onChange={handleThirdInputChange}></StyledRange>
        <StyledButtonDiv>
            <FormButton isActive={true} onClick={backOnClick} textButton="Back"/>
            <FormButton isActive={true} onClick={nextOnClick} textButton="Next"/>
        </StyledButtonDiv>
    </>
    );
 }