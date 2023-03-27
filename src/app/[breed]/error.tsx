"use client";
import PageErrorMessage from "@/components/generic/PageErrorMessage";
import { SearchBar } from "@/components/generic/SearchBar";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <section className="flex flex-col">
            <SearchBar message="Oh no 🥺, wanna try again?" />
            <PageErrorMessage error={error} reset={reset} />
        </section>
    );
}
