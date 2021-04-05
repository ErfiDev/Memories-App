import React, { Component, Fragment } from 'react';
import {isEmpty} from 'lodash';
import {connect} from 'react-redux';
import MemorieContainer from './memoriContainer';
import NotHave from './notHave';

class LayoutMain extends Component {
    render() { 
        const {list} = this.props;

        return (  
            <Fragment>
                {isEmpty(list) ? (
                    <NotHave />
                ) : (
                    <MemorieContainer />
                )}   
            </Fragment>
        );
    }
}

function mapStateToProp(state)
{
    return state;
}
 
export default connect(mapStateToProp)(LayoutMain);