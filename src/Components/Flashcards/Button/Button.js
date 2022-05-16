import "./style.css";

export default function Button({color = "red", text = "botão", setCardIsOpen, setIsAnwsered, setAnwser, anwser}) {
    return(
    <button className={`button ${color}`} onClick={() => {
        setIsAnwsered(true);
        setCardIsOpen(false);
        setAnwser(anwser);}}>
        <p>{text}</p>
    </button>
    );
}