"use client";
import { AiFillHeart } from "react-icons/ai";
import { Title } from "../generic/Title";
import { useFavesStore } from "@/stores/faves/FaveStore";
// import { DogList } from "../home/DogList";

export const FaveList = () => {
    const { faves } = useFavesStore((state) => state);
    const dogs = Array.from(faves).map(([name, value]) => value);

    return (
        <div className="w-full border-t mt-10">
            <div className="pt-10">
                <Title className="flex items-center gap-4">
                    <AiFillHeart className="w-5 text-red-500" />
                    <span>Favorites</span>
                </Title>

                {/* <DogList dogs={dogs} /> */}
            </div>
        </div>
    );
};
