import React from "react";
import ClosedCard from "./ClosedCard";
import OpenedCard from "./OpenedCard";

export default function Flashcard(props) {
    const [cardIsOpen, setCardIsOpen] = React.useState(false);
    const [isAnwsered, setIsAnwsered] = React.useState(false);
    const [anwser, setAnwser] = React.useState("");
    return (
       <>
        {cardIsOpen === false ? <ClosedCard setCardIsOpen={setCardIsOpen} isAnwsered={isAnwsered} anwser={anwser} index={props.index}/> : <OpenedCard questions={props.questions} setCardIsOpen={setCardIsOpen} setIsAnwsered={setIsAnwsered} setAnwser={setAnwser} anwserList={props.anwserList} setAnwserList={props.setAnwserList}/>}
       </>
    );
}