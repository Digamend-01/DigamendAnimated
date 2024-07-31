import { BrowserRouter, Route, Routes} from 'react-router-dom'
import ProductScreen from './Components/ProductScreen'
import MarketingService from './Components/MarketingService'
import SubMarketingService from './SubComponent.jsx/SubMarketingService'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/ProductScreen' element={<ProductScreen/>}></Route>
      <Route path='/marketingService' element={<MarketingService/>}></Route>
      <Route path='/sub' element={<SubMarketingService/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App