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
    <h1>Por ultimo pone tu imagen</h1>
    <input onChange={handleOnChange}></input>

    {
    isAImage !== null
    && isAImage !== true
    && <p> Tiene que ser una url valida, de una imagen png o jpg</p>
    }

    <StyledButtonDiv>
        <FormButton isActive={isAImage} onClick={nextOnClick} textButton="Create my pokemon"></FormButton>
        <FormButton isActive={true} onClick={backOnClick} textButton="Back"></FormButton>
    </StyledButtonDiv>


    </>
    );
 }