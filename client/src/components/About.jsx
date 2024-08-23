
const About = () => {
    return (
<div className="py-26 bg-gradient-to-r from-[orange] to-white rounded-2xl px-8">
    <div className="max-w-5xl pt-10 lg:px-8 p-4 mx-auto">
        <div className="flex flex-col space-y-8"> {/* Flex container with equal vertical spacing */}
        <a
                href="#"
                className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-8">
                
                <div className="flex flex-col justify-between leading-normal">
                     <h7 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                       Education Beneficiary
                    </h7>
                    <p className="mb-6 font-normal text-gray-700 dark:text-gray-400 text-lg">
                        Students receiving scholarships, schools obtaining infrastructure support and participating in literacy programs.
                    </p>
                </div>
                <img
                    className="object-cover w-full rounded-t-lg h-64 md:h-auto md:w-64 md:rounded-none md:rounded-s-lg"
                    src="https://i.pinimg.com/564x/57/26/c1/5726c18de8f54cd9c05957e702af63fc.jpg"
                    alt=""
                /></a>
            <a
                href="#"
                className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-8">
                <img
                    className ="object-cover w-full rounded-t-lg h-64 md:h-auto md:w-64 md:rounded-none md:rounded-s-lg mr-4"
                    src="https://www.hdfcergo.com/images/default-source/health-insurance/nominee-in-health-insurance.jpg"
                    alt="" 
                />
                <div className="flex flex-col justify-between leading-normal">
                    <h7 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                       Health Beneficiary 
                    </h7>
                    <p className="mb-6 font-normal text-gray-700 dark:text-gray-400 text-lg">
                  Patients requiring medical care, individuals needing vaccinations and communities benefiting from health education.
                    </p>
                </div>
                </a>
            <a
                href="#"
                className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-8">
                
                <div className="flex flex-col justify-between leading-normal">
                    <h7 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Environmental Beneficiary
                    </h7>
                    <p className="mb-6 font-normal text-gray-700 dark:text-gray-400 text-lg">
                    Communities benefiting from clesn water projects, regions undergoing reforestation and inidviduals involved in environmental education.
                    </p>
                </div>
                <img
                    className="object-cover w-full rounded-t-lg h-64 md:h-auto md:w-64 md:rounded-none md:rounded-s-lg"
                    src="https://www.cyberswift.com/blog/wp-content/uploads/2023/05/csr-program-management-1140x760.jpg"
                    alt=""
                />
                </a>
                <a
                href="#"
                className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-8">
                <img
                    className ="object-cover w-full rounded-t-lg h-64 md:h-auto md:w-64 md:rounded-none md:rounded-s-lg mr-4"
                    src="https://www.churchlawcenter.com/wp-content/uploads/2022/06/What-is-a-Social-Welfare-Organization-and-How-Is-It-Different-Than-a-Charity.jpg"
                    alt="" 
                />
                <div className="flex flex-col justify-between leading-normal">
                    <h7 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Social Welfare Beneficiary 
                    </h7>
                    <p className="mb-6 font-normal text-gray-700 dark:text-gray-400 text-lg">
                    Underprivileged families, elderly individuals receiving social services and women and children in empowerment programs.
                    </p>
                </div>
                </a>


{/* <div id="animation-carousel" class="relative w-full" data-carousel="static">
    
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
       
        <div class="hidden duration-200 ease-linear" data-carousel-item>
            <img src="/docs/images/carousel/carousel-1.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        
        <div class="hidden duration-200 ease-linear" data-carousel-item>
            <img src="/docs/images/carousel/carousel-2.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        
        <div class="hidden duration-200 ease-linear" data-carousel-item="active">
            <img src="/docs/images/carousel/carousel-3.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
  
        <div class="hidden duration-200 ease-linear" data-carousel-item>
            <img src="/docs/images/carousel/carousel-4.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
       
        <div class="hidden duration-200 ease-linear" data-carousel-item>
            <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
   
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div> */}




</div>

        </div>
    </div>


  
    );
};

export default About;
