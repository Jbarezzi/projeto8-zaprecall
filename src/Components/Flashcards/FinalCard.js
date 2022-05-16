export default function FinalCard({ anwser , index}) {
    return(
        <button className={`final ${anwser}`}>
            <p>Pergunta {index + 1}</p>
            <ion-icon name={`${anwser}-circle`}></ion-icon>
        </button>
    );
}