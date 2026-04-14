import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dwsApi = createApi({
    reducerPath: 'dwsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_PROD_URL,
        prepareHeaders: (headers) => {
            headers.set('X-Api-Key', process.env.NEXT_PUBLIC_PROD_API_KEY!);
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        // Endpoints removed as we moved to a WhatsApp enquiry system
    }),
});

export const { } = dwsApi;
