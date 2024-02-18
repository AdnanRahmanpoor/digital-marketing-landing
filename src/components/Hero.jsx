import HeroImg from '../assets/hero.jpg';

const Hero = () => {
  return (
    <section className='flex md:flex-row flex-col z-10 h-screen bg-[#05080d]'>
      {/* <div className='absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/45 sm:to-white/25 sm:bg-gradient-to-r '></div> */}

      <div className='flex-1 relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
        <div className='max-w-xl text-center sm:text-left'>
          <h1 className='text-3xl font-extrabold sm:text-5xl'>
            Let us handle your
            <strong className='block font-extrabold text-[#fb0f64]'>
              {' '}
              Digital Marketing.{' '}
            </strong>
          </h1>

          <p className='mt-4 max-w-lg sm:text-xl/relaxed'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className='mt-8 flex flex-wrap gap-4 text-center'>
            <a
              href='#'
              className='block w-full rounded bg-[#fb0f64] px-12 py-3 text-sm font-medium text-white shadow hover:bg-pink-900 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto'
            >
              Get Started
            </a>

            <a
              href='#'
              className='block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto'
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className='flex-1 justify-end'>
        <img src={HeroImg} alt='' className='bg-contain h-full w-full' />
      </div>
    </section>
  );
};
export default Hero;
