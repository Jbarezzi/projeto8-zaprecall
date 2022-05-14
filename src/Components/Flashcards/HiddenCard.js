export default function HiddenCard({ setCardFace }) {
    return(
        <button onClick={() => setCardFace("question")}>
            <p>Pergunta</p>
            <ion-icon name="play-outline"></ion-icon>
        </button>
    );
}