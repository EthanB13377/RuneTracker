import React from "react";
import Box from "./Box";
import "./Box.css";

const BoxGrid = () => {
    return (
        <div className="box-grid">
            <Box text="Calculators"/>
            <Box text="Tutorials"/>
            <Box text="Something..."/>
        </div>
    )
}

export default BoxGrid;