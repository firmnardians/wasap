import React from 'react';
import styles from './Button.module.css';

/**
 *
 * @param {string} title
 * @returns
 */

export default function Button({ title = 'Title' }) {
	return <button className={styles.button}>{title}</button>;
}
