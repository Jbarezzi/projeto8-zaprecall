import "./style.css";

export default function Button({color = "red", text = "botão", setCardIsOpen, setIsAnwsered, setAnwser, anwser, anwserList, setAnwserList}) {
    return(
    <button className={`button ${color}`} onClick={() => {
        setIsAnwsered(true);
        setCardIsOpen(false);
        setAnwser(anwser);
        setAnwserList([...anwserList, anwser]);}}>
        <p>{text}</p>
    </button>
    );
}