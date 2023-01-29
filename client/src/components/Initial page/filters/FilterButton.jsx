import React from "react";
import { NavLink } from 'react-router-dom';

export default function FilterButton(props) {
    const { onClick, textButton } = props
    
    return (
    <div>
        <NavLink to={`/home/1`}> <button onClick={onClick}>{textButton}</button> </NavLink>
    </div>
    );
 }