import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { stateType, stuType } from "./store";
import { Dispatch } from "@reduxjs/toolkit";

let count: number = 1;

/*function reducer(state: number, action) {
    switch (action.type) {
        case "ADD":
            return state + 1;
        case "SUB":
            return state - 1;
        default:
            return state;
    }
}*/

const Test5 = () => {
    const student: stuType = useSelector((state: stateType) => state.student);
    console.log(JSON.stringify(student));

    const dispatch: Dispatch = useDispatch();

    const setNameHandler = (): void => {
        dispatch({ type: "stu/setName", payload: "Oliver" });
    }

    return (
        <div>
            <div>This is Test5!</div>
            <div>The current count is: {count}</div>
            <div>{student.name} - {student.age} - {student.gender}</div>
            <button onClick={setNameHandler}>ChangeName</button>
        </div>
    )
}

export default Test5;