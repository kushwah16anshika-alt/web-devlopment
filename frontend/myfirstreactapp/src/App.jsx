import Header from "./components/header";
import Footer from "./project/Home";
import Home from "./project/Home";
import Aboutus from "./project/Aboutus";
import Contactus from "./project/Contactus";
import Products from "./project/Products";
import Register from "./project/Register";
import Login from "./project/login";
import { BrowserRouter,Router,Route } from "react-router-dom";
function App() {
  return (
    <>
      {/* <Header />
      <Home />
      <Aboutus />
      <Contactus />
      <Products />
      <Register />
      <Login />
      <Footer /> */}
      <BrowserRouter>
      <Header/>
      <Router>
        <Route path="/" element={<Home/>}/>
        <Route path="/Aboutus" element={<Aboutus/>}/>
        <Route path="/cp" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
      </Router>
      </BrowserRouter>
    </>
  );
}
export default App;
