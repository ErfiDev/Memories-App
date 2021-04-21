import {combineReducers } from 'redux';
import list from './list';
import {title , description , creator , tags , file , id} from './data';

const Reducers = combineReducers({
    list,
    title,
    description,
    creator,
    tags,
    file,
    id
});

export default Reducers;