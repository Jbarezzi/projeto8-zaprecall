import Card from "./Card";
import Button from "./Button/Button"

export default function CardAnswer({ answer, setCardIsOpen, setIsAnwsered}) {
    return(
        <Card>
            <p>{answer}</p>
            <div>
                <Button text="Não lembrei" color="red" setCardIsOpen={setCardIsOpen} setIsAnwsered={setIsAnwsered}/>
                <Button text="Quase não lembrei" color="yellow" setCardIsOpen={setCardIsOpen} setIsAnwsered={setIsAnwsered}/>
                <Button text="Zap!" color="green" setCardIsOpen={setCardIsOpen} setIsAnwsered={setIsAnwsered}/>
            </div>
        </Card>
    );
}