const Navbar = () => {
  return (
    <header className='bg-[#191b27]'>
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='md:flex md:items-center md:gap-12'>
            <a className='block text-[#fb0f64]' href='#'>
              <span className='font-black'>DigiMedia</span>
            </a>
          </div>

          <div className='hidden md:block'>
            <nav aria-label='Global'>
              <ul className='flex justify-items-end gap-6 text-sm'>
                <li>
                  <a
                    className='text-gray-500 transition hover:text-[#fb0f64]'
                    href='#'
                  >
                    {' '}
                    Homepage{' '}
                  </a>
                </li>

                <li>
                  <a
                    className='text-gray-500 transition hover:text-[#fb0f64]'
                    href='#'
                  >
                    {' '}
                    About{' '}
                  </a>
                </li>

                <li>
                  <a
                    className='text-gray-500 transition hover:text-[#fb0f64]'
                    href='#'
                  >
                    {' '}
                    Services{' '}
                  </a>
                </li>

                <li>
                  <a
                    className='text-gray-500 transition hover:text-[#fb0f64]'
                    href='#'
                  >
                    {' '}
                    Porfolio{' '}
                  </a>
                </li>

                <li>
                  <a
                    className='text-gray-500 transition hover:text-[#fb0f64]'
                    href='#'
                  >
                    {' '}
                    Why Us{' '}
                  </a>
                </li>

                <li>
                  <a
                    className='text-gray-500 transition hover:text-[#fb0f64]'
                    href='#'
                  >
                    {' '}
                    Order{' '}
                  </a>
                </li>
                <li>
                  <a
                    className='text-gray-500 transition hover:text-[#fb0f64]'
                    href='#'
                  >
                    {' '}
                    Contact{' '}
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className='flex items-center gap-4'>
            <div className='sm:flex sm:gap-4'>
              <div className='hidden sm:flex'>
                <a
                  className='rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600'
                  href='#'
                >
                  Get Started
                </a>
              </div>
            </div>

            <div className='block md:hidden'>
              <button className='rounded bg-[#202331] p-2 text-gray-600 transition hover:text-gray-400/75'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
