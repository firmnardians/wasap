import React from 'react';
import styles from './Center.module.css';

/**
 *
 * @param {ChildNode} children
 * @returns
 */

export default function CardCenter({ children }) {
	return <div className={styles.center}>{children}</div>;
}
