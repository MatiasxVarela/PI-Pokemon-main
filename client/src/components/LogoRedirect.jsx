import React from "react";
import { resetAllFilters } from "../redux/actions";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function LogoRedirect() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(resetAllFilters())
    },[])

    return (
        <Navigate to="/home/1"></Navigate>
    );
 }