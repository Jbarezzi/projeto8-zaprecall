import React from "react";
import InitialCard from "./InitialCard";
import FinalCard from "./FinalCard";

export default function ClosedCard({ setCardIsOpen, isAnwsered, anwser}) {
    return(
        <>
            {isAnwsered === false ? <InitialCard setCardIsOpen={setCardIsOpen} /> : <FinalCard anwser={anwser} />}
        </>
    );
}