import React from 'react';
import Review from '../Shared/Review';

const HomeReviews = () => {
  return (
    <div className='mb-28 py-24'>
      <div className='my-12 pb-16'>
        <h2 className='text-3xl font-extrabold text-center uppercase underline underline-offset-8'>What Our Customers Say</h2>
      </div>
      <div className='flex justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <Review />
          <Review />
          <Review />
        </div>
      </div>
    </div>
  );
};

export default HomeReviews;