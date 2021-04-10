import React,{Component} from 'react';
import {Switch , Route} from 'react-router-dom';
import Layout from './layout.main';
import Form from './form';
import UpdatePost from './updatePost';

class Main extends Component {
    render() { 
        return (  
            <main id="main">
                <Switch>
                    <Route path="/update" component={UpdatePost} />
                    <Route path="/createPost" component={Form} />
                    <Route path="/" exact component={Layout} />
                </Switch>
            </main>
        );
    }
}
 
export default Main;