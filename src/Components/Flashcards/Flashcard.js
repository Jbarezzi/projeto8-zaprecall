import React from "react";
import HiddenCard from "./HiddenCard";
import CardQuestion from "./CardQuestion";
import CardAnswer from "./CardAnswer";

export default function Flashcard({ questions }) {
    const [cardFace, setCardFace] = React.useState("initial");
    return (
       <>
        {cardFace === "initial" ? <HiddenCard setCardFace={setCardFace}/> : (cardFace === "question" ? <CardQuestion question={questions.question} setCardFace={setCardFace} /> : <CardAnswer answer={questions.answer}/>)}
       </>
    );
}