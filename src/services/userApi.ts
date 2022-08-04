import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface User {
    name: {
        title: string;
        first: string;
        last: string;
    };
    email: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
}

// Define a service using a base URLand expected endpoints
export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://randomuser.me/api/' }),
    endpoints: (builder) => ({
        fetchUsers: builder.query<User[], string>({
            query: () => ({
                url: '?results=10&inc=name,email,picture',
                responseHandler: async (response: Response) => {
                    const data = await response.json();
                    return data.results;
                },
            }),
            keepUnusedDataFor: 10,
        }),
    }),
});

// Export hooks for usage in function components which are
// auto-generated based on defined endpoints
export const { useFetchUsersQuery } = userApi;
