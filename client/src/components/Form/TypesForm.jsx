import { useState } from "react";
import { useSelector } from "react-redux";
import FormButton from "./FormButton"
import styled from "styled-components";

const H1Styled = styled.h1`
    font-family: 'OldPokemonFont';
    font-size: 28px;
    margin-bottom: 10px;
`;

const StyledH3 = styled.h3`
    font-family: 'OldPokemonFont';
`;

const StyledSelect = styled.select`
    &:hover {
        transform: scale(1.02);
    }
    font-family: 'OldPokemonFont';
    margin-bottom: 5px;
    font-size: 16px;
    padding: 10px;
    background-color: rgba(76, 109, 242, 0.83);
    border: 2px solid rgba(255, 215, 0, 0.83);
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.6);
    border-radius: 13px;
    transition: all 0.4s;
`; 

const StyledCheckbox = styled.input`
    &:hover {
        transform: scale(1.07);
    }
    &:checked {
        &::before {
        content: "";
        display: block;
        width: 12px;
        height: 24px;
        transform: rotate(45deg) translate(8px, -7px);
        border-right: 2px solid rgba(255, 215, 0, 0.83);
        border-bottom: 2px solid rgba(255, 215, 0, 0.83);
        box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.6);
        }
    }
    appearance: none;
    width: 40px;
    height: 40px;
    background-color: rgba(76, 109, 242, 0.83);
    border: 2px solid rgba(255, 215, 0, 0.83);
    border-radius: 8px;
    margin-top: -5px;
    transition: transform 0.5s;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
`;

export default function TypesForm(props) {
    const onClick = props.onClick
    const actualData = props.actualData
    const setTypes = props.setTypes
    let formInfo = props.formInfo
    const types = useSelector(store => store.types)
    const [ firstTypeState, setFirstTypeState ] = useState(false)
    const [ secondTypeState, setSecondTypeState ] = useState(false)
    const [ firstTypeValue, setFirstTypeValue ] = useState("None")
    const [ showSecondType, setShowSecondType ] = useState(true)
    const [ allTypes, setAllTypes ] = useState({
        type1: "",
        type2: ""
    })
    
    const firstTypeHandleChange = (event) => {
        setFirstTypeState(true)
        setFirstTypeValue(event.target.value)
        setAllTypes({...allTypes, type1: event.target.value})
    }

    const secondTypeHandleChange = (event) => {
        setSecondTypeState(true)
        setAllTypes({...allTypes, type2: event.target.value})
    }

    const showSecondTypeHandleChange = () => {
        setShowSecondType(!showSecondType)
        setAllTypes({...allTypes, type2: ""})
    }

    return (
    <>
        <H1Styled>Select the type of your Pokemon:</H1Styled>
        <StyledH3>First type:</StyledH3>
        <StyledSelect onChange={firstTypeHandleChange}>
        <option value="None" >None</option>
            {
                types.length > 0 && types.map(
                    (type) => 
                    <option 
                        key={type.id} 
                        value={type.name}
                        >
                        {type.name}
                    </option>)
            }
        </StyledSelect>

        {
        firstTypeState === true
        && showSecondType === true
        && <StyledH3>Second type:</StyledH3>
        }

        {
        firstTypeState === true
        && showSecondType === true
        && <StyledSelect onChange={secondTypeHandleChange}>
        {allTypes.type2 === "" && <option value="None" >None</option>}
            {
                types.length > 0 && types.map(
                    (type) => 
                    type.name !== firstTypeValue && <option 
                        key={type.id} 
                        value={type.name}
                        >
                        {type.name}
                    </option>)
            }
        </StyledSelect>
        }

        {
        firstTypeState === true 
        && <StyledH3> I dont want second type:</StyledH3> 
        }
        
        {
        firstTypeState === true 
        && <StyledCheckbox name="secondTypeCheck" type={"checkbox"} onChange={showSecondTypeHandleChange} ></StyledCheckbox> 
        }

        {
        firstTypeState === true
        && (showSecondType === false || (secondTypeState === true && allTypes.type2 !== ""))
        && <FormButton onClick={() => {onClick(actualData); setTypes(formInfo = {...formInfo, [actualData]: allTypes})}} textButton="Next"></FormButton>
        }
    </>
    );
 }