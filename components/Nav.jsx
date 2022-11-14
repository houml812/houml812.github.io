import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi";

const Nav = () => {
    const [nav, setNav] = useState(false);
    const router = useRouter();

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <nav className='left-0 top-0 w-full z-10 bg-white ease-in duration-300'>
            {/* TODO : Fix the way it reacts responsively (make it like the rest of the page where it remains centered (margin-auto?)) */}
            <div className='mx-6 flex justify-between items-center py-9 md:mx-32'>
                <Link href='/'>
                    <h1 className='font-bold text-2xl cursor-pointer'>michelle hou</h1>
                </Link>
                <ul className='hidden md:flex gap-x-8'>
                    <li className={router.pathname === '/' ? 'font-bold underline underline-offset-4' : 'no-underline hover:underline underline-offset-4'}>
                        <Link href='/'>WORK</Link>
                    </li>
                    <li className='no-underline hover:underline underline-offset-4'>
                        <a href='https://miniature-day-96e.notion.site/Extra-Works-eb20d6575be74cb9a6a8fe7ad67a175f' target='_blank' rel="noreferrer">PLAY</a>
                    </li>
                    <li className={router.pathname === '/about' ? 'font-bold underline underline-offset-4' : 'no-underline hover:underline underline-offset-4'}>
                        <Link href='/about'>ABOUT</Link>
                    </li>
                    {/* TODO : update with new resume when done */}
                    <li className={router.pathname === '/resume' ? 'font-bold underline underline-offset-4' : 'no-underline hover:underline underline-offset-4'}>
                        <a href='https://drive.google.com/file/d/11va9l2S9AEd_TWbqHopROh2bu-A0qn8H/view' target='_blank' rel="noreferrer">RESUME</a>
                    </li>
                </ul>


                {/* Mobile Button */}
                <div onClick={handleNav} className='block md:hidden z-10'>
                    {nav ? <FiX size={32} /> : <FiMenu size={32} />}
                </div>

                {/* Mobile Menu */}
                <div className={nav ? 'md:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300' : 'hidden'} >
                    <ul>
                        <li className={router.pathname === '/' ? 'p-6 text-4xl font-bold underline underline-offset-4' : 'p-6 text-4xl'}>
                            <Link href='/'>WORK</Link>
                        </li>
                        <li className='p-6 text-4xl'>
                            <Link href='https://miniature-day-96e.notion.site/Extra-Works-eb20d6575be74cb9a6a8fe7ad67a175f'>PLAY</Link>
                        </li>
                        <li className={router.pathname === '/about' ? 'p-6 text-4xl font-bold underline underline-offset-4' : 'p-6 text-4xl'}>
                            <Link href='/about'>ABOUT</Link>
                        </li>
                        <li className={router.pathname === '/resume' ? 'p-6 text-4xl font-bold underline underline-offset-4' : 'p-6 text-4xl'}>
                            <Link href='/resume'>RESUME</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;