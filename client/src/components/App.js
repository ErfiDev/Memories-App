import React,{Fragment} from 'react';
import {ToastContainer} from 'react-toastify';
import Footer from './footer/footer';
import Header from './header/header';
import Main from './main/main';
import Nav from './nav/nav';

import 'react-toastify/dist/ReactToastify.css';
import './styles/App.scss';

class App extends React.Component
{
    render()
    {
        return(
            <Fragment>
                <Header />
                <Nav />
                <Main />
                <Footer />
                <ToastContainer />
            </Fragment>
        );
    }
}

export default App;