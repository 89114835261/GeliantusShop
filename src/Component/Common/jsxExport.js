import React from 'react';

export const Arrow = ({ text, className }, func, style) => {
    return <div onClick={() => func && func(text)} className={style[className]}>{text}</div>;
}