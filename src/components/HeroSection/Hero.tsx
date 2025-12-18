import Navbar from "./Navbar"
// import { Link } from "react-router-dom"


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

     {/* <section>
     
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

     </section> */}

     <br />
     <br />
     <br />


     <section>
        <h3 className="text-center font-bold text-2xl md:text-3xl text-black mb-8">
          New This Season
        </h3>
        <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

                {/* Card 1 */}
                <div className="group flex flex-col">
                <div className="relative">
                    <div className="aspect-4/4 overflow-hidden rounded-2xl">
                    <img
                        className="size-full object-cover rounded-2xl"
                        src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
                        alt="AA Nyeri Coffee"
                    />
                    </div>

                    <div className="pt-4">
                    <h3 className="font-medium md:text-lg text-black">
                        AA Nyeri Reserve
                    </h3>
                    <p className="mt-2 font-semibold text-black">
                        KES 1,200
                    </p>
                    </div>
                </div>

                <div className="mb-2 mt-4 text-sm text-black">
                    <div className="flex flex-col">
                    <div className="py-3 border-t border-gray-200">
                        <div className="grid grid-cols-2 gap-2">
                        <span className="font-medium">Tasting Notes:</span>
                        <span className="text-end">Blackcurrant, Citrus, Honey</span>
                        </div>
                    </div>
                    <div className="py-3 border-t border-gray-200">
                        <div className="grid grid-cols-2 gap-2">
                        <span className="font-medium">Region:</span>
                        <span className="text-end">Nyeri</span>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="mt-auto">
                    <button className="py-2 px-3 w-full rounded-xl bg-yellow-400 text-black font-medium hover:bg-yellow-500 transition">
                    Buy now
                    </button>
                </div>
                </div>

                {/* Card 2 */}
                <div className="group flex flex-col">
                <div className="relative">
                    <div className="aspect-4/4 overflow-hidden rounded-2xl">
                    <img
                        className="size-full object-cover rounded-2xl"
                        src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80"
                        alt="Kirinyaga Coffee"
                    />
                    </div>

                    <div className="pt-4">
                    <h3 className="font-medium md:text-lg text-black">
                        Kirinyaga Washed
                    </h3>
                    <p className="mt-2 font-semibold text-black">
                        KES 1,050
                    </p>
                    </div>
                </div>

                <div className="mb-2 mt-4 text-sm text-black">
                    <div className="flex flex-col">
                    <div className="py-3 border-t border-gray-200">
                        <div className="grid grid-cols-2 gap-2">
                        <span className="font-medium">Tasting Notes:</span>
                        <span className="text-end">Red Apple, Lime, Brown Sugar</span>
                        </div>
                    </div>
                    <div className="py-3 border-t border-gray-200">
                        <div className="grid grid-cols-2 gap-2">
                        <span className="font-medium">Region:</span>
                        <span className="text-end">Kirinyaga</span>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="mt-auto">
                    <button className="py-2 px-3 w-full rounded-xl bg-yellow-400 text-black font-medium hover:bg-yellow-500 transition">
                    Buy now
                    </button>
                </div>
                </div>

                {/* Card 3 */}
                <div className="group flex flex-col">
                <div className="relative">
                    <div className="aspect-4/4 overflow-hidden rounded-2xl">
                    <img
                        className="size-full object-cover rounded-2xl"
                        src="https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=800&q=80"
                        alt="Rift Valley Coffee"
                    />
                    </div>

                    <div className="pt-4">
                    <h3 className="font-medium md:text-lg text-black">
                        Rift Valley Peaberry
                    </h3>
                    <p className="mt-2 font-semibold text-black">
                        KES 1,350
                    </p>
                    </div>
                </div>

                <div className="mb-2 mt-4 text-sm text-black">
                    <div className="flex flex-col">
                    <div className="py-3 border-t border-gray-200">
                        <div className="grid grid-cols-2 gap-2">
                        <span className="font-medium">Tasting Notes:</span>
                        <span className="text-end">Cranberry, Floral, Cocoa</span>
                        </div>
                    </div>
                    <div className="py-3 border-t border-gray-200">
                        <div className="grid grid-cols-2 gap-2">
                        <span className="font-medium">Region:</span>
                        <span className="text-end">Rift Valley</span>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="mt-auto">
                    <button className="py-2 px-3 w-full rounded-xl bg-yellow-400 text-black font-medium hover:bg-yellow-500 transition">
                    Buy now
                    </button>
                </div>
                </div>

            </div>
        </div>
     </section>

     <section>
        <div className="py-10 md:py-16 lg:py-20 bg-orange-100">
            <div className="px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 md:items-center">
                
                {/* Image */}
                <div className="relative h-80 md:h-150 bg-gray-100 rounded-2xl dark:bg-neutral-800">
                <img
                    className="absolute inset-0 size-full object-cover rounded-2xl"
                    src="https://images.unsplash.com/photo-1507914464562-6ff4ac29692f?q=80&w=768&auto=format&fit=crop"
                    alt="Kenyan coffee highlands"
                />
                </div>

                {/* Content */}
                <div className="pt-10 md:p-10">
                <blockquote className="max-w-4xl mx-auto">
                    
                    <p className="mb-6 md:text-lg text-black">
                    Rooted in Kenya’s Coffee Highlands
                    </p>

                    <p className="text-xl sm:text-2xl lg:text-3xl lg:leading-normal text-black">
                    From the fertile slopes of Nyeri, Kirinyaga, and the Rift Valley, Kenyan coffee is grown at high altitude and slow-ripened to produce bright acidity, deep sweetness, and complex, unforgettable flavors.
                    </p>

                    <footer className="mt-6 md:mt-10">
                    <div className="border-neutral-700">
                        <button
                        type="button"
                        className="group inline-flex items-center gap-x-3 text-black text-sm focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none"
                        >
                        <span className="size-8 md:size-10 flex flex-col justify-center items-center bg-black text-white rounded-full group-hover:scale-105 group-focus:scale-105 transition-transform duration-300 ease-in-out">
                            <svg
                            className="shrink-0 size-5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            >
                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                            </svg>
                        </span>
                        Watch the Video
                        </button>
                    </div>
                    </footer>

                </blockquote>
                </div>

            </div>
            </div>
        </div>
     </section>

    </>
  )
}

export default Hero