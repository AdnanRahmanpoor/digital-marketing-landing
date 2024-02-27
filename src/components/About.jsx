import HeroImg from '../assets/hero.jpg';
import gradientImg from '../assets/gradient.webp';

function About() {
  return (
    // <section className='flex md:flex-row flex-col  bg-[#191b27]'>
    //   <div className='flex-1 mx-auto max-w-screen-xl'>
    //     <div className='max-w-xl text-center sm:text-left'>
    //       <h3>Who We Are</h3>
    //       <p className='text-5xl'>Marketing Team</p>
    //       <button
    //         className='rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600'
    //         href='#'
    //       >
    //         Discover More
    //       </button>
    //     </div>
    //   </div>
    //   <div className='flex-1 justify-end'>
    //     <img src={HeroImg} alt='' className='bg-contain h-full w-full z-10' />{' '}
    //     <img
    //       src={HeroImg}
    //       alt=''
    //       className='bg-contain -my-[20rem] h-full w-full -mx-[2rem] border z-0'
    //     />
    //   </div>
    // </section>
    <section className='bg-[#191b27] flex items-stretch relative md:px-20'>
      {/* Left Side */}
      <div className='w-full lg:w-1/2 px-10 md:py-24'>
        <h1 className='text-4xl font-bold mb-4'>Who We Are</h1>
        <p className='text-xl text-gray-700 mb-8'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          metus magna, dapibus nec laoreet vitae, rutrum at dolor. Donec justo
          odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper
          nulla non metus auctor fringilla.
        </p>
        <a
          href='#'
          className='px-4 py-2 bg-blue-500 text-white font-bold rounded-md shadow-md hover:bg-blue-700'
        >
          Discover More
        </a>
      </div>

      {/* Right Side */}
      <div className='hidden lg:block flex-1 justify-end relative overflow-hidden py-20 px-20 mt-10'>
        <img
          src={HeroImg}
          className='relative w-full object-cover z-10 rounded-md'
        />
        <img
          src={gradientImg}
          className='absolute w-9/12 -my-[56%] mx-[10%]  z-0 rounded-xl shadow-2xl '
        />
      </div>
    </section>
  );
}
export default About;
