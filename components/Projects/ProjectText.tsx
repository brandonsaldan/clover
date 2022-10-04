import { Text } from '@geist-ui/core'

const About = () => {
    return (
        <div className="text-black dark:text-white px-6 sm:px-0">
            <Text h3>Projects</Text>
            <Text p className="mt-1">Here's some personal projects I've worked on recently. Check out more on my <a className="underline decoration-[#4183C4] text-black dark:text-white relative before:content-[''] before:absolute before:block before:w-full before:h-[1.5px] before:bottom-0 before:left-0 before:bg-black dark:before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300" href="https://github.com/brandonsaldan/">GitHub</a>!</Text>
        </div>
    );
}

export default About;

