import Navbar from "./Navbar"
import { Link } from "react-router-dom"


function Hero() {
  return (
    <>
      <Navbar />
      
      <br />
      <br />
      
      <section>
       
        <div className="px-4 sm:px-6 lg:px-8 ">
        <div className="h-120 md:h-[80dvh] flex flex-col bg-[url('https://images.unsplash.com/photo-1462917882517-e150004895fa?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat rounded-2xl">
            <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
            <h1 className="text-xl md:text-3xl lg:text-5xl text-white">
                Bringing Art to everything
            </h1>
            </div>
        </div>
        </div>

      </section>

     <section>
     
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
        
        <Link className="group flex flex-col focus:outline-hidden" to="#">
            <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
            <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl" 
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop"
            alt="Blog Image" />
            </div>

            <div className="pt-4">
            <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-1 before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
                Signature Espresso
            </h3>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
                Bold, intense espresso crafted from premium Rift Valley beans.
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
                <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Espresso
                </span>
                <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Dark Roast
                </span>
                <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Bold Flavor
                </span>
            </div>
            </div>
        </Link>
        
        <Link className="group flex flex-col focus:outline-hidden" to="#">
            <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
            <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl" 
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop"
            alt="Blog Image" />
            </div>

            <div className="pt-4">
            <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-1 before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
                Hand Brewed Pour-Over
            </h3>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
                Clean, aromatic flavors highlighting the bean’s natural character.
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
                <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Pour Over
                </span>
                <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                Single Origin
                </span>
            </div>
            </div>
        </Link> 
        </div>

     </section>
    </>
  )
}

export default Hero