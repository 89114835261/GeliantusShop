import React from 'react';
import f from './FormControl.module.scss';

export let Input = ({input, meta, ...props}) => {
    const hasError = (meta.touched && meta.error);
    const isOk = (meta.touched && !meta.error);
    return(
        <div className={f.inputBox + ' ' + (hasError ? f.error : '') + ' ' + (isOk ? f.ok : '')}>
            <input {...input} {...props}/>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}