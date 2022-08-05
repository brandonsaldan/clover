import { Text } from '@geist-ui/core'

const About = () => {
    return (
        <div className="text-black dark:text-white px-6 sm:px-0">
            <Text h3>Brandon Saldan</Text>
            <Text p className="mt-1">Hello! I'm a freshman in college majoring in business administration with plans to finish my bachelor's degree in management information systems and (hopefully) complete an MBA.</Text>
            <Text p className="mt-1">I have five years of experience in enterprise software engineering and previously worked as a Business Analyst for the <a className="underline ru text-black dark:text-white">City of Raleigh Municipal Government</a>.</Text>
            <Text p className="mt-1">I'm currently working at <a className="underline iu text-black dark:text-white">Invii</a>. We're building an all-in-one restaurant management solution, come check us out!</Text>
            <Text p className="mt-1">Feel free to contact me with any questions by connecting on <a className="underline lu text-black dark:text-white">LinkedIn</a> or messaging me on <a className="underline tu text-black dark:text-white">Twitter</a>!</Text>
        </div>
    );
}

export default About;

