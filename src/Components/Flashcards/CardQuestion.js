import Card from "./Card";
import turn from "./../../assets/img/turn.png"

export default function CardQuestion({ question, setCardFace }) {
    return(
        <Card>
            <p>{question}</p>
            <img src={turn} alt="Botão de Voltar" onClick={() => setCardFace("answer")}/>
        </Card>
    );
}