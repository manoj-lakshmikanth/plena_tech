import './App.css'
import Header from './components/Header/Header'
import PortfolioComponent from './components/PortfolioComponent/PortfolioComponent'
import WatchlistComponent from './components/WatchlistComponent/WatchlistComponent'

function App() {

  return (
    <div className="app-container">
      <Header />
      <PortfolioComponent />
      <WatchlistComponent />
    </div>
  )
}

export default App
