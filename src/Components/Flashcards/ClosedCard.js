import React from "react";
import InitialCard from "./InitialCard";
import FinalCard from "./FinalCard";

export default function ClosedCard({ setCardIsOpen, isAnwsered}) {
    return(
        <>
            {isAnwsered === false ? <InitialCard setCardIsOpen={setCardIsOpen} /> : <FinalCard />}
        </>
    );
}