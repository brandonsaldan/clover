import { Text } from '@geist-ui/core'

import { Button, Fieldset, Collapse } from '@geist-ui/core'

const projects = [
    {
      name: 'Sassafras',
      desc: 'A minimalist portfolio template built with Vue and Tailwind.',
      lang: 'Vue',
    },
    {
      name: 'Fox',
      desc: 'A social media username scraping Discord bot built with Python.',
      lang: 'Python',
    },
    {
      name: 'Clover',
      desc: 'Personal website built with NextJS, Tailwind, and Geist.',
      lang: 'TypeScript',
    },
    {
      name: 'Atlas',
      desc: 'Personal website template built with Vue and Tailwind.',
      lang: 'Vue',
    },
]

const About = () => {
    return (
        <ul role="list" className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 px-6 sm:px-0">
            {projects.map((project) => (
                <div className="fieldset-270 bg-white">
                    <div className="fieldset-352 bg-white dark:bg-black">
                      <div className="fieldset-410 text-black dark:text-white">{project.name}</div>
                      <div className="fieldset-226 w-72 sm:w-80 text-black dark:text-white">{project.desc}</div>
                    </div>
                    <footer className="fieldset-174 bg-[#fafafa] dark:bg-[#101010] dark:text-white">{project.lang}</footer>
                </div>            
            ))}
        </ul>
    );
}

export default About;

