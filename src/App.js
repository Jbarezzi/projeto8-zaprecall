import React from "react";
import Welcome from "./Components/Welcome/Welcome";
import MainPage from "./Components/MainPage/MainPage";



export default function App() {
    const [page, setPage] = React.useState("welcome");

    return (
        <>
            {page === "welcome" ? <Welcome onClick={setPage}/> : <MainPage />}
        </>
    );
}