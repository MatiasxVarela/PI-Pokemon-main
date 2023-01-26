import React from "react";
import { NavLink } from 'react-router-dom';

export default function Home() {


    return (
    <div>
        <NavLink to={`/home/1`}> <button>{"Start"}</button> </NavLink>
    </div>
    );
 }