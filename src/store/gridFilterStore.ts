import create from 'zustand';

interface gridFilterStore {
    filter: string;
    setFilter: (filter: string) => void;
}

export const gridFilterStore = create<gridFilterStore>((set) => ({
    filter: 'ALL',
    setFilter: (filter) => set({ filter })
}));