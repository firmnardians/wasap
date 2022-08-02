import Link from 'next/link';
import React, { memo } from 'react';
import styles from './Header.module.css';

export default memo(function Header() {
	return (
		<header className={styles.headerBackground}>
			<div className={styles.headerFlex}>
				<Link href='/'>
					<a>
						<h5 className='pointer'>WASAP</h5>
					</a>
				</Link>

				<nav>
					<ul className={styles.ulNavigation}>
						<a href='http://saiki.link/me' target='_blank' rel='noreferrer'>
							<li>
								<p>firmnardians</p>
							</li>
						</a>

						<a href='https://github.com/firmnardians/wasap' target='_blank' rel='noreferrer'>
							<li>
								<p>Github</p>
							</li>
						</a>
					</ul>
				</nav>
			</div>
		</header>
	);
});
