"use client";
import Image from "next/image";
import clsx from "clsx";
import { AiFillHeart } from "react-icons/ai";
import { useFavesStore } from "@/stores/faves/FaveStore";

type Props = {
    image: string;
};

export const DogCard = ({ image }: Props) => {
    const { saveFave, isFave } = useFavesStore((state) => state);
    const isFavorite = isFave(image);

    return (
        <div className="relative rounded-[0.25rem] overflow-hidden">
            <button
                onClick={() => saveFave(image)}
                className="absolute bottom-2 right-2"
            >
                <AiFillHeart
                    className={clsx({
                        "text-red-500 text-[1rem]": isFavorite,
                        "text-white text-[1rem]": !isFavorite,
                    })}
                />
            </button>
            <Image
                src={image}
                alt="Picture of the DocCEO"
                width={256}
                height={256}
                loading="lazy"
                className="w-full h-40 md:h-64 object-cover"
            />
        </div>
    );
};
