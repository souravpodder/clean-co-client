import React from 'react';
import bucketgirl from '../../assets/images/bucketgirl.png';

const Landing = () => {
  return (
    <div className='pb-20'>
      <div class="hero h-screen lg:h-[65vh]  bg-accent mt-16 lg:mt-0 lg:px-20">
        <div class="hero-content flex-col lg:flex-row">

          <div className='h-full' >
            <h3 className='text-2xl' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">Best Quality</h3>
            <h1 class="text-5xl font-bold" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">Professional Cleaning Service</h1>
            <p class="py-6 max-w-xl" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button data-aos-delay="1000" class="btn btn-primary" data-aos="zoom-in">Get Started</button>
          </div>

          <div className='h-[60vh] shrink-0'>
            <img src={bucketgirl} class="h-full " alt="" />
          </div>
        </div>
      </div>

      <div className='shadow-lg w-5/6 mx-auto p-10 rounded-xl mt-[-50px] relative bg-base-200 '>
        <h1 className='text-2xl text-primary mb-4'>Get Free Estimate</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3'>
          <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
          <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
          <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
          <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
          <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
          <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
          <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
          <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        </div>

        <button className='btn btn-primary uppercase mt-4'>Request a quote</button>
      </div>
    </div>
  );
};

export default Landing;