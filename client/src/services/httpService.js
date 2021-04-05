import axios from 'axios';
import config from './config.json';

const {get} = config;
export function getHTTP()
{
    return axios.get(get);
}