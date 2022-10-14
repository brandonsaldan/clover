import { IconType } from "react-icons";
import { SiVuedotjs, SiNuxtdotjs, SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiPython, SiHtml5, SiCss3, SiTailwindcss, SiGit, SiVite } from "react-icons/si";
import useSound from "use-sound";

const hoverSound = "/sound/hover.mp3";

const toolsList = [
    {
      name: 'Vue',
      href: 'https://vuejs.org/',
    },
    {
      name: 'Nuxt',
      href: 'https://nuxtjs.org/',
    },
    {
      name: 'Vite',
      href: 'https://vitejs.dev/'
    },
    {
      name: 'React',
      href: 'https://reactjs.org/',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
    },
    {
      name: 'TypeScript',
      href: 'https://www.typescriptlang.org/',
    },
    {
      name: 'JavaScript',
      href: "https://www.javascript.com/",
    },
    {
      name: 'Python',
      href: 'https://www.python.org/',
    },
    {
      name: 'HTML',
      href: 'https://html.spec.whatwg.org/',
    },
    {
      name: 'CSS',
      href: 'https://www.w3.org/Style/CSS/Overview.en.html',
    },
    {
      name: 'TailwindCSS',
      href: 'https://tailwindcss.com/',
    },
    {
      name: 'Git',
      href: 'https://git-scm.com/',
    },
]

const Item = ({ name, _icon }: { name: string; _icon: IconType }) => {
    const [play] = useSound(hoverSound);
    return (
      <a href={toolsList.find((tool) => tool.name === name)?.href}>
      <div onMouseEnter={() => play()} className="flex items-center rounded-md border border-[#eaeaea] bg-white dark:bg-[#111111] pl-3 transition ease-in-out delay-50 hover:scale-105">
        <_icon className="h-5 w-5 text-black dark:text-white pr-2" />
        <p className="text-black dark:text-white">{name}</p>
      </div>
      </a>
    );
  };
  

const tools = () => {
    return (
        <div role="list" className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 px-6 sm:px-0">
            <Item name="Vue" _icon={SiVuedotjs} />
            <Item name="Nuxt" _icon={SiNuxtdotjs} />
            <Item name="Vite" _icon={SiVite} />
            <Item name="React" _icon={SiReact} />
            <Item name="Next.js" _icon={SiNextdotjs} />
            <Item name="TypeScript" _icon={SiTypescript} />
            <Item name="JavaScript" _icon={SiJavascript} />
            <Item name="Python" _icon={SiPython} />
            <Item name="HTML" _icon={SiHtml5} />
            <Item name="CSS" _icon={SiCss3} />
            <Item name="TailwindCSS" _icon={SiTailwindcss} />
            <Item name="Git" _icon={SiGit} />
        </div>
    );
}

export default tools;
