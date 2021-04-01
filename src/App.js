import React from "react";
import Button from "./components/Button";


function App() {

    const clickHandler = () => () => {
        console.log(7)
    }

    return (
        <div className="App">
            <Button elClassName='btn_xs' onClick={clickHandler()}/> <br/><br/>
            <Button elClassName='btn_sm' disabled href={'/dvfe'} onClick={clickHandler()}/> <br/><br/>
            <Button elClassName='btn_md' onClick={clickHandler()}/> <br/><br/>
            <Button elClassName='btn_lg' onClick={clickHandler()}/> <br/><br/>
            <Button elClassName='btn_xl' onClick={clickHandler()}/> <br/><br/>
            <Button elClassName='btn_xxl' onClick={clickHandler()}/><br/><br/>
        </div>
    );
}

export default App;
