import React from "react";
import { useSelector} from "react-redux";
import PageButton from "./PageButton";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import { goToTop } from "../../../../Util/goToTop";

const CurrentPageButton = styled.button`
    &:hover{
        background-color: rgba(255, 215, 0,9);
        border: 2px solid rgba(76, 109, 242, 0.9);
        transform: scale(1.30);
    }
    font-family: 'OldPokemonFont';
    width: 2.25vw;
    height: 3.5vh;
    margin: 10px 5px 20px 5px;
    border: none;
    background-color: rgba(76, 109, 242, 0.9);
    border: 2px solid rgba(255, 215, 0,9);
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    transform: scale(1.15);
    transition: all 0.8s;
    cursor: pointer;
`;

export default function NavigatePageButtons() {
    const pageId = useSelector(state => state.pageId)
    const pokemonsLength = useSelector((state) => state.pokemonsInOrder).length
    const LastPage = Math.ceil(pokemonsLength / 12)
    
    return (
    <div>
        {
        pageId < 1 
        && <Navigate to="/home/1" ></Navigate> 
        }

        {
        pageId > LastPage
        && <Navigate to={`/home/${LastPage}`} ></Navigate> 
        }

        { 
        pageId > 2 
        && <PageButton id={1} textButton={"<<"}></PageButton>
        }

        { pageId > 1 
        && <PageButton 
            id={pageId - 1} 
            textButton={pageId - 1}
            ></PageButton>
        }

        <CurrentPageButton onClick={goToTop} >{pageId}</CurrentPageButton>

        {
        pageId < LastPage 
        && <PageButton
            id={pageId + 1} 
            textButton={pageId + 1}
            ></PageButton>
        }

        { pageId < (LastPage - 1) 
        && <PageButton 
            id={LastPage} 
            textButton={">>"}
            ></PageButton>
        }
    </div>
    );
 }