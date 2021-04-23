import { createStore } from "redux";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  { name: "Michael Kosub",
   number: 9408793654,
    id: uuidv4() },
];
export function addContact(person) {
  return {
    type: "ADD_CHARACTER",
    person: person,
  };
}
export function removeContact(person) {
  return {
    type: "REMOVE_CHARACTER",
    person: person,
  };
}
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_CHARACTER":
      console.log(state);
      return [...state, action.person];
    case "REMOVE_CHARACTER":
      console.log(action.person);
      const updatedArr = state.filter(
        (thing) => {
          console.log(thing, action.person)
          return thing.id !== action.person.id}
      );
      console.log(updatedArr);
      return [...updatedArr];
    default:
      return state;
  }
}
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => {
  console.log(store.getState());
});
export default store;