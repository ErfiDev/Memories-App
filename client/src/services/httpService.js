import axios from 'axios';
import config from './config.json';

const {get , post} = config;

export const getHTTP = ()=> axios.get(get);

export const postHTTP = (data)=> axios.post(post , JSON.stringify(data));