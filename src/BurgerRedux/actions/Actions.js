import { CHANGE_NUMB } from "../types/Types";

export const changeNumber = (name, value) => {
  return {
    type: CHANGE_NUMB,
    payload: { name, value },
  };
};
