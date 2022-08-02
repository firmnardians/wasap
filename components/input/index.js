import React, { memo } from 'react';
import style from './Input.module.css';

/**
 *
 * @param {String} type
 * @param {String} placeholder
 * @param {MouseEvent} onChange
 * @returns
 */
export default memo(function Input({ onChange, type = 'text', placeholder = 'Input text...' }) {
	return <input onChange={onChange} className={style.input} type={type} placeholder={placeholder} />;
});
