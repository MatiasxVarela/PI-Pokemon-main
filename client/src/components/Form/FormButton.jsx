import styled from "styled-components";

const StyledButton = styled.button`
    &:hover {
        transform: scale(${props => props.isActive ? '1.08' : '1'});
    }
    font-family: 'OldPokemonFont';
    font-size: 18px;
    padding: 10px;
    font-weight: bold;
    margin: auto 20px 20px 20px ;
    border: 2px solid rgba(76, 109, 242, 0.87);
    background-color: rgba(255, 215, 0, 0.87);
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
    border-radius: 8px;
    transition: transform 0.6s;
    filter: grayscale(${props => props.isActive ? '0' : '100'}%);
`;

export default function FormButton(props) {
    const onClick = props.onClick
    const isActive = props.isActive
    const text = props.textButton

    const handleOnClick = () => {
        if (isActive == true){
            onClick()
        }
    }

    return (
    <>
        <StyledButton isActive={isActive} onClick={handleOnClick}>{text}</StyledButton>
    </>
    );
 }