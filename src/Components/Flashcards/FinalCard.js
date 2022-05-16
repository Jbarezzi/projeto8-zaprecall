export default function FinalCard({ anwser }) {
    return(
        <button className={`final ${anwser}`}>
            <p>Pergunta</p>
            <ion-icon name={`${anwser}-circle`}></ion-icon>
        </button>
    );
}