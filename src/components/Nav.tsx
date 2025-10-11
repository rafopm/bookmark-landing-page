'use client'
import useBaseUrl from '@/Hooks/useBaseUrls'
import { useState, useEffect } from 'react'

const Nav = () => {
    const baseUrl = useBaseUrl();
    const [openMenu, setOpenMenu] = useState(false);

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

    return (
        <>
            {/* Nav principal fixed */}
            <nav className="fixed top-0 left-0 w-full z-50 flex justify-center">
                {/* Header fijo con logo y botón hamburguesa */}
                <div className={`fixed top-[27px] w-full max-w-[calc(100%-54px)] lg:px-0 lg:py-0 text-white flex flex-row justify-between items-center bg-transparent lg:bg-transparent lg:mt-[50px] lg:ml-[60px] lg:mr-[60px] lg:max-w-[calc(100%-120px)] lg:relative ${openMenu ? 'hidden lg:flex' : 'flex'
                    }`}>
                    <img
                        className='h-[24px] w-[130px] cursor-pointer hover:opacity-80 transition-opacity'
                        src={`${baseUrl}/images/logo-bookmark.svg`}
                        alt="Logo Bookmark"
                    />

                    <button
                        className='focus:outline-none lg:hidden border-0 bg-transparent z-60'
                        onClick={(e) => {
                            console.log('Botón hamburguesa pulsado');
                            e.stopPropagation();
                            setOpenMenu(true);
                        }}
                        aria-label="Abrir menú"
                    >
                        <img
                            className='h-[15px] w-[18px] cursor-pointer outline-none hover:opacity-80 transition-opacity'
                            src={`${baseUrl}/images/icon-hamburger.svg`}
                            alt="Abrir menú"
                        />
                    </button>
                </div>

                {/* Menú desktop */}
                <div className="hidden lg:flex lg:items-center lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2">
                    <ul className="flex flex-row gap-[30px] font-bold text-white text-[15px] ml-[30px]">
                        <li className="relative group">
                            <span className="relative z-10 hover:cursor-pointer">home</span>
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="relative group">
                            <span className="relative z-10 hover:cursor-pointer">shop</span>
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="relative group">
                            <span className="relative z-10 hover:cursor-pointer">about</span>
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="relative group">
                            <span className="relative z-10 hover-cursor-pointer">contact</span>
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Menú móvil - FUERA del nav fixed */}
            {openMenu && (
                <div className="fixed inset-0 w-full h-full bg-[#1f2937] z-40 flex flex-col items-start justify-start lg:hidden">
                    {/* Header del menú móvil */}
                    <div className="w-full flex justify-between items-center mb-10 px-6 pt-8">
                        <img
                            className='h-[24px] w-[130px] cursor-pointer hover:opacity-80 transition-opacity'
                            src={`${baseUrl}/images/logo-bookmark.svg`}
                            alt="Logo Bookmark"
                        />
                        <button
                            className='focus:outline-none h-8 w-8 flex items-center justify-center rounded-lg hover:bg-white/20 transition-colors'
                            onClick={(e) => {
                                console.log('Botón cerrar pulsado');
                                e.stopPropagation();
                                setOpenMenu(false);
                            }}
                            aria-label="Cerrar menú"
                        >
                            <img
                                className='h-4 w-4 cursor-pointer'
                                src={`${baseUrl}/images/icon-close.svg`}
                                alt="Cerrar menú"
                            />
                        </button>
                    </div>

                    {/* Lista de navegación móvil */}
                    <ul className="flex flex-col gap-8 w-full text-white text-lg font-light uppercase tracking-wider px-6">
                        <li className="relative group border-b border-gray-600/50 pb-4">
                            <span className="relative z-10 hover:cursor-pointer block">home</span>
                        </li>
                        <li className="relative group border-b border-gray-600/50 pb-4">
                            <span className="relative z-10 hover:cursor-pointer block">shop</span>
                        </li>
                        <li className="relative group border-b border-gray-600/50 pb-4">
                            <span className="relative z-10 hover:cursor-pointer block">about</span>
                        </li>
                        <li className="relative group border-b border-gray-600/50 pb-4">
                            <span className="relative z-10 hover:cursor-pointer block">contact</span>
                        </li>
                    </ul>
                </div>
            )}
        </>
    )
}

export default Nav