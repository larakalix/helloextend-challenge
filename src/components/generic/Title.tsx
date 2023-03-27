type Props = {
    className?: string;
    children: JSX.Element | JSX.Element[];
};

export const Title = ({ className, children }: Props) => {
    return (
        <h1 className={`text-[1.25rem] font-bold leading-8 ${className}`}>
            {children}
        </h1>
    );
};
