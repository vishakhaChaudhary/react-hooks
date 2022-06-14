import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
        showText: state.showText,
      };
    case "toggleShowText":
        return {
            count: state.count,
            showText: !state.showText
        }
    default:
        break;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <React.Fragment>
        <div>Use Reducer Example</div>
        <h3>{state.count}</h3>
        <button onClick={() => {
            dispatch({ type: "INCREMENT"});
            dispatch({ type: "toggleShowText" });
        }}>Click Me</button>
        {state.showText && <h4>Display Text</h4>}
    </React.Fragment>
  );

};

export default UseReducer;
