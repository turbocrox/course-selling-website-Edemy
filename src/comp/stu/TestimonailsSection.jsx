import React from 'react';
import { dummyTestimonial, assets } from '../../assets/assets';

const TestimonialsSection = () => {
  return (
    <div className='pb-14 px-8 md:px-0 lg:px-32 xl:px-40 2xl:px-60 text-center'>
      <h2 className='text-3xl font-medium text-gray-800'>Testimonials</h2>
      <p className='md:text-base text-gray-500 mt-3'>
        Hear from our learners as they share their journeys of transformation, success, and how our <br />
        platform has made a difference in their lives
      </p>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 text-left'>
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className='border border-gray-300 bg-white rounded-lg shadow-[0_4px_15px_0px_rgba(0,0,0,0.05)] overflow-hidden'
          >
            <div className='flex items-center gap-4 px-5 py-4 bg-gray-100'>
              <img className="h-12 w-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
              <div>
                <h1 className='text-lg font-medium text-gray-800'>{testimonial.name}</h1>
                <p className='text-gray-600'>{testimonial.role}</p>
              </div>
            </div>
            <div className='p-5'>
              <div className='flex gap-0.5'>
                {[...Array(5)].map((_, i) => (
                  <img
                    className="h-5"
                    key={i}
                    src={assets.star}
                    alt="star"
                  />
                ))}
              </div>
              <p className='text-gray-500 mt-4'>{testimonial.feedback}</p>
              <a
    href={testimonial.link || '#'}
    className="text-blue-500 hover:underline font-medium mt-4 inline-block"
  >
    Read more
  </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
