import {
  SUBMIT,
  CLEAR_LIST,
  EDIT_ITEM,
  INPUT_CHANGE,
  DELETE_ITEM
} from "../actions";
import { v4 as uuidv4 } from "uuid";

const initalState = {
  items: [],
  item: "",
  editItem: false
};

function rootReducer(state = initalState, actions) {
  switch (actions.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        item: actions.payload
      };
    case CLEAR_LIST:
      return {
        item: "",
        items: [],
        editItem: false
      };
    case DELETE_ITEM: {
      let id = actions.payload;
      const filteredItem = state.items.filter(item => item.id !== id);
      return {
        ...state,
        items: filteredItem
      };
    }
    case EDIT_ITEM: {
      let id = actions.payload;
      const filteredItem = state.items.filter(item => item.id !== id);
      const selectedItem = state.items.find(item => item.id === id);
      return {
        items: filteredItem,
        item: selectedItem.title,
        id: uuidv4(),
        editItem: !state.editItem
      };
    }
    case SUBMIT: {
      const newItems = {
        title: actions.payload,
        id: uuidv4()
      };
      return {
        items: [newItems, ...state.items],
        item: "",
        editItem: false
      };
    }
    default:
      return state;
  }
}

export default rootReducer;
