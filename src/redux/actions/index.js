export const INPUT_CHANGE = "INPUT_CHANGE";
export const SUBMIT = "SUBMIT";
export const CLEAR_LIST = "CLEAR_LIST";
export const EDIT_ITEM = "EDIT_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

export function inputChange(payload) {
  return {
    payload,
    type: INPUT_CHANGE
  };
}

export function submit(payload) {
  return {
    payload,
    type: SUBMIT
  };
}

export function clearList() {
  return {
    type: CLEAR_LIST
  };
}
export function editItem(payload) {
  return {
    payload,
    type: EDIT_ITEM
  };
}

export function deleteItem(payload) {
  return {
    payload,
    type: DELETE_ITEM
  };
}
