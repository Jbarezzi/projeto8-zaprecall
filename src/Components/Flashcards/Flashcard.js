import React from "react";
import ClosedCard from "./ClosedCard";
import OpenedCard from "./OpenedCard";

export default function Flashcard(props) {
    const [cardIsOpen, setCardIsOpen] = React.useState(false);
    const [isAnwsered, setIsAnwsered] = React.useState(false);
    return (
       <>
        {cardIsOpen === false ? <ClosedCard setCardIsOpen={setCardIsOpen} isAnwsered={isAnwsered}/> : <OpenedCard questions={props.questions} setCardIsOpen={setCardIsOpen} setIsAnwsered={setIsAnwsered}/>}
       </>
    );
}