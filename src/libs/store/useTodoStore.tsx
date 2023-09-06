import { create } from 'zustand';
import { Todos } from '../interface/Todos';

export const useTodoStore = create<Todos>((set) => ({
    title: '',
    setTitle: (title) =>
        set((state) => ({
            ...state,
            title
        })),
    description: '',
    setDescription: (description) =>
        set((state) => ({
            ...state,
            description
        })),
    categories: '',
    setCategories: (categories) =>
        set((state) => ({
            ...state,
            categories
        })),
}));
