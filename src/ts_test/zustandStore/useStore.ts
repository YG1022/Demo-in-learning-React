import { create } from "zustand";
interface storeState {
    count: number;
    randomData: number;
    increaseCount: () => void;
    minusCount: () => void;
    changeRandomData: () => void;
    bears: number;
    increaseBears: () => void;
}
    

export const useStore = create<storeState>((set, get) => ({
        count: 0,
        randomData: 0,
        increaseCount: () => {
            set({ count: get().count + 1 });
        },
        minusCount: () => {
            set({ count: get().count - 1 });
        },
        changeRandomData: () => {
            set({ randomData: Math.random() });
        },
        bears: 0,
        increaseBears: () => {
            set({ bears: get().bears + 1 });
        }
    })
);
    