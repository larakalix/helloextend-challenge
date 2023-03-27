import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { Dog } from "@/types/schemas/dog";
import { getIdFromDocApiImageUrl } from "@/utils/utils";

type FaveState = {
    faves: Map<string, string>;
    saveFave: (fave: string) => void;
    removeFave: (id: string) => void;
    isFave: (dog: string) => boolean;
};

export const useFavesStore = create<FaveState>()(
    devtools(
        persist(
            (set, get) => ({
                faves: new Map().set(
                    "20180706_194432",
                    "https://images.dog.ceo/breeds/waterdog-spanish/20180706_194432.jpg"
                ),
                saveFave: (dog) => {
                    const faves = get().faves;
                    const id = getIdFromDocApiImageUrl(dog);

                    console.log(faves);

                    // if (faves.has(dog)) {
                    //     faves.delete(dog);
                    // } else faves.set(id, dog);

                    // set({ faves });
                },
                removeFave: (id) => {
                    const faves = get().faves;
                    faves.delete(id);

                    set({ faves });
                },
                isFave: (dog) => {
                    const id = getIdFromDocApiImageUrl(dog);
                    const faves = get().faves;

                    return faves.has(id);
                },
            }),
            {
                name: "fave-storage",
            }
        )
    )
);
