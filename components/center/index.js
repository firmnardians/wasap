import React, { memo } from 'react';
import styles from './Center.module.css';

/**
 *
 * @param {ChildNode} children
 * @returns
 */

export default memo(function CardCenter({ children }) {
	return <div className={styles.center}>{children}</div>;
});
