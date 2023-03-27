type HomeProps = {
	fonts: string
}

export default function Home (PROPS: HomeProps): JSX.Element {
	return (
		<main className={ PROPS.fonts }>
			<h1 className="text-3xl">Hi! It&apos;s Jrey!</h1>
		</main>
	)
}