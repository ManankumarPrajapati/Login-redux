export const STORE_USER_DATA = "STORE_USER_DATA";

export const TaskReducer = (state = [], action) => {
  switch (action.type) {
    case STORE_USER_DATA:
      return [...state, action.data];
    default:
      return state;
  }
};
