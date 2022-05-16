import React from "react";
import "./style.css";
import Logo from "./../utils/Logo";
import Flashcards from "../Flashcards/Flashcards";
import Footer from "../Footer/Footer";

export default function MainPage(props) {
    const [anwserList, setAnwserList] = React.useState([])
    return (
        <div className="flashcards-content">
            <div className="title">
                <Logo />
                <h1>ZapRecall</h1>
            </div>
            <Flashcards anwserList={anwserList} setAnwserList={setAnwserList} />
            <Footer anwserList={anwserList} setPage={props.setPage}/>
        </div>
    );
}