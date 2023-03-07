import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';

type originDataType = { id: number; name: string; gender: string; address: string };

const originData: originDataType = {
    id: 1,
    name: 'Oliver',
    gender: 'male',
    address: 'Kasis',
};

const reducer = (state = originData, action: { type: string; payload: string }): originDataType => {
    switch (action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.payload,
            };

        case 'SET_GENDER':
            return {
                ...state,
                gender: action.payload,
            };

        default:
            return state;
    }
};

export const Test7Store = createStore(reducer);

const Test7 = () => {
    const person = useSelector((state: originDataType) => state);
    const dispatch = useDispatch();

    return (
        <>
            <div>
                {person.name}-{person.gender}
            </div>
            <button
                onClick={() => {
                    dispatch({ type: 'SET_GENDER', payload: 'female' });
                }}
            >
                change gender
            </button>
            <button
                onClick={() => {
                    dispatch({ type: 'SET_NAME', payload: 'Glacer' });
                }}
            >
                change name
            </button>
        </>
    );
};

export default Test7;
