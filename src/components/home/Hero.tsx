import { NextPage } from 'next'
import useBaseUrl from '@/Hooks/useBaseUrls'

const Hero: NextPage = () => {
  const baseUrl = useBaseUrl();

  return (
    <div className='flex min-h-screen justify-center items-center w-full'>

      {/* Rectángulo redondeado detrás de la imagen - pegado a la derecha */}
      <div className='absolute right-0 w-4/5 h-1/4 bottom-[300px] lg:w-4/5 lg:h-4/6 lg:h-[350px] lg:w-[520px] bg-soft-blue rounded-l-full -z-10 transform  lg:top-2/3 -translate-y-4/7'></div>

      {/* Contenedor principal con máximo de 1100px */}
      <div className='flex justify-center items-center gap-4 flex-col lg:justify-between lg:gap-10 lg:flex-row lg:flex-row-reverse w-full max-w-[1250px] mx-0 overflow-hidden lg:items-center'>

        {/* Imagen */}
        <div className='relative z-10 p-4 w-full max-w-md lg:-bottom-4 lg:p-0 lg:max-w-[550px] flex items-center justify-center'>
            <img
              src={`${baseUrl}/images/illustration-hero.svg`}
              alt="Bookmark Manager Illustration"
              className='w-full lg:w-[580px] h-auto'
            />
          </div>

        {/* Contenedor del texto y botones - 50% del ancho */}
        <div className='w-full lg:w-1/2 max-w-md text-center lg:text-left lg:max-w-[550px] lg:pl-20'>
          <h1 className='text-custom-3xl leading-[40px] tracking-wide   lg:text-custom-4xl font-bold text-very-dark-blue mb-4 lg:mb-8 pt-4'>
            A Simple Bookmark Manager
          </h1>

          <p className='text-custom-sm leading-[25px] px-10 tracking-wide text-grayish-blue  mb-6 lg:text-custom-base lg:px-0 lg:mb-8 lg:pr-0'>
            A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
          </p>

          {/* Contenedor de botones */}
          <div className='flex flex-row text-custom-sm  gap-3 lg:gap-4 justify-center lg:justify-start'>
            <button className='bg-soft-blue text-custom-sm   hover:cursor-pointer  hover:bg-soft-blue-hover text-white px-4 py-3 lg:px-6 lg:py-3 rounded-md shadow-md transition duration-300 font-medium  '>
              Get it on Chrome
            </button>

            <button className='bg-gray-100   hover:cursor-pointer  hover:bg-gray-200 text-gray-800 px-4 py-3 lg:px-6 lg:py-3 rounded-md shadow-md transition duration-300 font-medium  '>
              Get it on Firefox
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero