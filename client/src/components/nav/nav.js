import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';

class Nav extends Component {
    render() { 
        return (  
            <div id="nav">
                <Link 
                    to="/createPost" 
                    style={{textDecoration: 'none' , color: 'inherit'}}
                    >
                    <Button variant="contained" color="perimary" size="sm" >
                        Add Memorie
                    </Button>
                </Link>
            </div>
        );
    }
}
 
export default Nav;