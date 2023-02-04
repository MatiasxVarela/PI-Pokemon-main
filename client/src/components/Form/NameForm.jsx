import FormButton from "./FormButton";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const H1Styled = styled.h1`
    font-family: 'OldPokemonFont';
    margin-top: 165px;
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

const StyledPError = styled.p`
    font-family: 'OldPokemonFont';
    color: rgba(255, 153, 51, 0.83);
    margin-top: 15px;
    max-width: 320px;
`;

export default function FormInput(props) {
    const pokemons = useSelector(state => state.pokemons)
    const setFormComplete = props.setFormComplete
    const formComplete = props.formComplete
    const actualData = props.actualData
    const formInfo = props.formInfo
    const onChange = props.onChange
    const thisPokemonExist = pokemons.filter((element) => element.name === formInfo.toLowerCase())
    const [ bottonActive, setBottonActive ] = useState(false)

    const nextOnClick = () => {
        setFormComplete({
            ...formComplete, 
            [actualData]: true
        });
    }

    useEffect(() => {
        if (formInfo.length >= 3 && formInfo.length <= 11 && thisPokemonExist.length === 0){
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
            formInfo.length > 0 
            && formInfo.length < 3 
            && <StyledPError>It is necessary that the name have at least 3 letters.</StyledPError>
        }

        {
            formInfo.length >= 12 
            && <StyledPError>The name cannot have more than 11 letters.</StyledPError>
        }
        {
            thisPokemonExist.length > 0
            && <StyledPError>This Pokemon's name already exists.</StyledPError> 
        }
        
        {
         <FormButton isActive={bottonActive} onClick={nextOnClick} textButton="Next"></FormButton>
        }
    </>
    );
 }