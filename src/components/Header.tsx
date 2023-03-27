import Link from 'next/link'

export function Header (): JSX.Element {
    return (
        <header className="fixed top-0 left-0 right-0">
            <nav className="container">
                <ul className="header-list">
                    <li className="mr-auto">
                        <Link href="/" className="text-4xl font-bold">
                            JRMB
                        </Link>
                    </li>
                    <li>
                        <Link href="#about-me">
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link href="#skills">
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link href="#experiences">
                            Experiences
                        </Link>
                    </li>
                    <li>
                        <Link href="#projects">
                            Projects
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}