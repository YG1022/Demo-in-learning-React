import React from 'react';
import { useGetStudentsQuery } from './queryStore/studentApi';

type stuQuery = {
    data: {
        text: string;
    };
    isSuccess: boolean;
    isLoading: boolean;
};

const Test6 = (): JSX.Element => {
    // const queryData = useGetStudentsQuery('', {
    //     pollingInterval: 0,
    //     skip: false,
    //     refetchOnMountOrArgChange: false,
    //     refetchOnFocus: false,
    // });
    // console.log(queryData);

    const { data, isSuccess, isLoading } = useGetStudentsQuery('') as stuQuery;

    return (
        <div>
            This is Test6!
            <div>{isLoading && <p>The website is loading!</p>}</div>
            <div>{isSuccess && <p>{data.text}</p>}</div>
        </div>
    );
};

export default Test6;
