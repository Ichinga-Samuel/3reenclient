import React from 'react';

interface HeadingProps {
    title?: string;
    className?: string;
    style?: React.CSSProperties;
}

const Heading: React.FC<HeadingProps> = ({ children, className, style, ...rest }) => {
    return (
        <h1 className={className} style={style} {...rest}>
            {children}
        </h1>
    );
};

export default Heading;
