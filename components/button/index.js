import React, { memo } from 'react';
import styles from './Button.module.css';

/**
 *
 * @param {String} title
 * @param {Boolean} disabled
 * @param {MouseEvent} onClick
 *
 * @returns
 */

export default memo(function Button({ title = 'Title', disabled, onClick }) {
	return (
		<button onClick={onClick} disabled={disabled} className={styles.button}>
			{title}
		</button>
	);
});
