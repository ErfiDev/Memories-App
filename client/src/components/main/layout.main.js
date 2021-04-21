import React, {Fragment,useEffect} from 'react';
import {isEmpty} from 'lodash';
import {useSelector,useDispatch} from 'react-redux';
import MemorieContainer from './memoriContainer';
import NotHave from './notHave';
import initData from '../../Actions/initData';

const Layout = () => {
    const List = useSelector(state => state.List);
    const dis = useDispatch();

    useEffect(()=>{
        dis(initData());
        // eslint-disable-next-line
    } , []);

    return (  
        <Fragment>
            {List.err ? (
                <NotHave msg={List.err.message} />
            ) : 
                isEmpty(List) ? (
                    <NotHave />
                ) : (
                    <MemorieContainer />
                )
            }
        </Fragment>
    );
}
 
export default Layout;