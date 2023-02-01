import axios from "axios";
import FormButton from "./FormButton";
import { useState } from "react";

export default function ImageForm(props) {
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

    const handleOnClick = () => {
        axios.post('http://localhost:3001/pokemons', {
            ...formInfo,
            sprite: inputValue,
            types: [formInfo.types.type1, formInfo.types.type2]
        }).then(function (response) {
            console.log(response);
        })
        /* console.log({
            ...formInfo,
            sprite: inputValue,
            types: [formInfo.types.type1, formInfo.types.type2]
        }) */
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

    {
    isAImage
    && <FormButton onClick={handleOnClick} textButton="Create my pokemon"></FormButton>
    }

    </>
    );
 }