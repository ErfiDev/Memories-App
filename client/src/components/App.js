import React,{Fragment} from 'react';
import Header from './header/header';
import Main from './main/main';

import './styles/App.scss';

class App extends React.Component
{
    render()
    {
        return(
            <Fragment>
                <Header />
                <Main />
            </Fragment>
        );
    }
}

export default App;