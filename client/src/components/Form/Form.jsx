import React from "react";
import styled from "styled-components";
import NameForm from "./NameForm";
import { useState } from "react";
import TypesForm from "./TypesForm";
import RangesForms from "./RangesForms";
import SpriteForm from "./SpriteForm"

const BackgroundDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 87.9vh;
    width: 100vw;
`;

const FormDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 590px;
    width: 430px;
    padding: 15px 60px 15px 60px;
    margin-top: -100px;
    border: 2px solid rgba(255, 215, 0, 0.87);
    background-color: rgba(76, 109, 242, 0.87);
    border-radius: 15px;
    box-shadow: 16px 16px 40px rgba(0, 0, 0, 0.7);
`;

export default function Form() {
    let [ formInfo, setFormInfo] = useState({
        name: "",
        sprite: "",
        attack: 0,
        hp: 0,
        defense:0,
        speed: 0,
        height: 0,
        weight: 0,
        types: ["", ""]
    })

     const [ formComplete, setFormComplete] = useState({
        name: false,
        sprite: false,
        attack: false,
        hp: false,
        defense:false,
        speed: false,
        height: false,
        weight: false,
        types: false
    })

    const handleOnClick = (formStatus) => {
        setFormComplete({...formComplete, [formStatus]: true})
    }

    const formNameHandleOnChange = (event, actualData) => {
        const regex = /^[\w\d\u00C0-\u017F-]+$/;
        if (event.target.value.match(regex) || event.target.value === "") {
          setFormInfo(formInfo = {...formInfo, [actualData]: event.target.value});
        }
    }
    
    return (
    <BackgroundDiv>
        <FormDiv>

            {
            formComplete.name === false 
            && <NameForm onChange={formNameHandleOnChange} onClick={handleOnClick} actualData="name" formInfo={formInfo.name}/>
            }

            {
            formComplete.name === true 
            && formComplete.types === false
            && <TypesForm setTypes={setFormInfo} formInfo={formInfo} onClick={handleOnClick} actualData="types"/>
            }

            {
            formComplete.types === true
            && formComplete.hp === false
            && formComplete.attack === false
            && <RangesForms setFormComplete={setFormComplete} formComplete={formComplete} setValues={setFormInfo} actualData={["hp", "attack"]} formInfo={formInfo} formTittle="Set values hp, atk"/>

            }

            {
            formComplete.hp === true
            && formComplete.attack === true
            && formComplete.defense === false
            && formComplete.speed === false
            && <RangesForms setFormComplete={setFormComplete} formComplete={formComplete} setValues={setFormInfo} actualData={["defense", "speed"]} formInfo={formInfo} formTittle="Set values from speed defense" />
            }

            {
            formComplete.defense === true
            && formComplete.speed === true
            && formComplete.height === false
            && formComplete.weight === false
            && <RangesForms setFormComplete={setFormComplete} formComplete={formComplete} setValues={setFormInfo} actualData={["height", "weight"]} formInfo={formInfo} formTittle="Set values from height weight"/>
            }

            {
            formComplete.height === true
            && formComplete.weight === true
            && formComplete.sprite === false
            && <SpriteForm formInfo={formInfo}></SpriteForm>
            }

        </FormDiv>
        <button onClick={() => {console.log(formInfo); console.log(formComplete)}}>Consologueo el form</button>
    </BackgroundDiv>
    );
 }