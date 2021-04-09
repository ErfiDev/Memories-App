import {postHTTP} from '../services/httpService';
import {toast} from 'react-toastify';


function postAction(e)
{
    return async ()=>{
        const {data} = await postHTTP(e);
        if(data.status === 201)
        { 
            return toast.success('Created Successfully!' , {
                position: 'bottom-left',
                closeOnClick: true
            });
        }
        if(data.status === 401)
        { 
            return toast.info(data.msg , {
                position: 'bottom-left',
                closeOnClick: true
            });
        }
        if(data.status === 406)
        { 
            return toast.error(data.msg , {
                position: 'bottom-left',
                closeOnClick: true
            });
        }
    }
}

export default postAction