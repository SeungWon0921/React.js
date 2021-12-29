import React from 'react';
import './app.scss';
import Button from '../components/button';

function App() {
    return (
        <>
        <div className="App">
            <div className="buttons">
                <Button size="small">버튼</Button>
                <Button size="medium">버튼</Button>
                <Button size="large">버튼</Button>
            </div>
        </div>
        </>
    );
}

export default App;