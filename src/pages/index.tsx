import Head from 'next/head'

import { Header, Hero, AboutMe } from '@components/index'

type HomeProps = {
	fonts: string
}

export default function Home (PROPS: HomeProps): JSX.Element {
	return (
		<>
			<Head>
				<title>Jrey&apos;s Web Profile</title>
				<meta
					name="description"
					content="A Software Engineer focused on web and mobile using the latest technologies such as React, React Native, Ionic, and Capacitor"
				/>
			</Head>
			<main className={ PROPS.fonts }>
				<Header />
				<Hero />
				<AboutMe />
			</main>
		</>
	)
}