import React from 'react';
import Link from 'next/link';
import { GiWoodBeam } from 'react-icons/gi';
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import { AiOutlineInbox } from 'react-icons/ai';
import { CiBoxes } from 'react-icons/ci';
import Image from 'next/image';

const Header = () => {
  return (
    <aside className="fixed z-10 flex h-full w-64  flex-col overflow-y-auto border-r bg-black px-4 py-8 rtl:border-l rtl:border-r-0 ">
      <Link href="/">
        <Image
          width={1638}
          height={723}
          className="h-auto w-full sm:h-auto"
          src="/assets/Logo/logo-UTB-stock.png"
          alt=""
        />
      </Link>

      <div className="relative mt-6">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>

        <input
          type="text"
          className="w-full rounded-md border bg-white py-2 pl-10 pr-4 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
          placeholder="Search"
        />
      </div>

      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav>
          <Link
            className="mt-5 flex transform items-center rounded-md px-4 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
            href="/bois"
          >
            <GiWoodBeam className="mx-4" />
            <span className="mx-4 font-medium">Bois</span>
          </Link>

          <Link
            className="mt-5 flex transform items-center rounded-md px-4 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
            href="/quincailleries"
          >
            <HiOutlineWrenchScrewdriver className="mx-4" />
            <span className="mx-4 font-medium">Quincailleries</span>
          </Link>

          <Link
            className="mt-5 flex transform items-center rounded-md px-4 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
            href="/produits"
          >
            <AiOutlineInbox className="mx-4" />
            <span className="mx-4 font-medium">Produits</span>
          </Link>

          <Link
            className="mt-5 flex transform items-center rounded-md px-4 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
            href="/autres"
          >
            <CiBoxes className="mx-4" />
            <span className="mx-4 font-medium">Autres</span>
          </Link>
          <hr className="my-6 border-gray-200 dark:border-gray-600" />
        </nav>

        <Link href="#" className="-mx-2 flex items-center px-4">
          <img
            className="mx-2 h-9 w-9 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="avatar"
          />
          <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">THE KING</span>
        </Link>
      </div>
    </aside>
  );
};

export default Header;
