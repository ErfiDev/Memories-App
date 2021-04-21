function findOne(id)
{
    return async (dispatch , getState)=>{
        let list = getState().List;
        let filter = list.filter(item => item._id === id);
        let {title , description , creator, tags , _id} = filter[0];
        let convertTagsToString = tags.join(' ');

        await dispatch({type: 'TITLE', payload: title});
        await dispatch({type: 'DESCRIPTION', payload: description});
        await dispatch({type: 'CREATOR', payload: creator});
        await dispatch({type: 'TAGS', payload: convertTagsToString});
        await dispatch({type: 'ID', payload: _id});
    };
}

export default findOne;