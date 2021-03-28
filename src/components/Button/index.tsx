/* eslint-disable prettier/prettier */
import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

type ButtonPropsType = {
    title?: string;
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonPropsType> = ({ children, title, style, className, onClick, ...rest }) => {
    return (
        <button className={classNames(styles.btn, className)} style={style} onClick={onClick} {...rest}>
            {title ? title : children}
        </button>
    );
};

export default Button;
