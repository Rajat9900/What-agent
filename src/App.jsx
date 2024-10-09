
import './App.css'
import { Route , Routes } from 'react-router-dom'
import BetaTestings from './pages/beta-Testing/BetaTestings'
import ThanksMsgTesting from './pages/thanksMsgTesting/ThanksMsgTesting'
function App() {


  return (
    <>
<Routes>
  <Route path="/" element={<BetaTestings/>}/>
  <Route path="/thanksMsg" element={<ThanksMsgTesting/>}/>
</Routes>
    </>
  )
}

export default App
