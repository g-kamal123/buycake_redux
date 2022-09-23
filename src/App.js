import { useDispatch, useSelector } from "react-redux";
import { actions } from "./store/index";
import buy_slice from "./store/Buy-slice";
import "./App.css";
function App() {
  const num = useSelector((state) => state.numberofcake);
  const dispatch = useDispatch();
  const btnHandler = () => {
    dispatch(actions.buycake());
  };

  return (
    <div className="App">
      <h2>Initial Number of cake :{buy_slice.getInitialState().numberofcake}</h2>
      <h2>Current number of cake: {num}</h2>
      <button onClick={btnHandler}>Buy cake</button>
      {num === 0 && <h2 style={{ color: "red" }}>Can't buy stock is over</h2>}
    </div>
  );
}

export default App;
