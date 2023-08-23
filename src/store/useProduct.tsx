import { create } from "zustand";

export interface ProductInterface {
    title: string;
    description: string;
    price: number;
    setTitle: (value: string) => void;
    setDescription: (value: string) => void;
    setPrice: (value: number) => void;

}

export const useProductStore = create<ProductInterface>((set) => ({
    title:"",
    description: "",
    price: 0,
    setTitle: (value) => set({title: value}),
    setDescription: (value) => set({description: value}),
    setPrice: (value)=> set({price: value}),
}));