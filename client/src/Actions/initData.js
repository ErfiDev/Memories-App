import {getHTTP} from '../services/httpService';

function initData()
{
    return async(dispatch)=>{
        try
        {
            const data = await getHTTP();
            await dispatch({type: 'INIT_LIST' , payload: data});
        }
        catch(err){console.log(err)}
    }
}

export default initData;