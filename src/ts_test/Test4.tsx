import React, { useState } from 'react';

interface CarType {
    id: number;
    category: string;
    horsepower: number;
    color: string;
    price?: number;
}

class Car implements CarType {
    id: number;
    category: string;
    horsepower: number;
    color: string;

    constructor(id: number, category: string, horsepower: number, color: string) {
        this.id = id;
        this.category = category;
        this.horsepower = horsepower;
        this.color = color;
    }
}

const Test4 = () => {
    const testCar = new Car(1, 'Jetta', 10, 'red');
    const [carsList, setCarsList] = useState<CarType[]>([testCar]);

    const addCar = (): void => {
        const carInput: HTMLInputElement = document.getElementById('car-input') as HTMLInputElement;

        const inputDetail = String(carInput.value).split(',');
        const newCar: CarType = new Car(
            parseInt(inputDetail[0]),
            inputDetail[1],
            parseInt(inputDetail[2]),
            inputDetail[3]
        );

        carInput.value = '';

        setCarsList((preList: CarType[]) => [...preList, newCar]);
    };
    const deleteCar = (id: number): void =>
        setCarsList((preList: CarType[]) => preList.filter((perCar: CarType) => perCar.id !== id));

    const carsDisplayInfo: JSX.Element[] = carsList.map((item: CarType) => (
        <div key={item.id}>
            {`${item.id} - ${item.category} - ${item.horsepower} - ${item.color}`}
            <button onClick={() => deleteCar(item.id)}>Delete</button>
        </div>
    ));

    return (
        <div>
            <div>
                <input type="text" id="car-input" />
                <button onClick={() => addCar()}>Add</button>
            </div>
            <div className="cars-board">{carsDisplayInfo}</div>
        </div>
    );
};

export default Test4;
