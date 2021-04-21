import {combineReducers } from 'redux';
import List from './list';
import {title , description , creator , tags , file , id} from './data';

const Reducers = combineReducers({
    List,
    title,
    description,
    creator,
    tags,
    file,
    id
});

export default Reducers;