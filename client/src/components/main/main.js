import React,{Component} from 'react';
import {Switch , Route} from 'react-router-dom';
import Layout from './layout.main';
import Form from './form';

class Main extends Component {
    render() { 
        return (  
            <main id="main">
                <Switch>
                    <Route path="/createPost" exact component={Form} />
                    <Route path="/" exact component={Layout} />
                </Switch>
            </main>
        );
    }
}
 
export default Main;