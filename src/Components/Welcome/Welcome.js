import "./style.css";
import Logo from "./../utils/Logo";

export default function Welcome(props) {
    return (
        <div className="background">
            <div className="content">
                <Logo />
                <h1>ZapRecall</h1>
                <button onClick={props.onClick}>Iniciar Recall!</button>
            </div>
        </div>
    );
}