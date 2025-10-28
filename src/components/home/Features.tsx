// Suggested code may be subject to a license. Learn more: ~LicenseLog:1621037802.
import { useState } from 'react';
import useBaseUrl from '@/Hooks/useBaseUrls'

const features = [
  {
    title: 'Simple Bookmarking',
    description:
      'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    image: '/images/illustration-features-tab-1.svg',
  },
  {
    title: 'Speedy Searching',
    description:
      'Our powerful search feature will help you find saved sites in no time at all. No need to scroll through all of your bookmarks.',
    image: '/images/illustration-features-tab-2.svg',
  },
  {
    title: 'Easy Sharing',
    description:
      'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    image: '/images/illustration-features-tab-3.svg',
  },
];

const Features = () => {
  const [activeTab, setActiveTab] = useState(0);
 const baseUrl = useBaseUrl();

  return (
    <section className="py-4 mt-4 lg:mt-60">
      {/* Heading */}
      <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h2 className="text-custom-3xl font-bold  text-center text-bookmark-blue">Features</h2>
        <p className="text-center text-bookmark-grey mt-4 leading-[25px] text-grayish-blue  text-custom-sm px-8 tracking-wide lg:text-custom-base">
          Our aim is to make it quick and easy for you to access your favourite websites. Your
          bookmarks sync between your devices so you can access them on the go.
        </p>
      </div>
      {/* Feature 1 */}
      <div className="container flex flex-col md:flex-row items-center justify-center mt-8 md:mt-24">
        {/* Tabs */}
        <div className="flex flex-col md:flex-row justify-center overflow-hidden">
          {features.map((feature, index) => (
            
            <div
              key={index}
              className={`flex-1 cursor-pointer border-b-2 md:border-b-0 md:border-r-2 border-bookmark-blue hover:border-bookmark-red transition duration-200 ease-in-out ${
                activeTab === index ? 'border-b-4 md:border-r-4 border-bookmark-red' : ''
              }`}
              onClick={() => setActiveTab(index)}
            ><hr className="border-b border-grayish-blue/30 py-0" />
              <div className="py-5 text-center text-bookmark-blue text-xl">{feature.title}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Tab content */}
      <div className="relative container flex flex-col md:flex-row items-center justify-center mt-12 md:mt-24">
        {/* Image */}
        <div className="flex justify-center flex-1 mb-10 md:mb-0 z-10">
          <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={baseUrl+features[activeTab].image} alt="" />
        </div>   
        {/* Content */}
        <div className="flex flex-1 flex-col items-center md:items-start">
          <h1 className="text-3xl text-bookmark-blue">{features[activeTab].title}</h1>
          <p className="text-bookmark-grey my-4 text-center md:text-left sm:w-3/4 lg:w-full">
            {features[activeTab].description}
          </p>
          <button
            type="button"
            className="btn btn-purple hover:bg-bookmark-white hover:text-bookmark-purple"
          >
            More Info
          </button>
        </div>
        {/* Absolute rectangle */}
        <div className="hidden md:block overflow-hidden bg-bookmark-purple rounded-r-full absolute h-80 w-2/4 top-32 right-0 lg:-bottom-20 lg:-right-36"></div>
      </div>
    </section>
  );
};

export default Features;
