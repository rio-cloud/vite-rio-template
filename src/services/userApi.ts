import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface User {
    id: number;
    uid: string;
    password: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    avatar: string;
    gender: string;
    phone_number: string;
    social_insurance_number: string;
    date_of_birth: string;
}

// Define a service using a base URLand expected endpoints
export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://random-data-api.com/api/users' }),
    endpoints: (builder) => ({
        fetchUsersWithLimit: builder.query<User[], string>({
            query: (limit) => `random_user?size=${limit}`,
            keepUnusedDataFor: 10,
        }),
    }),
});

// Export hooks for usage in function components which are
// auto-generated based on defined endpoints
export const { useFetchUsersWithLimitQuery } = userApi;
