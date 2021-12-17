import React from "react";
import Movies from "./components/movies";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends React.Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 2 },
            { id: 3, value: 0 },
            { id: 4, value: 7 },
        ],
    };
    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    };
    handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value--;
        this.setState({ counters });
    };
    handleReset = () => {
        // console.log(this.state.counters);
        const counters = this.state.counters.map((c) => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
        console.log({ counters });
    };
    handleDelete = (counterId) => {
        const counters = this.state.counters.filter((c) => c.id !== counterId);
        this.setState({ counters });
    };
    render() {
        return (
            <React.Fragment>
                {/* <Navbar
                    totalCounters={
                        this.state.counters.filter((c) => c.value > 0).length
                    }
                /> */}
                <main className="container m-2">
                    <Movies />
                    {/* <Counters
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onReset={this.handleReset}
                        onDelete={this.handleDelete}
                        counters={this.state.counters}
                    /> */}
                </main>
            </React.Fragment>
        );
    }
}

export default App;
