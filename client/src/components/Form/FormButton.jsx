import styled from "styled-components";

const StyledButton = styled.button`
    &:hover {
        transform: scale(1.08);
    }
    font-family: 'OldPokemonFont';
    font-size: 18px;
    padding: 10px;
    font-weight: bold;
    margin-top: auto;
    margin-bottom: 20px;
    border: 2px solid rgba(76, 109, 242, 0.87);
    background-color: rgba(255, 215, 0, 0.87);
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
    border-radius: 8px;
    transform: translateY(0.5px);
    transition: transform 0.6s;
`;

export default function FormButton(props) {

    return (
    <>
        <StyledButton onClick={props.onClick}>{props.textButton}</StyledButton>
    </>
    );
 }