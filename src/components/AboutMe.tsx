import Image from 'next/image'

import HeroProfile from '@assets/hero-profile.jpg'

import { BackgroundSVG } from './BackgroundSVG'

export function AboutMe (): JSX.Element {
    const CURRENT_YEAR = new Date().getFullYear()
    const FRONT_END_EXP = CURRENT_YEAR - 2015
    const MOBILE_EXP = CURRENT_YEAR - 2019

    return (
        <section
            id="about-me"
            className="h-screen"
        >
            <div className="container flex flex-row items-center h-screen">
                <div className="w-5/12">
                    <h1 className="text-5xl mb-6">
                        About Me &rarr;
                    </h1>
                    <p className="text-xl font-light">
                        Hi! I&apos;m <strong>John Rey</strong> &quot;Jrey&quot; <strong>Baylen</strong> with { FRONT_END_EXP } years of experience
                        in the IT industry.
                    </p>
                    <p className="mt-4 text-xl font-light">
                        I am mainly focused on mobile and web app development.
                        <strong> React</strong> and <strong>TypeScript</strong> are the programming languages I commonly used when building an application.
                        I could work with
                        <a
                            href="#skills"
                            className="text-cyan-500 ml-1 mr-1 hover:underline"
                        >
                            Front-End
                        </a>
                        and
                        <a
                            href="#skills"
                            className="text-cyan-500 ml-1 hover:underline mr-1"
                        >
                            Back-End
                        </a>
                        using JavaScript/Typescript.
                    </p>
                    <p className="text-xl font-light mt-6">
                        <strong>The summary of my experiences are the following:</strong>
                    </p>
                    <ul className="mt-2 list-inside list-disc">
                        <li className="text-lg font-light">
                            2 years as a Lead Software Engineer
                        </li>
                        <li className="text-lg font-light">
                            { MOBILE_EXP } years of Mobile App Development (Cross-Platform Technologies)
                        </li>
                        <li className="text-lg font-light">
                            { FRONT_END_EXP } years of Web App Development (Front-End and Back-End)
                        </li>
                        <li className="mt-10 list-none">
                            <a
                                href="#contact-me"
                                className="bg-cyan-500 text-white text-lg py-4 px-7 rounded-full font-light hover:shadow-xl"
                            >
                                Contact Me &rarr;
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w-2/12" />
                <div className="w-4/12 relative">
                    <Image
                        placeholder="blur"
                        src={ HeroProfile }
                        alt="Loving couple in a white dress"
                        className="block w-full h-auto rotate-3 rounded-full shadow-2xl"
                    />
                    <BackgroundSVG />
                </div>
            </div>
        </section>
    )
}