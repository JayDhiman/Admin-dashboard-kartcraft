import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from './Components/Loader';
const Dashboard =  lazy(()=> import('./Pages/Dashboard'))  
const User = lazy(()=> import('./Pages/User')) 
const Products = lazy(()=> import('./Pages/Products')) 
const Orders = lazy(()=> import('./Pages/Orders')) 




const App = () => {
  return (
        <Router>
          <Suspense fallback={<Loader/>}>

        
              <Routes>
                <Route path="/" element={<Dashboard />} /> 
                <Route path="/auth/products" element={<Products/>} /> 
                <Route path="/auth/user" element={<User />} /> //dynamic route
                <Route path="/auth/orders" element={<Orders />} />
              </Routes>

              </Suspense>
        </Router>
  );
};
export default App