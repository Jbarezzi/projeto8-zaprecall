import "./style.css";

export default function Button({color = "red", text = "botão", setCardIsOpen, setIsAnwsered}) {
    return(
    <button className={`button ${color}`} onClick={() => {
        setIsAnwsered(true);
        setCardIsOpen(false);}}>
        <p>{text}</p>
    </button>
    );
}