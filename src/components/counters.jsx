import React, { Component } from "react";
import Counter from "./counter";
import { stat } from "fs";

class Counters extends Component {
  render() {
    const {
      onReset,
      onDelete,
      onIncrement,
      counters,
      onDecrement
    } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            // id={counter.id}
            // value={counter.value}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
