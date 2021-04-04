import React,{Component} from 'react';

class Header extends Component {
    render() { 
        return (
            <div id="header">  
                <span>
                    Memories
                </span>
                <span id="header-svg-container">
                    <img id="header-svg" src="./img/pictures.svg" alt="svg" />
                </span>
            </div>
        );
    }
}
 
export default Header;