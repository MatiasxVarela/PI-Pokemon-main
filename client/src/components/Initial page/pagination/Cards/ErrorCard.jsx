import styled from "styled-components";
import pokemonErrorImage from "../../../../img/Togepi.png"
import ResetButton from "../../filters/ResetButton"

const StyledImg = styled.img`
    height: 275px;
    width: 275px;
`;

const StyledH2 = styled.h2`
    font-family: 'OldPokemonFont';
    max-width: 350px;
`;

const CardDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 560px;
    margin: 15px 15px 20px 10px;
    border: 2px solid rgba(255, 215, 0, 0.83);
    background-color: rgba(76, 109, 242, 0.83);
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.6);
    border-radius: 15px;
`;

export default function ErrorCard() {

    return (
    <CardDiv>
       <StyledH2>There are no Pokemon with these filters.</StyledH2>
       <StyledImg src={pokemonErrorImage} />
       <ResetButton></ResetButton>
    </CardDiv>
    );
 }