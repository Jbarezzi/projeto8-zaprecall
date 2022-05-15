export default function InitialCard({ setCardIsOpen }) {
    return (
        <button onClick={() => setCardIsOpen(true)}>
            <p>Pergunta</p>
            <ion-icon name="play-outline"></ion-icon>
        </button>
    );
}