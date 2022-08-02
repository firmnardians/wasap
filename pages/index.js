import Image from 'next/image';
import { Fragment } from 'react';
import CardCenter from '../components/center';
import Meta from '../meta';
import styles from '../styles/Home.module.css';
import Button from '../components/button';
import Link from 'next/link';

export default function Home() {
	return (
		<Fragment>
			<Meta
				title='Welcome'
				desc='Cara mudah untuk mengabari seseorang di WhatsApp tanpa harus simpan nomor. Built by firmnardians for everyone.'
			/>

			<main>
				<CardCenter>
					<div className={styles.wrapSlogan}>
						<Image src='/logo.png' width='180px' height='180px' alt='Logo Wasap' />

						<p>Cara mudah untuk mengabari seseorang di WhatsApp tanpa harus simpan nomor.</p>

						<Link href='/dashboard'>
							<a>
								<Button title='Cobain Sekarang' />
							</a>
						</Link>
					</div>
				</CardCenter>
			</main>
		</Fragment>
	);
}
