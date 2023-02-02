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
    flex-wrap: wrap;
    min-height: 84.4vh;
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