import Card from "./Card";
import Button from "./Button/Button"

export default function CardAnswer({ answer, setCardIsOpen, setIsAnwsered, setAnwser, anwserList, setAnwserList}) {
    return(
        <Card>
            <p>{answer}</p>
            <div>
                <Button text="Não lembrei" color="red" setCardIsOpen={setCardIsOpen} setIsAnwsered={setIsAnwsered} setAnwser={setAnwser} anwser="close" anwserList={anwserList} setAnwserList={setAnwserList}/>
                <Button text="Quase não lembrei" color="yellow" setCardIsOpen={setCardIsOpen} setIsAnwsered={setIsAnwsered} setAnwser={setAnwser} anwser="help" anwserList={anwserList} setAnwserList={setAnwserList}/>
                <Button text="Zap!" color="green" setCardIsOpen={setCardIsOpen} setIsAnwsered={setIsAnwsered} setAnwser={setAnwser} anwser="checkmark" anwserList={anwserList} setAnwserList={setAnwserList}/>
            </div>
        </Card>
    );
}