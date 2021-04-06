import {createStore , applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';
import Reducers from './Reducers/index';
import initAction from './Actions/initData';

const Store = createStore(
    Reducers,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

Store.dispatch(initAction());

export default Store;