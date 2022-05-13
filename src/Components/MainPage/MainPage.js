import "./style.css";
import Logo from "./../utils/Logo";

export default function MainPage() {
    return (
        <div className="background">
            <div className="flashcards-content">
                <div className="title">
                    <Logo />
                    <h1>ZapRecall</h1>
                </div>
                <Flashcards />
            </div>
        </div>
    );
}