import Link from 'next/link'
import Image from 'next/image'

import HeroProfile from '@assets/hero-profile.jpg'

import { BackgroundSVG } from './BackgroundSVG'

export function Hero (): JSX.Element {
    return (
        <section className="container h-screen flex items-center">
            <div className="hero-left w-5/12">
                <h1 className="text-5xl">
                    Hi! I&apos;m Jrey
                </h1>
                <p className="mt-4">
                    I mainly focused on mobile and web app development.
                </p>
                <p>
                    <strong>React</strong> and <strong>TypeScript</strong> are the programming languages I commonly used when building an application.
                </p>
                <p className="mt-4">
                    Watching movies, tutorials, and walking are some of my hobbies during free time.
                </p>
                <div className="mt-10">
                    <Link
                        href="#about-me"
                        className="bg-slate-800 text-white text-lg py-4 px-7 rounded-full font-light hover:shadow-xl"
                    >
                        Know more About Me &rarr;
                    </Link>
                </div>
            </div>
            <div className="w-2/12" />
            <div className="w-4/12 relative">
                <Image
                    src={ HeroProfile }
                    alt="Loving couple in a white dress"
                    className="block w-full h-auto rotate-3 rounded-full shadow-2xl"
                />
                <BackgroundSVG />
            </div>
            <div className="w-1/12" />
        </section>
    )
}