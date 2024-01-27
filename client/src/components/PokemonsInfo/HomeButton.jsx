import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledButton = styled.button`
     font-family: 'OldPokemonFont';
     font-size: 16px;
     font-weight: bold;
     width: 100px;
     height: 40px;
     margin: 13px 0px 0px 0px;
     background-color: rgba(255, 215, 0,9);
     border: 2px solid rgba(76, 109, 242, 0.9);
     box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.6);
     border-radius: 8px;
     cursor: pointer;
`;
export default function HomeButton() {
    const navigate = useNavigate()
    const handleOnClick = () => {
        setTimeout(() => {
            navigate("/home/1")
        }, 85);
    }
  return (
      <>
          <StyledButton onClick={handleOnClick}>Home</StyledButton>
      </>
  );
}