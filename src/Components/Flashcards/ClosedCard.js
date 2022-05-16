import React from "react";
import InitialCard from "./InitialCard";
import FinalCard from "./FinalCard";

export default function ClosedCard({ setCardIsOpen, isAnwsered, anwser, index}) {
    return(
        <>
            {isAnwsered === false ? <InitialCard setCardIsOpen={setCardIsOpen} index={index}/> : <FinalCard anwser={anwser} index={index}/>}
        </>
    );
}