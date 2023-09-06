export interface Todos {
    title: string;
    setTitle: (title: string) => void;
    description: string;
    setDescription: (description: string) => void;
    categories: string;
    setCategories: (categories: string) => void;
}