import React from 'react';
import { atom, selector, useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';

const textState = atom({
    key: 'textState',
    default: '',
});

const countState = selector({
    key: 'charCountState',
    get: ({ get }) => {
        const text = get(textState);
        return text.length;
    },
});

const Test8: React.FC = () => {
    const [text, setText] = useRecoilState(textState);
    const count = useRecoilValue(countState);
    const reset = useResetRecoilState(textState);

    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        setText(event.target.value);
    };

    const handleClick = () => {
        reset();
    };

    return (
        <div>
            <input onChange={handleOnChange} value={text} />
            <div>text: {text}</div>
            <div>count: {count}</div>
            <button onClick={handleClick}>reset</button>
        </div>
    );
};

export default Test8;
