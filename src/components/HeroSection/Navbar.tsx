import { Link } from "react-router-dom"

function Navbar() {
  return (
    <header className="flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full py-7 bg-white dark:bg-neutral-900">
      <nav className="relative max-w-7xl w-full flex flex-wrap lg:grid lg:grid-cols-12 items-center px-4 md:px-6 lg:px-8 mx-auto">
        
        {/* Logo / Brand */}
        <div className="lg:col-span-3 flex items-center">
          <a to="#" className="text-2xl font-bold text-black dark:text-white">Rift Valley Roast</a>
        </div>

        {/* Navbar Links */}
        <div id="hs-pro-hcail" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block lg:w-auto lg:basis-auto lg:order-2 lg:col-span-6">
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 lg:flex-row lg:justify-center lg:items-center lg:gap-y-0 lg:gap-x-7 lg:mt-0">
            <Link className="text-black dark:text-white hover:text-yellow-500 dark:hover:text-yellow-400 font-medium transition" to="/">Home</Link>
            <Link className="text-black dark:text-white hover:text-yellow-500 dark:hover:text-yellow-400 font-medium transition" to="/listings">Listings</Link>
            <Link className="text-black dark:text-white hover:text-yellow-500 dark:hover:text-yellow-400 font-medium transition" to="/products">Product</Link>
            <Link className="text-black dark:text-white hover:text-yellow-500 dark:hover:text-yellow-400 font-medium transition" to="/checkout">Checkout</Link>
          </div>
        </div>

        {/* Right buttons */}
        <div className="flex items-center gap-x-2 ms-auto py-1 lg:ps-6 lg:order-3 lg:col-span-3">
          <button className="flex justify-center items-center rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 p-2">
            <span className="sr-only">Search</span>
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <button className="flex justify-center items-center rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 p-2">
            <span className="sr-only">Cart</span>
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
          </button>
          
          <button className="py-2 px-4 rounded-xl bg-yellow-400 text-black hover:bg-yellow-500 transition font-medium">
            <Link to="/signin">Sign in</Link>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;