import React from "react";
class Counter extends React.Component {
    state = {
        value: this.props.value,
    };

    handleIncrement = (product) => {
        console.log(product);
        this.setState({ value: this.state.value + 1 });
    };
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
                    onClick={() => this.handleIncrement({ id: 1 })} //use arrow function when you need to pass an argument
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;
