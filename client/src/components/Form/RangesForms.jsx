import { useState } from "react";
import FormButton from "./FormButton";
import styled from "styled-components";

const StyledRange = styled.input`
    -webkit-appearance: none;
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

export default function RangesForms(props) {
    const formComplete = props.formComplete
    const setFormComplete = props.setFormComplete
    const formInfo = props.formInfo
    const actualData = props.actualData
    const setValues = props.setValues
    const formTittle = props.formTittle
    const [firstInput, setFirstInput] = useState(125);
    const [secondInput, setSecondInput] = useState(125);

    const handleFirstInputChange = (event) => {
        setFirstInput(event.target.value);
    };

    const handleSecondInputChange = (event) => {
        setSecondInput(event.target.value);
    };

    const nextOnClick = () => {
        setFormComplete({...formComplete, [actualData[0]]: true, [actualData[1]]: true});
        setValues({...formInfo, [actualData[0]]: firstInput, [actualData[1]]: secondInput,})
    }

    return (
    <>
        <h1>{formTittle}</h1>
        <h5>{`${[actualData[0]]}: ${firstInput}`}</h5>
        <StyledRange min="1" max="250" type="range" value={firstInput} onChange={handleFirstInputChange}></StyledRange>
        <h5>{`${[actualData[1]]}: ${secondInput}`}</h5>
        <StyledRange min="1" max="250" type="range" value={secondInput} onChange={handleSecondInputChange}></StyledRange>
        <FormButton onClick={nextOnClick} textButton="Next"/>
    </>
    );
 }