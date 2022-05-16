import "./style.css"
import sad from "./../../assets/img/sad.png"
import party from "./../../assets/img/party.png"

export default function Footer(props) {
    return (
        <div className="footer">
            {props.anwserList.length === 8 && props.anwserList.includes("close") ? 
                <div className="final-message">
                    <p> <img src={sad} alt="Emoji de carinha triste"/> <span>Putz...</span></p> <p>Ainda faltam alguns...<br />mas não desanime</p>
                    <button onClick={() => props.setPage("welcome")}>Reiniciar Recall</button>
                </div>  
                : props.anwserList.length === 8 ?     
                <div className="final-message">
                    <p> <img src={party} alt="Emoji de carinha comemorando"/> <span> Parabéns! </span></p> <p>Você não esqueceu de<br />nenhum flashcard!</p>
                    <button onClick={() => props.setPage("welcome")}>Reiniciar Recall</button>
                </div>
                : ""} 
            <p>{props.anwserList.length}/8 CONCLUÍDOS</p>
            <div>
                {props.anwserList.map((icon, index) => <ion-icon name={`${icon}-circle`} key={index}></ion-icon>)}
            </div>
        </div>
    );
}