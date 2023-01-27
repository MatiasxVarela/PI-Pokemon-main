import React from "react";
import { useSelector} from "react-redux";
import { useEffect } from "react";
import PageButton from "./PageButton"

export default function NavigatePageButtons() {
    const pageId = useSelector(state => state.pageId)
    const pokemonsLength = useSelector((state) => state.pokemons).length
    const LastPage = Math.ceil(pokemonsLength / 12)

    
    return (
    <div>
        { pageId > 2 && <PageButton id={1} textButton={"<<"}></PageButton>}
        { pageId > 1 && <PageButton id={pageId - 1} textButton={pageId - 1}></PageButton>}
        <PageButton id={pageId} textButton={pageId}></PageButton>
        { pageId < LastPage && <PageButton id={pageId + 1} textButton={pageId + 1}></PageButton>}
        { pageId < (LastPage - 1) && <PageButton id={LastPage} textButton={">>"}></PageButton>}
    </div>
    );
 }