import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import {BrowserRouter} from 'react-router-dom';

import './App.css';

import {Logo} from '../components/template/Logo'
import { NavBar } from '../components/template/Nav';
import { Routes } from './Routes';
import { Footer } from '../components/template/Footer';


function App ()  {
    return(
        <BrowserRouter>
                <div className="app">
                    <Logo />
                    <NavBar />
                    <Routes />
                    <Footer />
                </div>
        </BrowserRouter>
    )
} 

export default App;