import { Children } from "react";
import { EmptyResults } from "../generic/EmptyResults";
import { DogCard } from "./DogCard";

type Props = {
    dogs: string[];
};

export const DogList = ({ dogs }: Props) => {
    if (dogs?.length === 0) return <EmptyResults />;

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10">
            {Children.toArray(dogs.map((image) => <DogCard image={image} />))}
        </div>
    );
};
