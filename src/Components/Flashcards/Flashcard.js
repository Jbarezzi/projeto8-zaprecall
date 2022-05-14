export default function Flashcard(props) {
    return (
        <button>
            <p>Pergunta {props.question}</p>
            <ion-icon name="play-outline"></ion-icon>
        </button>
    );
}