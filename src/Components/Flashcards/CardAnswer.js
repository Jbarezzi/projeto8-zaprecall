import Card from "./Card";
import Button from "./Button/Button"

export default function CardAnswer({ answer, setCardIsOpen, setIsAnwsered, setAnwser}) {
    return(
        <Card>
            <p>{answer}</p>
            <div>
                <Button text="Não lembrei" color="red" setCardIsOpen={setCardIsOpen} setIsAnwsered={setIsAnwsered} setAnwser={setAnwser} anwser="close" />
                <Button text="Quase não lembrei" color="yellow" setCardIsOpen={setCardIsOpen} setIsAnwsered={setIsAnwsered} setAnwser={setAnwser} anwser="help"/>
                <Button text="Zap!" color="green" setCardIsOpen={setCardIsOpen} setIsAnwsered={setIsAnwsered} setAnwser={setAnwser} anwser="checkmark"/>
            </div>
        </Card>
    );
}