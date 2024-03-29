import { getPageId } from "../../redux/actions";
import React from "react";
import { useEffect} from "react";
import { useParams } from 'react-router-dom'
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Filters from "./filters/Filters"
import Pagination from "./pagination/Pagination";

const InitialPageDiv = styled.div`
    margin: 4.4vh 0px 0px 0px;
    display: flex;
    min-height: 84.4vh;
    width: 100%;
    @media (max-width: 600px) {
        margin: 0px;
    }
`;

export default function InitialPage () {
    let id = parseInt(useParams().id);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPageId(id))
    },[id, dispatch])

    return (
    <InitialPageDiv>
        <Filters/>
        <Pagination/>
    </InitialPageDiv>
    );
 }