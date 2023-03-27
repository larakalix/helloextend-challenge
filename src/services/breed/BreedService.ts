import type {
    RandomParams,
    ByBreedParams,
    BreedServiceResponse,
} from "@/types/services/breed-service";

const baseUrl = "https://dog.ceo/api";
const baseFetch = async (uri: string): Promise<BreedServiceResponse> => {
    const data = await fetch(`${baseUrl}/${uri}`).then(
        (res) => res.json() as Promise<BreedServiceResponse>
    );

    if (data.status === "error")
        throw new Error(`Error fetching data from ${uri}`);

    return data;
};

export const BreedService = () => {
    const getBreeds = async () => {
        const data = await baseFetch("breeds/list/all");

        return data;
    };

    const getRandom = async ({ count = 9 }: RandomParams) => {
        const data = await baseFetch(`breeds/image/random/${count}`);

        return data;
    };

    const getByBreed = async ({ breed, count = 9 }: ByBreedParams) => {
        const data = await baseFetch(`breed/${breed}/images/random/${count}`);

        return data;
    };

    return {
        getBreeds,
        getRandom,
        getByBreed,
    };
};
