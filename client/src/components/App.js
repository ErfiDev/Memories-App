import React,{Fragment} from 'react';
import Footer from './footer/footer';
import Header from './header/header';
import Main from './main/main';
import Nav from './nav/nav';

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
            </Fragment>
        );
    }
}

export default App;