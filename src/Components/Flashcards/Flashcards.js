import "./style.css"
import Flashcard from "./Flashcard";

export default function Flashcards() {
    const flashcards = [1, 2 ,3 ,4 ,5 ,6 ,7 ,8]
    
    return (
        <div className="flashcards">
            {flashcards.map((questions, index) => <Flashcard question={questions} key={index} />)}
        </div>
    );
}