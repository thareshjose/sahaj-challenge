export const setSideBarView = view => {
  return { type: "SET_SIDEBAR_VIEW", view: view };
};

export const toggleSidebar = () => {
  return { type: "TOGGLE_SIDEBAR" };
};
