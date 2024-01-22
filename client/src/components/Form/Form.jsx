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
    min-height: 88.4vh;
`;

const FormDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 590px;
    width: 430px;
    margin-top: 100px;
    padding: 15px 60px 15px 60px;
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
            && <NameForm
                    formComplete={formComplete}
                    setFormComplete={setFormComplete}
                    onChange={formNameHandleOnChange}  
                    actualData="name" 
                    formInfo={formInfo.name}
                ></NameForm>
            }

            {
            formComplete.name === true 
            && formComplete.types === false
            && <TypesForm 
                    prevData={"name"}
                    setTypes={setFormInfo} 
                    formInfo={formInfo} 
                    setFormComplete={setFormComplete} 
                    formComplete={formComplete} 
                    actualData="types"
                ></TypesForm>
            }

            {
            formComplete.types === true
            && formComplete.hp === false
            && formComplete.attack === false
            && formComplete.defense === false
            && <RangesForms 
                    prevData={["types"]}
                    formTittle="Okay, now let's assign some values to our Pokemons."
                    actualData={["HP", "Attack", "Defense"]} 
                    setFormComplete={setFormComplete} 
                    formComplete={formComplete} 
                    setValues={setFormInfo} 
                    formInfo={formInfo} 
                ></RangesForms>
            }

            {
            formComplete.hp === true
            && formComplete.attack === true
            && formComplete.defense === true
            && formComplete.speed === false
            && formComplete.height === false
            && formComplete.weight === false
            && <RangesForms 
                    prevData={["hp", "attack", "defense"]}
                    formTittle="We're almost done, add some last values."
                    actualData={["Speed", "Height", "Weight"]}
                    formComplete={formComplete}
                    setFormComplete={setFormComplete}
                    formInfo={formInfo}
                    setValues={setFormInfo}
                ></RangesForms>
            }

            {
            formComplete.height === true
            && formComplete.weight === true
            && formComplete.sprite === false
            && <SpriteForm 
                    prevData={["speed", "height", "weight"]}
                    formComplete={formComplete}
                    setFormComplete={setFormComplete}
                    formInfo={formInfo}
                ></SpriteForm>
            }

        </FormDiv>
    </BackgroundDiv>
    );
 }