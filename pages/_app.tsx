import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'


export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Alexwe - software developer</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content={'alexweb'} />
				{/* Animate CSS */}
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
			</Head>

			<Component {...pageProps} />

		</>
	)
}