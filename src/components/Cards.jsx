const Cards = () => {
  return (
    <div className='flex md:flex-row flex-col lg:pt-10 px-10 pb-40  bg-[#191b27]'>
      <div className='rounded-lg border bg-gradient-to-b from-white/20  to-white/5 p-4 md:-my-20 md:mx-4 my-4 hover:shadow-[#fb0f64] hover:border-[#fb0f64] transition hover:shadow-lg sm:p-6'>
        <span className='flex justify-center mx-auto w-14 rounded  bg-white/20 p-2 text-white'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
            className='h-6 w-6'
          >
            <path
              d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z'
              fill='white'
            ></path>
          </svg>
        </span>

        <a href='#'>
          <h3 className='mt-0.5 text-lg font-medium text-white'>
            Search Engine Optimization (SEO)
          </h3>
        </a>

        <p className='mt-2 line-clamp-3 text-sm/relaxed text-white'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium
          dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus
          soluta, voluptates neque explicabo tempora nisi culpa eius atque
          dignissimos. Molestias explicabo corporis voluptatem?
        </p>

        <a
          href='#'
          className='group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600'
        >
          Find out more
          <span
            aria-hidden='true'
            className='block transition-all group-hover:ms-0.5'
          >
            &rarr;
          </span>
        </a>
      </div>
      <div className='rounded-lg border bg-gradient-to-b from-white/20  to-white/5 p-4 md:-my-20 md:mx-4 my-4 shadow-sm transition hover:shadow-slate-300 hover:shadow-lg sm:p-6'>
        <span className='flex justify-center mx-auto w-14 rounded  bg-white/20 p-2 text-white'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='currentColor'
            viewBox='0 0 16 16'
          >
            {' '}
            <path
              d='M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-6 5.7c0 .8.8.8.8.8h6.4s.8 0 .8-.8-.8-3.2-4-3.2-4 2.4-4 3.2Z'
              fill='white'
            ></path>{' '}
            <path
              d='M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.243c.122-.326.295-.668.526-1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7.81c.353.23.656.496.91.783.059-.187.09-.386.09-.593V4a2 2 0 0 0-2-2H2Z'
              fill='white'
            ></path>{' '}
          </svg>
        </span>

        <a href='#'>
          <h3 className='mt-0.5 text-lg font-medium text-white'>
            Content Creation & Marketing
          </h3>
        </a>

        <p className='mt-2 line-clamp-3 text-sm/relaxed text-white'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium
          dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus
          soluta, voluptates neque explicabo tempora nisi culpa eius atque
          dignissimos. Molestias explicabo corporis voluptatem?
        </p>

        <a
          href='#'
          className='group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600'
        >
          Find out more
          <span
            aria-hidden='true'
            className='block transition-all group-hover:ms-0.5'
          >
            &rarr;
          </span>
        </a>
      </div>
      <div className='rounded-lg border bg-gradient-to-b from-white/20  to-white/5 p-4 md:-my-20 md:mx-4 my-4 shadow-sm transition hover:shadow-[#fb0f64] hover:border-[#fb0f64] hover:shadow-lg sm:p-6'>
        <span className='flex justify-center mx-auto w-14 rounded  bg-white/20 p-2 text-white'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
            className='h-6 w-6'
          >
            <path
              d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
              fill='white'
            ></path>
          </svg>
        </span>

        <a href='#'>
          <h3 className='mt-0.5 text-lg font-medium text-white'>
            Social Media Management
          </h3>
        </a>

        <p className='mt-2 line-clamp-3 text-sm/relaxed text-white'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium
          dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus
          soluta, voluptates neque explicabo tempora nisi culpa eius atque
          dignissimos. Molestias explicabo corporis voluptatem?
        </p>

        <a
          href='#'
          className='group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600'
        >
          Find out more
          <span
            aria-hidden='true'
            className='block transition-all group-hover:ms-0.5'
          >
            &rarr;
          </span>
        </a>
      </div>
    </div>
  );
};
export default Cards;
