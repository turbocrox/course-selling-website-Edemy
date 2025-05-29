import React from 'react';
import { assets } from '../../assets/assets';

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0"> 
      <h1 className="text-xl md:text-4xl pb-4 text-gray-600 font-sans text-center">
        Learn anything, anywhere, anytime
      </h1> 
     <p className="text-gray-400 sm:text-sm text-center max-w-xl">
  Explore expert-led courses and start learning new skills at your own pace.
</p>

      <div className="flex flex-col sm:flex-row items-center justify-center font-medium gap-4 mt-4">
        <button className="px-10 py-3 rounded-md text-white bg-blue-600">
          Get started
        </button>
        <button className="inline-flex items-center gap-2 text-blue-600">
          Learn more <img src={assets.arrow_icon} alt="arrow_icon" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
