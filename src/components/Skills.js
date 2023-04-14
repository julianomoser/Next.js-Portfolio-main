import React from 'react'

import { motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {

    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
                py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
                lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent 
                xs:text-dark xs:dark:text-light xs:font-bold
                '
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: {duration:1.5} }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark 
            lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
            lg:bg-circularLightLg lg:dark:bg-circularDarkLg
            md:bg-circularLightMd md:dark:bg-circularDarkMd
            sm:bg-circularLightSm sm:dark:bg-circularDarkSm
            '>
                <motion.div 
                className='flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:text-dark
                p-8 dark:bg-light  shadow-dark cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2
                '
                    whileHover={{ scale: 1.05 }}
                >
                    Java
                </motion.div>

                <Skill name="Java EE" x="-21vw" v="2vw" />
                <Skill name="PostgreSQL" x="-33vw" y="-6vw" />
                <Skill name="JPA/Hibernate" x="-1vw" y="-14vw" />
                <Skill name="Spring Batch" x="26vw" y="6vw" />
                <Skill name="Spring Boot" x="1vw" y="14vw" />
                <Skill name="NextJS" x="-27vw" y="-15vw" />
                <Skill name="ReactJS" x="-16vw" y="-21vw" />
                <Skill name="EJB" x="14vw" v="-10vw" />
                <Skill name="Docker" x="34vw" y="-4vw" />
                <Skill name="Kubernetes" x="27vw" y="-15vw" />
                <Skill name="Swagger" x="0vw" y="-23.5vw" />
                <Skill name="RabbitMQ" x="-30vw" y="10vw" />
                <Skill name="Kafka" x="-20vw" y="19vw" />
                <Skill name="Angular" x="22vw" y="18vw" />
                <Skill name="PrimeFaces" x="0vw" y="23.2vw" />
            </div>
        </>
    )
}

export default Skills