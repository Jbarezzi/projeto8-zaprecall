import "./style.css";
import Logo from "./../utils/Logo";
import Flashcards from "../Flashcards/Flashcards";
import Footer from "../Footer/Footer";

export default function MainPage() {
    return (
        <div className="flashcards-content">
            <div className="title">
                <Logo />
                <h1>ZapRecall</h1>
            </div>
            <Flashcards />
            <Footer>
                0/4 Concluídos
            </Footer>
        </div>
    );
}