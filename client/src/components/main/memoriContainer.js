import React,{Component} from 'react';
import {connect} from 'react-redux';
import Post from './Post';

class MemorieContainer extends Component {
    render() {

        let {data} = this.props;

        return (  
            <div id="memories-container">
                {data.map(item => (
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

function mapStateToProps(state){ return state.list }
 
export default connect(mapStateToProps)(MemorieContainer);