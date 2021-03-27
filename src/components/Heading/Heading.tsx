import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

type HeadingPropsType = HTMLAttributes<HTMLHeadingElement> & {
    as?: React.ElementType;
    className?: string;
    style?: React.CSSProperties;
};

const StyledHeading = styled.h1`
    color: ${({ theme }) => theme.colors?.primaryColor};
`;

export const Heading: React.FC<HeadingPropsType> = ({ children, className, style, as }) => {
    return (
        <StyledHeading as={as} className={classNames(className)} style={style}>
            {children}
        </StyledHeading>
    );
};

export default Heading;
