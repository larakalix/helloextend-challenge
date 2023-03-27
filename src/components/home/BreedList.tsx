import Link from "next/link";
import { BreedServiceResponse } from "@/types/services/breed-service";

type Props = {
    breeds: BreedServiceResponse;
};

export const BreedList = ({ breeds }: Props) => {
    const keys = Object.keys(breeds.message);

    return (
        <select className="block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500">
            {keys.map((breed: any) => (
                <option key={breed} className="text-gray-500">
                    {breed}
                </option>
            ))}
        </select>
    );
};
