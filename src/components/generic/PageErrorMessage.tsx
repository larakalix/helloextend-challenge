import Link from "next/link";
import { Title } from "./Title";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { ErrorProps } from "@/types/error";
import { EmptyResults } from "./EmptyResults";

const PageErrorMessage = ({ error, reset }: ErrorProps) => {
    return (
        <>
            <Title>
                <span className="flex items-center gap-2">
                    Oh no! <HiOutlineEmojiSad />
                </span>
            </Title>
            <EmptyResults message="Something went wrong!">
                <span className="my-2 font-bold">{error.message}</span>
                <div className="flex flex-col items-center space-y-2 mt-2">
                    <Link
                        href="/"
                        className="px-6 py-2 bg-blue-500 text-white rounded-[0.25rem]"
                    >
                        Go home
                    </Link>
                    <span>or</span>
                    <button
                        className="px-6 py-2 bg-green-500 text-white rounded-[0.25rem]"
                        onClick={() => reset()}
                    >
                        Try again
                    </button>
                </div>
            </EmptyResults>
        </>
    );
};

export default PageErrorMessage;
