// == Initial State
const initialState = {
  logged: false,
  modalIsOpen: false,
};

// == Types
const OPEN_MODAL = 'OPEN_MODAL';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalIsOpen: action.clickEvent,
      };

    default:
      return state;
  }
};

// == Action Creators
export const openModal = clickEvent => ({
  type: OPEN_MODAL,
  clickEvent,
});


// == Selectors


// == Export
export default reducer;
