import React from 'react';
import {useStore} from './zustandStore/useStore';

const Test9 = () => {
    const ShowCount = () => {
        const count = useStore(state => state.count);
        return <div>count: {count}</div>;
    };
    const ShowRandomData = () => {
        const randomData = useStore(state => state.randomData);
        return <div>randomData: {randomData}</div>;
    };
    const IncreaseCount = () => {
        const increaseCount = useStore(state => state.increaseCount);
        return <button onClick={increaseCount}>increase</button>;
    };
    const MinusCount = () => {
        const minusCount = useStore(state => state.minusCount);
        return <button onClick={minusCount}>minus</button>;
    };
    const ChangeRandomData = () => {
        const changeRandomData = useStore(state => state.changeRandomData);
        return <button onClick={changeRandomData}>change random data</button>;
    };
    const bears = useStore((state) => state.bears);
    const increaseBears = useStore((state) => state.increaseBears);

    return (
        <div>
            <ShowCount />
            <ShowRandomData />
            <IncreaseCount />
            <MinusCount />
            <ChangeRandomData />
            <div>bears: {bears}</div>
            <button onClick={increaseBears}>increase bears</button>
        </div>
    );
};

export default Test9;
