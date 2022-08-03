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

			<meta property='og:description' content={desc} />
			<meta property='og:site_name' content={title} />
			<meta property='og:title' content={title} />
			<meta property='og:type' content='website' />
			<meta name='keywords' content='Wasap, Chat seseorang di WhatsApp tanpa simpan nomor, WhatsApp Tool' />
		</Head>
	);
}
