import { Text } from '@geist-ui/core'

const AboutText = () => {
    return (
        <div className="text-black dark:text-white px-6 sm:px-0">
            <Text h3>About</Text>
            <Text p className="mt-1">I became interested in software (and tech in general) through the iOS modification community. I got involved with some awesome projects and slowly grew my skillset to include more practical tools, languages, and frameworks - and I'm constantly learning more.</Text>
            <Text p className="mt-1">Five years later, I've made some of my best friends and some of my proudest moments through business and software.</Text>
            <Text p className="mt-1">Right now, I'm learning <a className="underline decoration-[#388ed2] text-black dark:text-white relative before:content-[''] before:absolute before:block before:w-full before:h-[1.5px] before:bottom-0 before:left-0 before:bg-black dark:before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300" href="https://www.typescriptlang.org/">TypeScript</a> and <a className="underline decoration-[#000000] dark:decoration-[#ffffff] text-black dark:text-white relative before:content-[''] before:absolute before:block before:w-full before:h-[1.5px] before:bottom-0 before:left-0 before:bg-black dark:before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300" href="https://nextjs.org/">Next.js</a>, but I have experience working with everything below.</Text>
            <div>
                
            </div>
        </div>
    );
}

export default AboutText;