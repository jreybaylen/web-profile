export function Hero (): JSX.Element {
    return (
        <section
            id="hero-section"
            className="container h-screen flex items-center"
        >
            <div className="hero-left w-5/12">
                <h1 className="text-5xl">
                    Hi! I&apos;m Jrey
                </h1>
                <p className="mt-4 text-slate-500">
                    A loving husband, adventurer, gamer, and software engineer
                </p>
                <div className="mt-10">
                    <a
                        href="#about-me"
                        className="bg-cyan-500 text-white text-lg py-4 px-7 rounded-full font-light hover:shadow-xl"
                    >
                        Know more About Me &rarr;
                    </a>
                </div>
            </div>
        </section>
    )
}