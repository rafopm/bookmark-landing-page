'use client'
import useBaseUrl from '@/Hooks/useBaseUrls'
import { useState, useEffect } from 'react'

const Nav = () => {
    const baseUrl = useBaseUrl();
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        console.log('Estado del menú:', openMenu);
    }, [openMenu]);

    return (
        <div className='absolute z-10  w-full lg:flex lg:items-center lg:mt-[50px] lg:ml-[60px] lg:mr-[60px] lg:max-w-[calc(100%-120px)]'>
            <div className={`relative px-[27px] lg:px-0 mt-[33px] lg:mt-0 text-white flex flex-row items-center   lg:w-auto  ${openMenu ? 'hidden' : 'block'}`}>
                <span className='relative w-full '>
                    <img
                        className='h-[24px] w-[130px] cursor-pointer  hover:opacity-80 transition-opacity'
                        src={`${baseUrl}/images/logo-bookmark.svg`}
                        alt="Logo Bookmark"
                    />
                </span>

                <button
                    className='focus:outline-none lg:hidden border-0 bg-transparent'
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
            <div
                className={`absolute bg-white lg:bg-transparent px-[24px] lg:items-center w-full lg:w-auto mt-0   flex flex-row h-[110px] lg:h-auto items-center transition-all duration-300 ease-in-out ${openMenu ? 'block' : 'hidden'} lg:block lg:relative`}
            >
               
                <ul className='flex flex-row gap-[24px] lg:gap-[30px] font-semibold lg:font-bold text-[16px] lg:text-[15px] lg:text-white lg:ml-[30px]'>
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
                        <span className="relative z-10 hover:cursor-pointer">contact</span>
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </ul>

                <button
                    className='focus:outline-none lg:hidden h-[16px] w-[16px] mr-[56px]  border-0 bg-transparent'
                    onClick={(e) => {
                        e.stopPropagation();
                        setOpenMenu(false);
                    }}
                    aria-label="Cerrar menú"
                >
                    <img
                        className='h-full w-full cursor-pointer hover:opacity-80 transition-opacity'
                        src={`${baseUrl}/images/icon-close.svg`}
                        alt="Cerrar menú"
                    />
                </button>
            </div>


        </div>
    )
}

export default Nav