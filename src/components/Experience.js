import React, { useRef } from 'react'

import { motion, useScroll } from "framer-motion";
import LiIcon from './LiIcon';


const Details = ({ position, company, companyLink, time, address }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex-col items-center justify-between 
        md:w-[80%]
        '>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ durantion: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{
                    position}&nbsp;
                    <a
                        href={companyLink}
                        target="_blank"
                        className='text-blue-950 dark:text-primaryDark capitalize'
                    >
                        @{company}
                    </a>
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {address}
                </span>
            </motion.div>
        </li>
    );
};


const Experience = () => {
    const ref = useRef(null);
    const { scrollXProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"],
        }
    );
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Experience
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div
                    style={{ scaleY: scrollXProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark
                    md:w-[2px] md:left-[30px] xs:left-[20px]
                    ' />

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        companyLink="https://www.totalsat.com.br"
                        position="Java Developer" company="Totalsat" time="2017-Present" address="Curitiba, PR"
                    />

                    <Details
                        companyLink="https://www.portoseguro.com.br"
                        position="Java Developer" company="Porto Seguro" time="July 2023" address="Home Work"
                    />

                    <Details
                        companyLink="https://www.indracompany.com/pt-br/"
                        position="Java Developer" company="Indra" time="July 2022" address="Home Work"
                    />

                    <Details
                        companyLink="https://www.agrofertilpr.com.br"
                        position="Java Developer" company="Agrofertil" time="January 2023" address="Home Work"
                    />

                    <Details
                        companyLink="https://transportadora7flexas.com.br"
                        position="Java Developer" company="7 Flexas Ltda" time="February 2022" address="Home Work"
                    />
                    <Details
                        companyLink="https://www.armazemaraucaria.com.br"
                        position="Java Developer" company="Armazem Araucária" time="March 2022" address="Home Work"
                    />
                    <Details
                        companyLink="https://logistixsolucoes.com.br"
                        position="Java Developer" company="Logistix" time="April 2022" address="Home Work"
                    />
                    <Details
                        companyLink="http://grupoterranova.com.br"
                        position="Java Developer" company="Terra Nova" time="August 2022" address="Home Work"
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience;