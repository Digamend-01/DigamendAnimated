import { BrowserRouter, Route, Routes} from 'react-router-dom'
import ProductScreen from './Components/ProductScreen'
import MarketingService from './Components/MarketingService'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/ProductScreen' element={<ProductScreen/>}></Route>
      <Route path='/marketingService' element={<MarketingService/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App