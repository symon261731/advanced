import axios from 'axios';
import { USER_LOCAlSTORAGE_KEY } from 'shared/const/localStorage';

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(USER_LOCAlSTORAGE_KEY),
    },
});
