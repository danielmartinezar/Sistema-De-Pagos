import "./App.css";
import Payment from "./pages/payment";
import Home from "./pages/home";
import SignIn from "./pages/signin";
import PaymentRecord from "./pages/paymentRecord";
import {
  Route,
  Routes,
  useNavigate,
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import CardInfo from "./components/cardInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/a" element={<CardInfo/>}/>
        {/* <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/pagar" element={<Payment />} />
        <Route path="/historial" element={<PaymentRecord />} />
        <Route path="/" element={<Home/>}/>
        <Route path="/registrar" element={<SignIn/>}/>
      </Routes>
    </Router>
  );
}

export default App;
