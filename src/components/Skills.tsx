import Image from 'next/image'
import * as SimpleIcons from 'react-icons/si'

import SkillsBG from '@assets/about-me.jpg'

export function Skills (): JSX.Element {
    return (
        <section id="skills">
            <div className="container flex flex-row items-center h-screen">
                <div className="w-5/12 mr-12">
                    <Image
                        src={ SkillsBG }
                        placeholder="blur"
                        alt="Vector Coding"
                        className="block w-full h-auto"
                    />
                </div>
                <div className="w-7/12">
                    <h1 className="text-5xl mb-6">
                        # Skills
                    </h1>
                    <div className="mb-8">
                        <h2 className="text-3xl font-semibold">
                            Core &rarr;
                        </h2>
                        <p className="mb-4 text-slate-400">
                            I mainly used for documentation, web, and mobile development
                        </p>
                        <ul className="flex flex-row gap-2">
                            <li className="border-[#1b6dff]">
                                <SimpleIcons.SiIonic
                                    fill="#1b6dff"
                                />
                                <span className="font-semibold text-[#1b6dff]">
                                    Ionic
                                </span>
                            </li>
                            <li className="border-[#119eff]">
                                <SimpleIcons.SiCapacitor
                                    fill="#119eff"
                                />
                                <span className="font-semibold text-[#119eff]">
                                    Capacitor
                                </span>
                            </li>
                            <li className="border-[#61dafb]">
                                <SimpleIcons.SiReact
                                    fill="#61dafb"
                                />
                                <span className="font-semibold text-[#61dafb]">
                                    React Native
                                </span>
                            </li>
                            <li className="border-[#c6c6c6]">
                                <SimpleIcons.SiApple
                                    fill="#c6c6c6"
                                />
                                <span className="font-semibold text-[#c6c6c6]">
                                    iOS
                                </span>
                            </li>
                            <li className="border-[#00de7a]">
                                <SimpleIcons.SiAndroid
                                    fill="#00de7a"
                                />
                                <span className="font-semibold text-[#00de7a]">
                                    Android
                                </span>
                            </li>
                            <li />
                            <li className="border-[#e4d04b]">
                                <SimpleIcons.SiJavascript
                                    fill="#e4d04b"
                                />
                                <span className="font-semibold text-[#e4d04b]">
                                    JavaScript
                                </span>
                            </li>
                            <li className="border-[#3178c6]">
                                <SimpleIcons.SiTypescript
                                    fill="#3178c6"
                                />
                                <span className="font-semibold text-[#3178c6]">
                                    TypeScript
                                </span>
                            </li>
                            <li className="border-[#61dafb]">
                                <SimpleIcons.SiReact
                                    fill="#61dafb"
                                />
                                <span className="font-semibold text-[#61dafb]">
                                    ReactJS
                                </span>
                            </li>
                            <li className="border-[#000]">
                                <SimpleIcons.SiNextdotjs
                                    fill="#000"
                                />
                                <span className="font-semibold text-[#000]">
                                    NextJS
                                </span>
                            </li>
                            <li className="border-[#89bb3c]">
                                <SimpleIcons.SiNodedotjs
                                    fill="#89bb3c"
                                />
                                <span className="font-normal text-[#89bb3c]">
                                    NodeJS
                                </span>
                            </li>
                            <li />
                            <li className="border-[#f29100]">
                                <SimpleIcons.SiAmazonaws
                                    fill="#f29100"
                                />
                                <span className="font-semibold text-[#f29100]">
                                    AWS
                                </span>
                            </li>
                            <li className="border-[#38bdf7]">
                                <SimpleIcons.SiTailwindcss
                                    fill="#38bdf7"
                                />
                                <span className="font-semibold text-[#38bdf7]">
                                    TailwindCSS
                                </span>
                            </li>
                            <li className="border-[#c66394]">
                                <SimpleIcons.SiSass
                                    fill="#c66394"
                                />
                                <span className="font-semibold text-[#c66394]">
                                    Sass
                                </span>
                            </li>
                            <li className="border-[#7046b2]">
                                <SimpleIcons.SiRedux
                                    fill="#7046b2"
                                />
                                <span className="font-semibold text-[#7046b2]">
                                    Redux
                                </span>
                            </li>
                            <li className="border-[#d2698c]">
                                <SimpleIcons.SiStyledcomponents
                                    fill="#d2698c"
                                />
                                <span className="font-semibold text-[#d2698c]">
                                    Styled Components
                                </span>
                            </li>
                            <li />
                            <li className="border-[#349eea]">
                                <SimpleIcons.SiVisualstudiocode
                                    fill="#349eea"
                                />
                                <span className="font-semibold text-[#349eea]">
                                    VSCode
                                </span>
                            </li>
                            <li className="border-[#e44d30]">
                                <SimpleIcons.SiGit
                                    fill="#e44d30"
                                />
                                <span className="font-semibold text-[#e44d30]">
                                    Git
                                </span>
                            </li>
                            <li className="border-[#37206a]">
                                <SimpleIcons.SiGithub
                                    fill="#37206a"
                                />
                                <span className="font-semibold text-[#37206a]">
                                    GitHub
                                </span>
                            </li>
                            <li className="border-[#257cf1]">
                                <SimpleIcons.SiJira
                                    fill="#257cf1"
                                />
                                <span className="font-semibold text-[#257cf1]">
                                    Jira
                                </span>
                            </li>
                            <li className="border-[#0856c8]">
                                <SimpleIcons.SiConfluence
                                    fill="#0856c8"
                                />
                                <span className="font-semibold text-[#0856c8]">
                                    Confluence
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-3xl font-semibold">
                            Others &rarr;
                        </h2>
                        <p className="mb-4 text-slate-400">
                            I could work with these technologies as well if needed
                        </p>
                        <ul className="flex flex-row gap-2">
                            <li className="border-[#0863a3]">
                                <SimpleIcons.SiJquery
                                    fill="#0863a3"
                                />
                                <span className="font-semibold text-[#0863a3]">
                                    jQuery
                                </span>
                            </li>
                            <li className="border-[#e64457]">
                                <SimpleIcons.SiReactquery
                                    fill="#e64457"
                                />
                                <span className="font-semibold text-[#e64457]">
                                    React Query
                                </span>
                            </li>
                            <li className="border-[#d932a2]">
                                <SimpleIcons.SiApollographql
                                    fill="#d932a2"
                                />
                                <span className="font-semibold text-[#d932a2]">
                                    GraphQL
                                </span>
                            </li>
                            <li className="border-[#376f61]">
                                <SimpleIcons.SiCypress
                                    fill="#376f61"
                                />
                                <span className="font-semibold text-[#376f61]">
                                    Cypress
                                </span>
                            </li>
                            <li className="border-[#7e3653]">
                                <SimpleIcons.SiJest
                                    fill="#7e3653"
                                />
                                <span className="font-semibold text-[#7e3653]">
                                    Jest
                                </span>
                            </li>
                            <li />
                            <li className="border-[#f2437e]">
                                <SimpleIcons.SiStorybook
                                    fill="#f2437e"
                                />
                                <span className="font-semibold text-[#f2437e]">
                                    StoryBook
                                </span>
                            </li>
                            <li className="border-[#f26635]">
                                <SimpleIcons.SiPostman
                                    fill="#f26635"
                                />
                                <span className="font-semibold text-[#f26635]">
                                    Postman
                                </span>
                            </li>
                            <li className="border-[#336b99]">
                                <SimpleIcons.SiPython
                                    fill="#336b99"
                                />
                                <span className="font-semibold text-[#336b99]">
                                    Python
                                </span>
                            </li>
                            <li className="border-[#c83530]">
                                <SimpleIcons.SiJenkins
                                    fill="#c83530"
                                />
                                <span className="font-semibold text-[#c83530]">
                                    Jenkins
                                </span>
                            </li>
                            <li className="border-[#000]">
                                <SimpleIcons.SiVercel
                                    fill="#000"
                                />
                                <span className="font-semibold text-[#000]">
                                    Vercel
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}