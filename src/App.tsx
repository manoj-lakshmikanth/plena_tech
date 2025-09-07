import './App.css'
import Header from './components/Header/Header'
import PortfolioComponent from './components/PortfolioComponent/PortfolioComponent'
import WatchlistComponent from './components/WatchlistComponent/WatchlistComponent'
import { increment, decrement, reset } from "./slices/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from './store/store';



function App() {

    const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="app-container">
      <Header />
      {count}
            <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <PortfolioComponent />
      <WatchlistComponent />
    </div>
  )
}

export default App
