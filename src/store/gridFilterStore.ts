import create from 'zustand';

interface gridFilterStore {
    clickedFilter: string;
    setFilter: (filter: string) => void;
}

export const gridFilterStore = create<gridFilterStore>((set) => ({
    clickedFilter: 'ALL',
    setFilter: (clickedFilter) => set({ clickedFilter })
}));