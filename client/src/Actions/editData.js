export function editData(e , item)
{
    return async (dispatch)=>{   
        await dispatch({type: item , payload: e.target.value})
    };
}

export function editFile(e)
{
    return async (dispatch)=>{   
        await dispatch({type: 'FILE' , payload: e})
    };
}

export function clearData()
{
    return async (dispatch)=>{   
        await dispatch({type: 'CLEAR_TITLE'});
        await dispatch({type: 'CLEAR_DESCRIPTION'});
        await dispatch({type: 'CLEAR_CREATOR'});
        await dispatch({type: 'CLEAR_TAGS'});
        await dispatch({type: 'CLEAR_FILE'});
    };
}
