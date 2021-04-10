import {combineReducers } from 'redux';
import list from './list';
import {title , description , creator , tags , file} from './data';

const Reducers = combineReducers({
    list,
    title,
    description,
    creator,
    tags,
    file
});

export default Reducers;