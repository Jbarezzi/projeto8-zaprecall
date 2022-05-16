import React from "react";
import CardQuestion from "./CardQuestion";
import CardAnswer from "./CardAnswer";

export default function OpenedCard({questions, setCardIsOpen, setIsAnwsered, setAnwser}) {
    const [cardFace, setCardFace] = React.useState("question");
    return (
        <>
            {cardFace === "question" ? <CardQuestion question={questions.question} setCardFace={setCardFace} /> : <CardAnswer answer={questions.answer} setCardIsOpen={setCardIsOpen} setIsAnwsered={setIsAnwsered} setAnwser={setAnwser}/>}
        </>
    );
}