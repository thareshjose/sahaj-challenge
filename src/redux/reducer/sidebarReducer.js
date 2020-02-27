const initialState = {
  collapsed: false
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SIDEBAR_VIEW":
      let view = action.view;
      return Object.assign({}, state, { sidebarView: view });
    case "TOGGLE_SIDEBAR":
      let collapsed = state.collapsed;

      return { ...state, collapsed: !collapsed };
    default:
      return state;
  }
};

export default sidebarReducer;
