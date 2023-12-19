import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import data from './data/data'
import Customer from './pages/Customer';
import Recruiment from './pages/Recruiment';
import Product from './pages/Product';
import Contact from './pages/Contact';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import DetailProduct from './pages/DetailProduct';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <React.StrictMode>
        
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route element={<Home data={data} />} index></Route>
            <Route path='/home' element={<Home data={data} />} index></Route>
            <Route path='/aboutus' element={<AboutUs />}></Route>
            <Route path='/product' element={<Product />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/customer' element={<Customer />}></Route>
            <Route path='/recruitment' element={<Recruiment />}></Route>
            <Route path='/:detailproduct' element={<DetailProduct />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
