export default function InitialCard({ setCardIsOpen, index }) {
    return (
        <button onClick={() => setCardIsOpen(true)}>
            <p>Pergunta {index +1}</p>
            <ion-icon name="play-outline"></ion-icon>
        </button>
    );
}