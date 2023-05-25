import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import project1 from '../../public/images/projects/dsvendas.png'
import project2 from '../../public/images/projects/dsmovie.png'
import project3 from '../../public/images/projects/portfolio.png'
import project4 from '../../public/images/projects/bitcent.png'
import project5 from '../../public/images/projects/spacetime.png'

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, sumary, img, link, github }) => {
    return (
        <div>
            <article className='w-full flex items-center justify-between relative rounded-br-2xl
            rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
            lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
            '>
                <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
                rounded-br-3xl xs:-right-2 sm:w-full xs:h-[102] xs:rounded-[1.5rem]
                '/>
                <Link href={link} target="_blank"
                    className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
                >
                    <FramerImage src={img} alt={title} className='w-full h-auto'
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        priority
                        sizes="(max-width: 768px) 100vw,
                               (max-width: 1200px) 50vw,
                               50vw"
                    />
                </Link>
                <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                    <span className='text-purple-950 font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                    <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                        <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                    </Link>
                    <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{sumary}</p>
                    <div className='mt-2 flex items-center'>
                        <Link href={github} target="_blank" className='w-10'>{" "}<GithubIcon />{" "}</Link>
                        <Link href={link} target="_blank"
                            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                            dark:bg-light dark:text-dark 
                            sm:px-4 sm:text-base
                            '
                        >Visit Project</Link>
                    </div>
                </div>
            </article>
        </div>
    )
}

const Project = ({ title, type, img, link, github }) => {

    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
        '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
                rounded-br-3xl dark:bg-light md:-right-2 md:w-[101] xs:h-[102] xs:rounded-[1.5rem]
                '/>
            <Link href={link} target="_blank"
                className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-purple-950 font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target="_blank"
                        className='text-lg font-semibold underline md:text-base'
                    >Visit
                    </Link>
                    <Link href={github} target="_blank" className='w-8 md:w-6'><GithubIcon />{" "}</Link>

                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Juliano Moser | Projects Page</title>
                <meta name='description' content='' />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Imagination Trumps Knowledge!"
                        className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />

                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Spacetime"
                                img={project5}
                                sumary="Memories recall application, where the user can add to a timeline texts, photos, 
                                and videos of important events in his or her life, organized by month and year.
                                Built Using Next.js, Tailwind CSS, Expo, Lucid, Prisma and Fastify"
                                link="https://github.com/julianomoser/spacetime.git"
                                type="Featured Project"
                                github="https://github.com/julianomoser/spacetime.git"
                            />
                         </div>
                        
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Bitcente"
                                img={project4}
                                sumary="Bitcent is a web application for personal finance control with landing page and dashboard. 
                                The project uses Firebase for authentication and data storage.
                                Built Using Next.js, Tailwind CSS, Mantine and Firebase"
                                link="https://moser-bitcent.netlify.app"
                                type="Personal Financial Management"
                                github="https://github.com/julianomoser/bitcent.git"
                            />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Portfolio"
                                img={project3}
                                sumary="A professional portfolio website to showcase my projects and skills.
                                Built Using Next.js, Tailwind CSS, and Framer Motion."
                                link="https://moser-dsvendas.netlify.app/"
                                type="Portfolio"
                                github="https://github.com/julianomoser/Next.js-Portfolio-main.git"
                            />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="DS Movie"
                                img={project2}
                                sumary="DS Movie is a full stack web and mobile application built during the 6th edition of DevSuperior Week, an event organized by DevSuperior
                                The application consists of a movie review, where the reviews are collected, and then they are listed in the web app by filling in the stars with the reviews."
                                link="https://moser-dsmovie.netlify.app"
                                type="Movie Review"
                                github="https://github.com/julianomoser/dsmovie"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="DS Sales"
                                img={project1}
                                sumary="Is a full stack web application built during the 3rd edition of DevSuperior Week, an event organized by DevSuperior.
                                The application consists of displaying a dashboard to analyze sales performance from different perspectives."
                                link="https://moser-dsvendas.netlify.app/"
                                type="Analyze Sales"
                                github="https://github.com/julianomoser/projeto-sds3"
                            />
                        </div>

                        
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects