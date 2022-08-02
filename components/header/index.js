import React from 'react';
import styles from './Header.module.css';

export default function Header() {
	return (
		<header className={styles.headerBackground}>
			<div className={styles.headerFlex}>
				<h5>WASAP</h5>

				<nav>
					<ul className={styles.ulNavigation}>
						<a href='http://saiki.link/me' target='_blank' rel='noreferrer'>
							<li>
								<p>firmnardians</p>
							</li>
						</a>

						<a href=''>
							<li>
								<p>Github</p>
							</li>
						</a>
					</ul>
				</nav>
			</div>
		</header>
	);
}
