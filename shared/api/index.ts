import {fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const baseQueryFetch = fetchBaseQuery({
    baseUrl: `http://localhost:3030`
})