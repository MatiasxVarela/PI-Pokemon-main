import axios from "axios";
import FormButton from "./FormButton";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getAllPokemons, resetAllFilters } from "../../redux/actions";
import styled from "styled-components";

const StyledButtonDiv = styled.div`
    margin-top: auto;
`;

const StyledH1 = styled.h1`
     font-family: 'OldPokemonFont';
     margin-top: 100px;
`;

const StyledPError = styled.p`
    font-family: 'OldPokemonFont';
    color: rgba(255, 153, 51, 0.83);
    margin-top: 15px;
    max-width: 320px;
`;
const StyledInput = styled.input`
    &:focus {
        outline: none;
        transform: scale(1.02);
        box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.6);
    }
    font-family: 'OldPokemonFont';
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

export default function ImageForm(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const prevData = props.prevData
    const formComplete = props.formComplete
    const setFormComplete = props.setFormComplete
    const formInfo = props.formInfo
    const [ inputValue, setInputValue ] = useState("")
    let [ isAImage, setIsAImage ] = useState(null)
    const regex = /^(https?:\/\/).*\.(png|jpg)$/

    const handleOnChange = (event) => {
        setInputValue(event.target.value)
        if (regex.test(event.target.value)) {
          setIsAImage(true)
        } else {
          setIsAImage(false)
        }
    }

    const nextOnClick = async () => {
        await axios.post('http://localhost:3001/pokemons', {
            ...formInfo,
            sprite: inputValue,
            types: [formInfo.types.type1, formInfo.types.type2]
        })
        dispatch(getAllPokemons())
        dispatch(resetAllFilters())
        navigate(`/pokemon?name=${formInfo.name.toLowerCase()}`)
    }

    const backOnClick = () => {
        prevData.forEach(element => {
            formComplete[element] = false
        });
        setFormComplete({...formComplete})
    }

    return (
    <>
    <StyledH1>Finally, put an image to the pokemon.</StyledH1>
    <StyledInput onChange={handleOnChange}></StyledInput>

    {
    isAImage !== null
    && isAImage !== true
    && <StyledPError>It must be a valid URL of a PNG or JPG image.</StyledPError>
    }

    <StyledButtonDiv>
        <FormButton isActive={isAImage} onClick={nextOnClick} textButton="Create my pokemon"></FormButton>
        <FormButton isActive={true} onClick={backOnClick} textButton="Back"></FormButton>
    </StyledButtonDiv>


    </>
    );
 }