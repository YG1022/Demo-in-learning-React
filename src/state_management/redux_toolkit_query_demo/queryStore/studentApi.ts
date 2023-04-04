import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

const studentApi = createApi({
    reducerPath: 'studentApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://312d296d-f37a-449b-b98b-daff3775acfb.mock.pstmn.io/api',
    }),
    endpoints(build) {
        return {
            getStudents: build.query({
                query() {
                    return '/text';
                },
                transformErrorResponse(baseQueryReturnValue) {
                    return baseQueryReturnValue;
                },
            }),
        };
    },
});

export const { useGetStudentsQuery } = studentApi;
export default studentApi;
