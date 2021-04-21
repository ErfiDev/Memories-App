import {findOneHTTP} from '../services/httpService';

function findOne(id)
{
    return async (dispatch)=>{
        let {data} = await findOneHTTP(id);
        let {title , description , creator, tags , _id} = data;
        let convertTagsToString = tags.join(' ');

        await dispatch({type: 'TITLE', payload: title});
        await dispatch({type: 'DESCRIPTION', payload: description});
        await dispatch({type: 'CREATOR', payload: creator});
        await dispatch({type: 'TAGS', payload: convertTagsToString});
        await dispatch({type: 'ID', payload: _id});
    };
}

export default findOne;