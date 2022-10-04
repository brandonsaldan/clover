import { Text } from '@geist-ui/core'

const About = () => {
    return (
        <div className="text-black dark:text-white px-6 sm:px-0">
            <Text h3>Brandon Saldan</Text>
            <Text p className="mt-1">Hello! I'm a freshman in college majoring in business administration with plans to finish my bachelor's degree in management information systems and (hopefully) complete an MBA.</Text>
            <Text p className="mt-1">I have five years of experience in enterprise software engineering and previously worked as a Business Analyst for the <a className="underline decoration-[#a8c23e] text-black dark:text-white relative before:content-[''] before:absolute before:block before:w-full before:h-[1.5px] before:bottom-0 before:left-0 before:bg-black dark:before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300" href="https://raleighnc.gov/entrepreneurship-and-innovation/">City of Raleigh Municipal Government</a>.</Text>
            <Text p className="mt-1">I'm currently working at <a className="underline decoration-[#ff7676] text-black dark:text-white relative before:content-[''] before:absolute before:block before:w-full before:h-[1.5px] before:bottom-0 before:left-0 before:bg-black dark:before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300" href="https://invii.io/">Invii</a>. We're building an all-in-one restaurant management solution, come check us out!</Text>
            <Text p className="mt-1">Feel free to contact me with any questions by connecting on <a className="underline decoration-[#0a66c2] text-black dark:text-white relative before:content-[''] before:absolute before:block before:w-full before:h-[1.5px] before:bottom-0 before:left-0 before:bg-black dark:before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300" href="https://www.linkedin.com/in/brandonsaldan/">LinkedIn</a> or messaging me on <a className="underline decoration-[#1da1f2] text-black dark:text-white relative before:content-[''] before:absolute before:block before:w-full before:h-[1.5px] before:bottom-0 before:left-0 before:bg-black dark:before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300" href="https://twitter.com/brandonsaldan/">Twitter</a>!</Text>
        </div>
    );
}

export default About;