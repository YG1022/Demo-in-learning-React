import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stateType } from './store';
import { Dispatch } from '@reduxjs/toolkit';
import { setStuName } from './store/stuSlice';
import { setSchName } from './store/schSlice';

let count: number = 1;

const Test5 = (): JSX.Element => {
    // const student = useSelector((state: stateType) => state.student) as stuType;
    // const school = useSelector((state: stateType) => state.school) as schType;
    const { student, school } = useSelector((state: stateType) => state);

    const dispatch: Dispatch = useDispatch();

    const setNameHandler = (): void => {
        // dispatch({ type: "stu/setName", payload: "Oliver" });
        dispatch(setStuName('Oliver'));
        dispatch(setSchName('Kasis'));
    };

    return (
        <div>
            <div>This is Test5!</div>
            <div>The current count is: {count}</div>
            <div>
                {student.name} - {student.age} - {student.gender}
            </div>
            <div>
                {school.name} - {school.address}
            </div>
            <button onClick={setNameHandler}>ChangeName</button>
        </div>
    );
};

export default Test5;
