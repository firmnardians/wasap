import Head from 'next/head';

/**
 *
 * @param {string} title
 * @param {string} desc
 *
 * @returns
 */

export default function Meta({ title, desc }) {
	return (
		<Head>
			<title>{title} - WASAP</title>
			<meta name='description' content={desc} />
			<link rel='icon' href='/favicon.ico' />
		</Head>
	);
}
