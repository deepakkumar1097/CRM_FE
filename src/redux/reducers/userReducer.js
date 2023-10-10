export function userReducer(
  state = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {},
  action
) {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    default:
      return state;
  }
}
