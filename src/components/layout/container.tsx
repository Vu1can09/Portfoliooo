import * as React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export const Container: React.FC<ContainerProps> = ({
    className = "",
    children,
    ...props
}) => {
    return (
        <div
            className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};
