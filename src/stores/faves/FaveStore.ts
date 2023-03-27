import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { getIdFromDocApiImageUrl } from "@/utils/utils";

type State = {
    id: string;
    dog: string;
};

type FaveState = {
    faves: Map<string, string>;
    saveFave: (fave: string) => void;
    removeFave: (id: string) => void;
    isFave: (dog: string) => boolean;
};

export const useFavesStore = create<FaveState>((set, get) => ({
    faves: new Map(),
    saveFave: (dog) => {
        const faves = get().faves;
        const id = getIdFromDocApiImageUrl(dog);

        if (faves.has(id)) {
            faves.delete(id);
        } else faves.set(id, dog);
        set({ faves });
    },
    removeFave: (id) => {
        const faves = get().faves;
        faves.delete(id);
        set({ faves });
    },
    isFave: (dog) => {
        const id = getIdFromDocApiImageUrl(dog);
        return get().faves.has(id);
    },
}));
