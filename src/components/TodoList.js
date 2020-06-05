import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import { clearList, deleteItem, editItem } from "../redux/actions";

class TodoList extends Component {
  handleEditItem = id => {
    this.props.editItem(id);
  };
  handleDeleteItem = id => {
    this.props.deleteItem(id);
  };
  handleClearList = () => {
    this.props.clearList();
  };

  render() {
    return (
      <div>
        <ul className="list-group my-5">
          {this.props.reduxStateAsProp.items.map(item => (
            <TodoItem
              key={item.id}
              title={item.title}
              deleteItem={() => this.handleDeleteItem(item.id)}
              editItem={() => this.handleEditItem(item.id)}
            />
          ))}
        </ul>
        <button
          className="btn btn-danger btn-block mt-3"
          onClick={this.handleClearList}
        >
          Clear List
        </button>
      </div>
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
const mapDispatchToProps = { clearList, editItem, deleteItem };

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
