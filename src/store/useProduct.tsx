import { create } from "zustand";

export interface ZustandInterface {
    product: string;
    setProduct: (value: string) => void;

}

export const useStore = create<ZustandInterface>((set) => ({
    product:"",
    setProduct: (value) => set({product: value})
}));