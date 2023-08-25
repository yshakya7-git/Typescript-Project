import { create } from "zustand";

export interface ZustandInterface {
    uname: string;
    password: string;
    setUname: (value: string) => void;
    setPassword: (value: string) => void;

}

export const useSessionStore = create<ZustandInterface>((set) => ({
    uname: "",
    password: "",
    setUname: (value) => set({uname: value}),
    setPassword: (value) => set({password: value}),
}));