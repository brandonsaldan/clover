import useSound from "use-sound";
import { useEffect, useState } from "react";

import { TbGitFork } from "react-icons/tb"
import { AiFillStar } from "react-icons/ai"
import LoadingRing  from "../ui/LoadingRing"

const hoverSound = "/sound/hover.mp3";

const About = () => {
    const [Show, setShow] = useState(false)
    const [play] = useSound(hoverSound);
    const [projects, setProjects] = useState<any[]>([]);
    const getPinnedRepos = () => {
      fetch("https://gh-pinned-repos.egoist.dev/?username=brandonsaldan")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((err) => console.log(err));
      };

    useEffect(() => {
      getPinnedRepos();
    }, []);
    useEffect(() => {
      const timer = setTimeout(() => setShow(true), 1250)
      return () => clearTimeout(timer)
    })
    if (projects.length === 0) {
      return (
        <div className="mx-auto animate__animated animate__fadeIn">
          <div>
            <LoadingRing
              height="80"
              width="80"
              ariaLabel="loading"
              wrapperClass="mx-auto"
            />
          </div>
          {Show ? 
          <div className="mx-auto animate__animated animate__fadeIn">
            <div className="text-black dark:text-white">
              <h1 className="text-base font-medium">Still Loading...</h1>
            </div>
          </div>
          : <> </>}
        </div>
      )
    } else
    return (
      <div>
        <ul role="list" className="animate__animated animate__fadeIn mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 px-6 sm:px-0">
            {projects.map((project) => {
              return (
                <a href={project.link}>
                  <div onMouseEnter={() => play()} className="fieldset-270 bg-white transition ease-in-out delay-50 hover:scale-105">
                    <div className="fieldset-352 bg-white dark:bg-[#111111]">
                      <div className="fieldset-410 text-black dark:text-white">{project.repo.charAt(0).toUpperCase() + project.repo.slice(1)}</div>
                      <div className="fieldset-226 w-72 sm:w-80 text-black dark:text-white">{project.description}</div>
                    </div>
                      <footer className="fieldset-174 bg-[#fafafa] dark:bg-[#141414] dark:text-white">
                        <div className="text-black dark:text-white">{project.language}</div>
                        <div className="mt-1 flex">
                          <div className="flex pr-3">
                            <div className="mt-1 h-5 w-5 text-black dark:text-white">
                              <AiFillStar />
                            </div>
                            {project.stars}
                          </div>

                          <div className="flex">
                            <div className="mt-1 h-5 w-5 text-black dark:text-white">
                              <TbGitFork />
                            </div>
                            {project.forks}
                          </div>
                        </div>
                      </footer>
                  </div> 
                </a> 
              )   
            })}
        </ul>
      </div>
    );
}

export default About;
