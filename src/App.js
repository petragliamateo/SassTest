import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App(){
    return(
        <div className="">
            <Navbar />
            <div className="flex flex-wrap justify-center">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default App;


/*

            <Main />
*/