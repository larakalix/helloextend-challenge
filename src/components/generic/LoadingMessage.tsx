import { Children } from "react";
import { Title } from "./Title";
import { SkeletonLoader } from "./SkeletonLoader";

type Props = {
    message?: string;
};

export const LoadingMessage = ({ message = "Loading..." }) => {
    return (
        <section className="w-full flex flex-col">
            <Title className="mb-5">
                <span>{message}</span>
            </Title>

            <section className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10">
                {Children.toArray(
                    Array.from({ length: 12 }).map((_, i) => <SkeletonLoader />)
                )}
            </section>
        </section>
    );
};
