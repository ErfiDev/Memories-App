import React, { Component, Fragment } from 'react';
// import {isEmpty} from 'lodash';
import {connect} from 'react-redux';
import MemorieContainer from './memoriContainer';
import NotHave from './notHave';
import initAction from '../../Actions/initData';

class LayoutMain extends Component {

    componentDidMount()
    {
        const {dispatch: dis} = this.props;
        dis(initAction());
    }

    render() { 
        const {list} = this.props;
        return (  
            <Fragment>
                {list.length <= 0 ? (
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