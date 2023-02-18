import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + 1;
    case "sub":
      return state - 1;
    default:
      return state;
  }
};

export default function Test2() {
  const [count, countDispatch] = useReducer(reducer, 1);

  return (
    <div>
      <span>This is Test2!</span>
      <br />
      <span>The count is: {count}</span>
      <div>
        <button
          onClick={() => {
            countDispatch({ type: "add" });
          }}
        >
          Insert
        </button>
        <button
          onClick={() => {
            countDispatch({ type: "sub" });
          }}
        >
          Subtract
        </button>
      </div>
    </div>
  );
}
