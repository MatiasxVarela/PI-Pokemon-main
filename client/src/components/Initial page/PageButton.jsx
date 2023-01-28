import React from "react";
import { NavLink } from 'react-router-dom';

export default function PageButton(props) {
    const { id, textButton } = props
    
    return (
    <div>
        <NavLink to={`/home/${id}`}> <button>{textButton}</button> </NavLink>
    </div>
    );
 }