const initialState = {
  sidebarView: "expanded"
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SIDEBAR_VIEW":
      let view = action.view;
      return Object.assign({}, state, { sidebarView: view });
    case "TOGGLE_SIDEBAR":
      let sidebarView = state.sidebarView;
      sidebarView = sidebarView === "expanded" ? "collapsed" : "expanded";
      return { ...state, sidebarView: sidebarView };
    default:
      return state;
  }
};

export default sidebarReducer;
