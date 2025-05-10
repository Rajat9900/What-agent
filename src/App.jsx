
import './App.css'
import { Route , Routes } from 'react-router-dom'
import BetaTestings from './pages/beta-Testing/BetaTestings'
import ThanksMsgTesting from './pages/thanksMsgTesting/ThanksMsgTesting'
import TermsOfService from './pages/termsOfService/TermsOfService'
import PrivacyPolicy from './pages/privacyPolicy/PrivacyPolicy'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BetaTestings/>}/>
        <Route path="/thanksMsg" element={<ThanksMsgTesting/>}/>
        <Route path="/terms" element={<TermsOfService/>}/>
        <Route path="/privacy" element={<PrivacyPolicy/>}/>
      </Routes>
    </>
  )
}

export default App
