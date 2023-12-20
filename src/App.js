import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8F_lsqdMHI6EK4ESOhLKnoRnBZvLlFbo",
  authDomain: "levent-clone-web-5f3b4.firebaseapp.com",
  projectId: "levent-clone-web-5f3b4",
  storageBucket: "levent-clone-web-5f3b4.appspot.com",
  messagingSenderId: "497264020909",
  appId: "1:497264020909:web:800106a8b91ec4669ae524",
  measurementId: "G-NT48J9EM10"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
 
 
  return (
  <>
    <Header></Header> 
    <Outlet></Outlet>
    <Footer></Footer>
  </>
    
  )
}

export default App;
