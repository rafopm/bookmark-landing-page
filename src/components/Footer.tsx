'use client'
import useBaseUrl from '@/Hooks/useBaseUrls'

const Footer = () => {
    const baseUrl = useBaseUrl();
    
  return (
    <footer className="bg-bookmark-blue py-8">
      <div className="container flex flex-col md:flex-row items-center">
        <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
        <img
                        className='h-[24px] w-[130px] cursor-pointer  hover:opacity-80 transition-opacity'
                        src={`${baseUrl}/images/logo-bookmark.svg`}
                        alt="Logo Bookmark"
                    />
          <ul className="flex text-white uppercase gap-12 text-xs">
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
        <div className="flex gap-10 mt-12 md:mt-0">
          <li><i className="text-white text-2xl fab fa-twitter"></i></li>
          <li><i className="text-white text-2xl fab fa-facebook-square"></i></li>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
