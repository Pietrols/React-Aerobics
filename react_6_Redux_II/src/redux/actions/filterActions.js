export const SET_FILTER = "SET_FILTER";

export const SHOW_ALL = "SHOW_ALL";
export const SHOW_ACTIVE = "SHOW_ACTIVE";
export const SHOW_COMPLETED = "SHOW_COMPLETED";

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter,
  };
};
