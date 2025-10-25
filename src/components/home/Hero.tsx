import { NextPage } from 'next'
import Icon from '../Icon'
import useBaseUrl from '@/Hooks/useBaseUrls'

const Hero: NextPage = () => {
  const baseUrl = useBaseUrl();

  return (
    <div className='flex min-h-screen justify-center items-center gap-6 md:gap-10 flex-col md:flex-row py-8 overflow-hidden'>
      {/* Contenedor de la imagen con fondo */}
      <div className='relative w-full max-w-md'>
        {/* Rectángulo redondeado detrás de la imagen - ajustado */}
        <div className='absolute -bottom-2 -right-4 w-4/5 h-3/4 bg-soft-blue rounded-l-full -z-10'></div>
        
        {/* Imagen */}
        <div className='relative z-10 p-4'>
          <img 
            src={`${baseUrl}/images/illustration-hero.svg`} 
            alt="Bookmark Manager Illustration" 
            className='w-full h-auto'
          />
        </div>
      </div>

      {/* Contenedor del texto y botones */}
      <div className='max-w-md text-center md:text-left'>
        <h1 className='text-[24px] leading-[34px] tracking-[4%] md:text-4xl font-bold text-very-dark-blue mb-4'>
          A Simple Bookmark Manager
        </h1>
        
        <p className='text-grayish-blue mb-6 md:mb-8 leading-relaxed'>
          A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
        </p>
        
        {/* Contenedor de botones */}
        <div className='flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start'>
          <button className='bg-soft-blue hover:bg-soft-blue-hover text-white px-4 py-3 md:px-6 md:py-3 rounded-md shadow-md transition duration-300 font-medium text-sm md:text-base'>
            Get it on Chrome
          </button>
          
          <button className='bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-3 md:px-6 md:py-3 rounded-md shadow-md transition duration-300 font-medium text-sm md:text-base'>
            Get it on Firefox
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero