import React,{Component} from 'react';
import {connect} from 'react-redux';
import Post from './Post';

class MemorieContainer extends Component {
    render() {
        let {list} = this.props;
        return (  
            <div id="memories-container">
                {list.map(item => (
                    <Post 
                        id={item._id} 
                        title={item.title} 
                        description={item.description} 
                        creator={item.creator} 
                        file={item.file}
                        date={item.createdAt}
                        tags={item.tags}
                        like={item.likeCount}
                    />
                ))}
            </div>
        );
    }
}

function mapStateToProps(state){ return state }
 
export default connect(mapStateToProps)(MemorieContainer);