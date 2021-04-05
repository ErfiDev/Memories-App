import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';

class Nav extends Component {
    render() { 
        return (  
            <div id="nav">
                <Button variant="contained" color="perimary" size="sm" >
                    <Link 
                        to="/createPost" 
                        style={{textDecoration: 'none' , color: 'inherit'}}
                        >
                        Add Memorie
                    </Link>
                </Button>
            </div>
        );
    }
}
 
export default Nav;