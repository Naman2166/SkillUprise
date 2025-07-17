import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaHome, FaGraduationCap, FaPlay, FaPhone, FaInfoCircle, FaBook, FaSearch, FaBars } from 'react-icons/fa';
import { assets } from '../assets/assets';

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);

    /* ------------- data ------------- */
    const navItems = [
        { to: '/', icon: FaHome, label: 'Home' },
        { to: '/courses', icon: FaGraduationCap, label: 'Courses' },
        { to: '/videos', icon: FaPlay, label: 'Videos' },
        { to: '/resources', icon: FaBook, label: 'Resources' },
        { to: '/about', icon: FaInfoCircle, label: 'About' },
        { to: '/contact', icon: FaPhone, label: 'Contact' },
    ];

    const lowerBarLinks = [
        { to: '/', text: 'Bug Bounty Programs' },
        { to: '/', text: 'Bug Bounty Lab' },
        { to: '/', text: 'Companies' },
        { to: '/', text: 'Mentors' },
        { to: '/', text: 'Hacking Lab' },
        { to: '/', text: 'Hacking Tools' },
        { to: '/', text: 'Hardware Tools' },
        { to: '/ethical-hacking-internship', text: 'Ethical Hacking Internship' },
        { to: '/', text: 'For Colleges / Universities' },
        { to: '/features', text: 'Features' },
        { to: '/', text: 'Gallery' },
        { to: '/', text: 'Reviews' },
        { to: '/internship', text: 'Internships' },
    ];

    const scrollTop = () => window.scrollTo(0, 0);

    /* ------------- render ------------- */
    return (
        <header className="fixed left-0 top-0 z-50 w-full shadow-md">
            {/* -------- Top bar (desktop) -------- */}
            <div className="hidden bg-black lg:block">
                <div className="mx-[1.5%] flex items-center justify-between px-5 xl:px-7 pt-3.5 pb-2.5 text-sm">
                    {/* logo */}
                    <img
                        src={assets.logo_full}
                        alt="logo"
                        className="w-44 cursor-pointer"
                        onClick={() => navigate('/')}
                    />

                    {/* centre: search + nav + menu btn */}
                    <div className="flex items-center gap-16">
                        <FaSearch className="hidden xl:block h-5 w-5 cursor-pointer text-gray-300 hover:scale-110" />

                        <ul className="hidden items-start gap-5 font-medium text-gray-400 lg:flex lg:gap-11">
                            {navItems.map(({ to, icon: Icon, label }) => (
                                <NavLink
                                    key={to}
                                    to={to}
                                    onClick={scrollTop}
                                    className={({ isActive }) => `flex flex-col items-center transition-all duration-300 hover:scale-105 hover:text-white ${isActive ? 'underline underline-offset-8 decoration-2 decoration-gray-300' : ''} `}
                                >
                                    <Icon className=" h-5 w-5" />
                                    <li>{label}</li>
                                </NavLink>
                            ))}
                        </ul>

                        {/* Menu button  */}
                        <button
                            type="button"
                            className="hidden xl:flex flex-row items-center gap-2 rounded-lg bg-blue-500 px-5 py-2.5 font-light shadow-sm transition hover:scale-105 hover:shadow-slate-800 cursor-pointer"
                        >
                            <span className="font-medium text-white">Menu</span>
                            <FaBars className="w-4 h-4 text-white" />
                        </button>

                    </div>

                    {/* auth buttons */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate('/login')}
                            className="hidden lg:block cursor-pointer rounded-lg border border-white bg-black px-8 py-2.5 font-medium text-white shadow-sm transition hover:scale-105 hover:shadow-gray-800 "
                        >
                            Login
                        </button>
                        <button
                            onClick={() => navigate('/signup')}
                            className="hidden lg:block cursor-pointer rounded-lg bg-blue-500 px-8 py-2.5 font-medium text-white shadow-sm transition hover:scale-105 hover:shadow-slate-800"
                        >
                            SignUp
                        </button>
                    </div>
                </div>
            </div>

            {/* -------- Lower bar (desktop) -------- */}
            <nav className="hidden lg:flex w-full items-center justify-center gap-5 bg-gray-900 px-2 py-3 text-[13px] font-medium text-gray-400 ">
                {lowerBarLinks.map(({ to, text }) => (
                    <NavLink
                        key={text}
                        to={to}
                        className={({ isActive }) => `mr-0.5 cursor-pointer hover:scale-105 hover:text-gray-300 ${to === '/' ? '' : isActive ? "underline underline-offset-8 decoration-2 decoration-gray-300" : ""}`}
                    >
                        {text}
                    </NavLink>
                ))}
            </nav>

            {/* -------- Mobile -------- */}
            <div className="block bg-white lg:hidden">
                <div className=" flex flex-row justify-between items-center px-3 py-2">
                    <img
                        src={assets.logo_full}
                        alt="logo"
                        className="h-6 w-auto cursor-pointer"
                        onClick={() => navigate('/')}
                    />
                    <FaBars
                        onClick={() => setShowMenu(true)}
                        className="my-2 text-2xl cursor-pointer"
                    />
                </div>

                {/* Sidebar Overlay and Panel */}
                <div className={`${showMenu ? 'fixed inset-0 z-40' : 'hidden'}`}>
                    {/* Dimmed Background */}
                    <div
                        className="absolute inset-0 bg-black opacity-50"
                        onClick={() => setShowMenu(false)}
                    />

                    {/* Slide-In Panel */}
                    <div className="absolute right-0 top-0 h-full w-1/2 min-w-[250px] max-w-[300px] bg-white shadow-lg transition-transform duration-300 ease-in-out overflow-y-auto">
                        <div className="flex items-center justify-between p-2 py-[0.6rem] border-b border-b-gray-500 mx-3">
                            <img
                                src={assets.logo_full}
                                alt="logo"
                                className="h-5 w-auto cursor-pointer"
                                onClick={() => {
                                    setShowMenu(false);
                                    navigate('/');
                                }}
                            />
                            <button
                                type="button"
                                onClick={() => setShowMenu(false)}
                                className="text-3xl font-bold"
                            >
                                ×
                            </button>
                        </div>

                        <ul className="mt-5 flex flex-col items-start gap-1.5 px-4 text-base sm:text-lg font-medium">
                            {navItems.map(({ to, label }) => (
                                <NavLink
                                    key={to}
                                    to={to}
                                    onClick={() => {
                                        setShowMenu(false);
                                        scrollTop();
                                    }}
                                    className={({ isActive }) => `w-full ${isActive ? "underline" : ""} `}
                                >
                                    <p className="block w-full rounded px-2 py-2">
                                        {label.toUpperCase()}
                                    </p>
                                </NavLink>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>




        </header>
    );
};

export default Navbar;
