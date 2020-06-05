import React, { Component } from "react";
import { connect } from "react-redux";
import { submit, inputChange } from "../redux/actions";
class TodoInput extends Component {
  handleChange = e => {
    let value = e.target.value;
    this.props.inputChange(value);
  };
  handleSubmit = e => {
    e.preventDefault();
    let title = this.props.reduxStateAsProp.item.trim();
    if (title !== "") {
      this.props.submit(title);
    }
  };

  render() {
    const { item, editItem } = this.props.reduxStateAsProp;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={item}
            onChange={this.handleChange}
          />
          <button
            className={
              editItem
                ? "btn btn-block btn-success my-3"
                : "btn btn-block btn-primary my-3"
            }
          >
            {editItem ? "Finish Editing" : "Add Item"}
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    reduxStateAsProp: state
    // state comes from the redux store
  };
};
// mapStateToProps decides what part of the state we want from the redux store while the ssecond arguement can be an object or function stating what we are passing into the state
const mapDispatchToProps = { submit, inputChange };

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);
