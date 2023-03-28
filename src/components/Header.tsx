export function Header (): JSX.Element {
    return (
        <header className="fixed top-0 left-0 right-0 z-10 bg-white">
            <nav className="container">
                <ul className="header-list">
                    <li>
                        <a
                            href="#hero-section"
                            className="font-bold text-3xl px-4 py-6"
                        >
                            JRMB
                        </a>
                    </li>
                    <li>
                        <a href="#about-me">
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href="#skills">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#experiences">
                            Experiences
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            Projects
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}