"use client";
import PageErrorMessage from "@/components/generic/PageErrorMessage";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return <PageErrorMessage error={error} reset={reset} />;
}
