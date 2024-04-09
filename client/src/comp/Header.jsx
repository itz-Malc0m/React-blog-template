import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {  Navbar } from 'flowbite-react';
import Logo from '../assets/logo.png';
import { BsMenuUp } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';
import { IconContext } from 'react-icons';


const Header = () => {

    const path = useLocation().pathname

    const [theme, setTheme] = useState('light');
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <Navbar fluid={true} rounded={false}>
            <Navbar.Brand className="container flex flex-wrap items-center justify-between  mx-auto">
                <Link to="/" className="flex items-center">
                    <img src={Logo} className="h-6 mx-3 sm:h-9" alt="Logo" />
                    <span className="self-center px-2 py-1 text-xl font-semibold whitespace-nowrap dark:text-white">
                        World
                    </span>
                </Link>
                <div className="hidden lg:block">
                    <Link className="dark:text-white p-5" to="/">
                        Home
                    </Link>
                    <Link className="dark:text-white p-5" to="/projects">
                        Projects
                    </Link>
                    <Link className="dark:text-white p-5" to="/about">
                        About
                    </Link>
                </div>
                <div className="flex md:order-2">
                    {theme === 'dark' ? (
                        <button
                            onClick={handleThemeSwitch}
                            type="button"
                            className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            <FaSun />
                        </button>
                    ) : (
                        <button
                            onClick={handleThemeSwitch}
                            type="button"
                            className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                           <FaMoon />
                        </button>
                    )}
                    <div className="lg:hidden flex align-middle justify-center p-1 text-gray-800 dark:text-white">
                        <IconContext.Provider value={{ size: 30 }}>
                            <BsMenuUp onClick={() => setToggle(!toggle)} />
                        </IconContext.Provider>
                    </div>
                <Link to="/sign-in" className='px-1'>
                    {/* <Button>Sign In</Button> */}
                    <button
                            type="button"
                            className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                           Sign In
                        </button>
                </Link>
                </div>
            </Navbar.Brand>
            {toggle ? (
                <div className="p-2 m-5 bg-white dark:bg-gray-600 rounded-lg dark:text-white w-full">
                    <div>
                        <Navbar.Link className='' active={path === "/"} as={'div'} to="/">
                           <Link to="/">
                            Home
                            </Link> 
                        </Navbar.Link>

                        <Navbar.Link as={'div'} active={path === "/projects"} to="/projects">
                        <Link to="/">
                            Projects
                            </Link>
                        </Navbar.Link>

                        <Navbar.Link as={'div'} active={path === "/about"}>
                        <Link to="/">
                            About
                            </Link>
                            </Navbar.Link>
                        
                    </div>
                </div>
            ) : null}
        </Navbar>
    );
};

export default Header;