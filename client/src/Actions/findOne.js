import {findOneHTTP} from '../services/httpService';

function findOne(id)
{
    return async (dispatch)=>{
        let {data} = await findOneHTTP(id);
        let {title , description , creator, tags} = data;
        let convertTagsToString = tags.join(' ');

        await dispatch({type: 'TITLE', payload: title});
        await dispatch({type: 'DESCRIPTION', payload: description});
        await dispatch({type: 'CREATOR', payload: creator});
        await dispatch({type: 'TAGS', payload: convertTagsToString});
    };
}

export default findOne;