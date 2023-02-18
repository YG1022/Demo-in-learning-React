import React, {useState} from "react";

const Test3 = () => {
    const [status, setStatus] = useState<boolean>(false);

    const toggleStatus = () => {
        setStatus(!status);
    };

    return (
        <div>
            <span>This is Test3!</span>
            <br/>
            <span>{status ? "Hey!!!" : "What???"}</span>
            <div>
                <button onClick={toggleStatus}>Toggle</button>
            </div>
        </div>
    );
};

export default Test3;
