import '@styles/globals.css'

import { Fira_Sans_Condensed } from 'next/font/google'

import type { AppProps } from 'next/app'


const FIRA_SANS = Fira_Sans_Condensed({
	subsets: [ 'latin' ],
	variable: '--font-fira-sans-condensed',
	weight: [ '300', '400', '600', '700', '800' ]
})

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<Component
			{ ...pageProps }
			fonts={ FIRA_SANS.variable }
		/>
	)
}
