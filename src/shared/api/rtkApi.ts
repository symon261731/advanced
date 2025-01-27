import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USER_LOCAlSTORAGE_KEY } from 'shared/const/localStorage';

export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem(USER_LOCAlSTORAGE_KEY) || '';

            if (token) {
                headers.set('Authorization', token);
            }

            return headers;
        },
    }),
    endpoints: () => ({}),
});
