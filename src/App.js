import React from "react";
import Movies from "./components/movies";
import "./App.css";
import Counters from "./components/counters";

class App extends React.Component {
    render() {
        return (
            <main className="container">
                {/* <Movies /> */}
                <Counters />
            </main>
        );
    }
}

export default App;
