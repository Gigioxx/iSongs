import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const VITE_SHAZAM_CORE_RAPID_API_KEY = import.meta.env
  .VITE_SHAZAM_CORE_RAPID_API_KEY;

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': VITE_SHAZAM_CORE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
  },
};

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', VITE_SHAZAM_CORE_RAPID_API_KEY);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;