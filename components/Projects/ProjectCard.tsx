import { Text } from '@geist-ui/core'

import { Button, Fieldset, Collapse } from '@geist-ui/core'

const projects = [
    {
      name: 'Sassafras',
      desc: 'A minimalist portfolio template built with Vue and Tailwind.',
      lang: 'Vue',
      href: 'https://github.com/brandonsaldan/sassafras'
    },
    {
      name: 'Fox',
      desc: 'A social media username scraping Discord bot built with Python.',
      lang: 'Python',
      href: 'https://github.com/brandonsaldan/fox'
    },
    {
      name: 'Clover',
      desc: 'Personal website built with NextJS, Tailwind, and Geist.',
      lang: 'TypeScript',
      href: 'https://github.com/brandonsaldan/clover'
    },
    {
      name: 'Atlas',
      desc: 'Personal website template built with Vue and Tailwind.',
      lang: 'Vue',
      href: 'https://github.com/brandonsaldan/atlas'
    },
]

const About = () => {
    return (
        <ul role="list" className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 px-6 sm:px-0">
            {projects.map((project) => (
              <a href={project.href}>
                <div className="fieldset-270 bg-white transition ease-in-out delay-50 hover:scale-105">
                    <div className="fieldset-352 bg-white dark:bg-[#111111]">
                      <div className="fieldset-410 text-black dark:text-white">{project.name}</div>
                      <div className="fieldset-226 w-72 sm:w-80 text-black dark:text-white">{project.desc}</div>
                    </div>
                    <footer className="fieldset-174 bg-[#fafafa] dark:bg-[#141414] dark:text-white">{project.lang}</footer>
                </div> 
                </a>    
            ))}
        </ul>
    );
}

export default About;

