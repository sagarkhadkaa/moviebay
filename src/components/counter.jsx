import React from "react";
class Counter extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-1">
                        <span
                            // style={{ fontWeight: "bold", fontSize: 20 }}
                            className={this.getBadgeClasses()}
                        >
                            {this.formatCount()}
                        </span>
                    </div>
                    <div className="col">
                        <button
                            onClick={() =>
                                this.props.onIncrement(this.props.counter)
                            } //use arrow function when you need to pass an argument
                            className="btn btn-secondary btn-sm m-2"
                        >
                            +
                        </button>
                        <button
                            onClick={() =>
                                this.props.onDecrement(this.props.counter)
                            } //use arrow function when you need to pass an argument
                            className="btn btn-secondary btn-sm m-2"
                            disabled={
                                this.props.counter.value === 0 ? "disabled" : ""
                            }
                        >
                            -
                        </button>
                        <button
                            onClick={() =>
                                this.props.onDelete(this.props.counter.id)
                            }
                            className="btn btn-danger btn-sm "
                        >
                            Delete
                        </button>
                    </div>
                </div>
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
