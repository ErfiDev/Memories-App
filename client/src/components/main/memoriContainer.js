import React,{Component} from 'react';
import Memories from './memories';

class MemorieContainer extends Component {
    render() { 
        return (  
            <div id="memories-container">
                <Memories />
            </div>
        );
    }
}
 
export default MemorieContainer;