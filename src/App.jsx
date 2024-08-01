import { BrowserRouter, Route, Routes} from 'react-router-dom'
import ProductScreen from './Components/ProductScreen'
import MarketingService from './Components/MarketingService'
import DigitalService from './Components/DigitalService'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/ProductScreen' element={<ProductScreen/>}></Route>
      <Route path='/marketingService' element={<MarketingService/>}></Route>
      <Route path='/digitalService' element={<DigitalService/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App