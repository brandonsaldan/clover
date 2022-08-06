import { Text } from '@geist-ui/core'

const About = () => {
    return (
        <div className="text-black dark:text-white px-6 sm:px-0">
            <Text h3>Projects</Text>
            <Text p className="mt-1">Here's some projects I've worked on recently. Check out more on my <a className="underline gu text-black dark:text-white" href="https://github.com/brandonsaldan/">GitHub</a>!</Text>
        </div>
    );
}

export default About;

