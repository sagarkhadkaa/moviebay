import React from "react";
class Counter extends React.Component {
    // state = {
    //     value: this.props.counter.value,
    // };

    // handleIncrement = (product) => {
    //     console.log(product);
    //     this.setState({ value: this.state.value + 1 });
    // };
    render() {
        return (
            <div>
                <span
                    // style={{ fontWeight: "bold", fontSize: 20 }}
                    className={this.getBadgeClasses()}
                >
                    {this.formatCount()}
                </span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)} //use arrow function when you need to pass an argument
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.props.counter;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;
