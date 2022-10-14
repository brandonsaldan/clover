import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const header = () => {
    return (
    <Popover className="flex flex-row-reverse bg-transparent">
      <div className="flex justify-between items-center py-6 px-8 sm:px-0">
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-0 focus:ring-none">
            <span className="sr-only">Open Menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
          <Popover.Group as="nav" className="flex space-x-10">
            <Link href="/">
            <a onClick={() => void new Audio("/sound/nav.mp3").play().catch(() => null)} className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300">
              Home
            </a>
            </Link>
            <Link href="/projects">
            <a onClick={() => void new Audio("/sound/nav.mp3").play().catch(() => null)} className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300">
              Projects
            </a>
            </Link>
            <Link href="/about">
            <a onClick={() => void new Audio("/sound/nav.mp3").play().catch(() => null)} className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300">
              About
            </a>
            </Link>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-0 bg-white dark:bg-zinc-900">
            <div className="pt-5 px-5">
              <div className="flex items-center justify-between">
                <div className="-mr-2">
                  <Popover.Button className="bg-transparent rounded-md inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-0 focus:ring-none">
                    <span className="sr-only">Close Menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-1 gap-6">
                <a href="/home" className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300">
                  Home
                </a>

                <a href="/projects" className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300">
                  Projects
                </a>

                <a href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300">
                  About
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
    );
}

export default header;

