export type RandomParams = {
    count?: number;
};

export type ByBreedParams = RandomParams & {
    breed: string;
};

export type BreedServiceResponse = {
    message: string[];
    status: string;
};
