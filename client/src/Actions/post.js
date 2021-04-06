import {postHTTP} from '../services/httpService';

function postAction(data)
{
    return async (dispatch)=>{
        try 
        {
            const e = data;
            const sending = await postHTTP(e);
            console.log(sending);
        } 
        catch (error) 
        {
            console.log(error);
        }
    }
}

export default postAction