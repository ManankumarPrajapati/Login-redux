import { STORE_USER_DATA } from "./TaskReducer";

export const storeUserData = (userData) => {
  return {
    type: STORE_USER_DATA,
    data: userData,
  };
};
