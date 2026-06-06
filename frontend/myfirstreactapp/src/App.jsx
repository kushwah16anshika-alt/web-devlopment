// import Header from "./components/header";
// import Footer from "./project/Home";
// import Home from "./project/Home";
// import Aboutus from "./project/Aboutus";
// import Contactus from "./project/Contactus";
// import Products from "./project/Products";
// import Register from "./project/Register";
// import Login from "./project/login";
// import { BrowserRouter,Router,Route } from "react-router-dom";
// function App() {
//   return (
//     <>
      
//       <BrowserRouter>
//       <Header/>
//      <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/aboutus" element={<Aboutus />} />
//           <Route path="/contactus" element={<Contactus />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>

//       </BrowserRouter>
//     </>
//   );
// }
// export default App;
import Header from "./components/Header";
import Home from "./project/Home";
import Aboutus from "./project/Aboutus";
import Contactus from "./project/Contactus";
import Products from "./project/Products";
import Register from "./project/Register";
import Login from "./project/login";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;