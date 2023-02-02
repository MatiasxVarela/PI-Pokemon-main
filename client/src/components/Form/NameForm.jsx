import FormButton from "./FormButton";
import styled from "styled-components";
import { useState, useEffect } from "react";

const H1Styled = styled.h1`
    font-family: 'OldPokemonFont';
    font-size: 28px;
`;

const StyledInput = styled.input`
    &:focus {
        outline: none;
        transform: scale(1.02);
        box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.6);
    }
    font-family: 'OldPokemonFont';
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    height: 25px;
    padding: 6px 9px 6px 9px;
    margin-top: 15px;
    background-color: rgba(76, 109, 242, 0.83);
    border: 2px solid rgba(255, 215, 0, 0.83);
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    transition: transform 0.4s;
`;

export default function FormInput(props) {
    const setFormComplete = props.setFormComplete
    const formComplete = props.formComplete
    const actualData = props.actualData
    const formInfo = props.formInfo
    const onChange = props.onChange
    const [ bottonActive, setBottonActive ] = useState(false)

    const nextOnClick = () => {
        setFormComplete({
            ...formComplete, 
            [actualData]: true
        });
    }

    useEffect(() => {
        if (props.formInfo.length >= 3 && props.formInfo.length <= 11 ){
            setBottonActive(true)
        }else {
            setBottonActive(false)
        }
    }, [formInfo])

    return (
    <>
        <H1Styled>Let's start, first give your Pokemon a name:</H1Styled>
        <StyledInput onChange={(event) => onChange(event, actualData)} value={formInfo}></StyledInput>

        {
            props.formInfo.length > 0 
            && props.formInfo.length < 3 
            && <p>Necesitas al menos 3 letras</p>
        }

        {
            props.formInfo.length >= 12 
            && <p>No puedes tener más de 11 letras</p>
        }
        
        {
         <FormButton isActive={bottonActive} onClick={nextOnClick} textButton="Next"></FormButton>
        }
    </>
    );
 }