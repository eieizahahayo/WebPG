import React from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    count: state.count,
    click: state.clicks,
    house: state.house,
    school: state.school,
    clans: state.clans,
    array: state.array,
    array_map: state.array_map,
    array_object: state.array_object,
    array_middle: state.array_middle
  };
}

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };

  click = () => {
    this.props.dispatch({ type: "CLICK" });
  };

  house = () => {
    this.props.dispatch({ type: "HOUSE" });
  };

  school = () => {
    this.props.dispatch({ type: "SCHOOL" });
  };

  clan = () => {
    this.props.dispatch({ type: "CLANS" });
  };

  array = () => {
    this.props.dispatch({ type: "ARRAY_ADD" });
  };

  array_map = () => {
    this.props.dispatch({ type: "ARRAY_MAP" });
  };

  array_object = () => {
    this.props.dispatch({ type: "UPDATE_EMAIL" });
  };

  array_middle = () => {
    this.props.dispatch({ type: "ARRAY_MIDDLE" });
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>

        <h3>Click : Update normal state</h3>
        <h4>{this.props.click}</h4>
        <button onClick={this.click}>click</button>

        <h3>House point : Update an object</h3>
        <h4>{this.props.house.points}</h4>
        <button onClick={this.house}>update house</button>

        <h3>School -> house point : Update an object in an object</h3>
        <h4>{this.props.school.house.points}</h4>
        <button onClick={this.school}>update school</button>

        <h3>Clans : Update an object by key</h3>
        <h4>{this.props.clans["Rude vegetable"].points}</h4>
        <button onClick={this.clan}>update clan "Rude vegetable"</button>

        <h3>ARRAY : add</h3>
        <h4>{this.props.array}</h4>
        <button onClick={this.array}>add to array"</button>

        <h3>ARRAY : map</h3>
        <h4>{this.props.array_map}</h4>
        <button onClick={this.array_map}>map array"</button>

        <h3>ARRAY : Object</h3>
        <h4>{this.props.array_object[1].email}</h4>
        <button onClick={this.array_object}>map array object"</button>

        <h3>ARRAY : Middle</h3>
        <h4>{this.props.array_middle}</h4>
        <button onClick={this.array_middle}>Insert array in the middle"</button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Counter);
