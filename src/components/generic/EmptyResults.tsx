type Props = {
    message?: string;
    children?: React.ReactNode;
};

export const EmptyResults = ({
    message = "No dogs found",
    children,
}: Props) => {
    return (
        <div className="flex items-center justify-center flex-col rounded-[0.25rem] border py-12 my-12">
            <p className="text-gray-500">{message}</p>
            {children}
        </div>
    );
};
