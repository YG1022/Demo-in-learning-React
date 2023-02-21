import React from 'react';
import { useGetStudentsQuery } from './queryStore/studentApi';

const Test6 = (): JSX.Element => {
    const { data, isSuccess, isLoading } = useGetStudentsQuery('') as {
        data: { text: string };
        isSuccess: boolean;
        isLoading: boolean;
    };

    return (
        <div>
            This is Test6!
            <div>{isLoading && <p>The website is loading!</p>}</div>
            <div>{isSuccess && <p>{data.text}</p>}</div>
        </div>
    );
};

export default Test6;
