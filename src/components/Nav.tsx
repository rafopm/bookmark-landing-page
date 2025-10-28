'use client'
import useBaseUrl from '@/Hooks/useBaseUrls'
import { useState, useEffect } from 'react'

const Nav = () => {
    const baseUrl = useBaseUrl();
    const [openMenu, setOpenMenu] = useState(false);
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        console.log('Estado del menú:', openMenu);

        if (openMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [openMenu]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Simplemente verificamos si estamos en el top o no
            if (currentScrollY === 0) {
                setIsAtTop(true);
            } else {
                setIsAtTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Clases condicionales para cambiar la posición
    const navClasses = `
        fixed w-full z-50 flex justify-center transition-all duration-300 ease-in-out
        ${isAtTop ? 'top-8' : 'top-0'}
        lg:px-4 py-2 bg-white
    `;

    return (
        <>
            {/* Nav principal fixed */}
            <nav className={navClasses}>
                {/* Contenedor principal con justify-between */}
                <div className="flex justify-between items-center w-full max-w-full px-[27px] lg:px-0  lg:max-w-[1100px]">

                    {/* Logo - siempre visible */}
                    <div className="flex items-center">
                        <img
                            className='h-[25px] w-[150px] lg:h-[26px] lg:w-[150px] cursor-pointer hover:opacity-80 transition-opacity'
                            src={`${baseUrl}/images/logo-bookmark.svg`}
                            alt="Logo Bookmark"
                        />
                    </div>

                    {/* Menú desktop + hamburguesa */}
                    <div className="flex items-center">
                        {/* Menú desktop */}
                        <div className="hidden lg:flex ">
                            <ul className="flex flex-row items-center gap-10 font-light text-very-dark-blue text-[13px] tracking-wide">
                                <li className="relative group">
                                    <span className="relative z-10 hover:cursor-pointer   hover:text-soft-red transition-colors duration-200 font-light">
                                        FEATURES
                                    </span>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-soft-red transition-all duration-300 group-hover:w-full"></span>
                                </li>
                                <li className="relative group">
                                    <span className="relative z-10 hover:cursor-pointer  hover:text-soft-red transition-colors duration-200 font-light">
                                        PRICING
                                    </span>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-soft-red transition-all duration-300 group-hover:w-full"></span>
                                </li>
                                <li className="relative group">
                                    <span className="relative z-10 hover:cursor-pointer  hover:text-soft-red transition-colors duration-200 font-light">
                                        CONTACT
                                    </span>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-soft-red transition-all duration-300 group-hover:w-full"></span>
                                </li>
                                <li className="relative group ml-4">
                                    <button className="btn btn-secondary  hover:cursor-pointer px-7 py-2 text-white hover:bg-white hover:text-soft-red border-2 border-soft-red transition-all duration-200 font-medium">
                                        LOGIN
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* Botón hamburguesa - solo mobile */}
                        <button
                            className='lg:hidden focus:outline-none border-0 bg-transparent z-60'
                            onClick={(e) => {
                                console.log('Botón hamburguesa pulsado');
                                e.stopPropagation();
                                setOpenMenu(true);
                            }}
                            aria-label="Abrir menú"
                        >
                            <img
                                className='h-[16px] w-[16px] cursor-pointer outline-none hover:opacity-80 transition-opacity'
                                src={`${baseUrl}/images/icon-hamburger.svg`}
                                alt="Abrir menú"
                            />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Menú móvil */}
            <div className={`
                fixed inset-0 w-full h-full bg-very-dark-blue/95 z-51 flex flex-col items-center justify-start lg:hidden
                transform transition-transform duration-300 ease-in-out
                ${openMenu ? 'translate-x-0' : '-translate-x-full'}
            `}>
                {/* Header del menú móvil */}
                <div className="w-full flex justify-between items-center mb-10 pt-10 px-[27px]">
                    <img
                        className='h-[25px] w-[150px] cursor-pointer hover:opacity-80 transition-opacity'
                        src={`${baseUrl}/images/logo-bookmark-white.svg`}
                        alt="Logo Bookmark"
                    />

                    <button
                        className='focus:outline-none btn-reset h-8 w-8 flex items-center justify-end rounded-lg'
                        onClick={(e) => {
                            console.log('Botón cerrar pulsado');
                            e.stopPropagation();
                            setOpenMenu(false);
                        }}
                        aria-label="Cerrar menú"
                    >
                        <img
                            className='h-4 w-4 cursor-pointer bg-none'
                            src={`${baseUrl}/images/icon-close.svg`}
                            alt="Cerrar menú"
                        />
                    </button>
                </div>

                {/* Lista de navegación móvil */}
                <ul className="flex flex-col gap-6 w-full max-w-[calc(100%-54px)] items-stretch text-xl font-[300] uppercase tracking-wider px-6 mt-[30px]">
                    <hr className="border-b border-grayish-blue/30 py-0" />
                    <li className="relative group flex items-center justify-center w-full">
                        <span className="relative z-10 block text-white w-full text-center font-light">FEATURES</span>
                    </li>
                    <hr className="border-b border-grayish-blue/30 py-0" />
                    <li className="relative group flex items-center justify-center w-full">
                        <span className="relative z-10 block text-white w-full text-center font-light">PRICING</span>
                    </li>
                    <hr className="border-b border-grayish-blue/30 py-0" />
                    <li className="relative group flex items-center justify-center w-full">
                        <span className="relative z-10 block text-white w-full text-center font-light">CONTACT</span>
                    </li>
                    <hr className="border-b border-grayish-blue/30 py-0" />
                    <li className="relative border group mt-0 border-white rounded-[5px] h-[40px] flex items-center justify-center w-full">
                        <span className="relative z-10 block text-white w-full text-center font-medium">LOGIN</span>
                    </li>
                </ul>

                <div className='fixed bottom-8 flex items-center justify-center w-full gap-8'>
                    <a href="">  <img src={`${baseUrl}/images/icon-facebook.svg`} alt="Ícono de Facebook" /></a>
                    <a href=""> <img src={`${baseUrl}/images/icon-twitter.svg`} alt="Ícono de Twitter" /></a>
                </div>
            </div>
        </>
    )
}

export default Nav