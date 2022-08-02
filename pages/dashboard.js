import React, { Fragment, useEffect, useState } from 'react';
import CardCenter from '../components/center';
import Input from '../components/input';
import Meta from '../meta';
import Button from '../components/button';
import { useRouter } from 'next/router';
import { validateNumber } from '../helper';

export default function Dashboard() {
	const [value, setValue] = useState('');
	const [isError, setError] = useState(false);

	const router = useRouter();

	function handleSubmit() {
		setError(false);
		const validate = validateNumber({ number: value.trim() });

		if (validate !== false) {
			router.push(`whatsapp://send?text=Hi, Wasap!!&phone=${validate}`);
		} else {
			setError(true);
		}
	}

	useEffect(() => {
		if (value.length === 0) {
			setError(false);
		}
	}, [value]);

	return (
		<Fragment>
			<Meta
				title='Dashboard'
				desc='Cara mudah untuk mengabari seseorang di WhatsApp tanpa harus simpan nomor. Built by firmnardians for everyone.'
			/>

			<main>
				<CardCenter>
					<h3 className='m-0'>Nomor telepon</h3>

					<div className='pt-10'>
						<Input onChange={(e) => setValue(e.target.value)} type='tel' placeholder='Taruh disini nomornya.' />

						{isError && (
							<div style={{ width: '300px' }}>
								<small className='text-error pt-5 pb-5'>
									Nomor yang kamu masukan tidak valid. Pastikan nomor telepon kamu sesuai dengan region di Indonesia.
								</small>
							</div>
						)}
					</div>

					<div className='pt-10'>
						<Button onClick={() => handleSubmit()} disabled={value.length === 0} title='Buka aplikasi WhatsApp' />
					</div>
				</CardCenter>
			</main>
		</Fragment>
	);
}
