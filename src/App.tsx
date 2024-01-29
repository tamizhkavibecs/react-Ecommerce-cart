import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counter/counterSlice";
import { RootState } from "./app/store";
function App() {
  const count = useSelector((state: any) => state.counter.value);
  // const userData = useSelector((state: any) => state.userVenkat.value)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1> Redux </h1>
    </div>
  );
}

export default App;
