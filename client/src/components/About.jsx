const About = () => {
  return (
    <div>
      <div className="sm:py-26 bg-gradient-to-r from-indigo-200 to-blue-100 rounded-2xl mx-8">
        <div className="mx-auto max-w-5xl pt-10 lg:px-8 p-4">
          <div className="mx-auto max-w-2xl text-center rounded-2xl">
            <h2 className=" text-3xl font-bold pb-4 leading-7 text-blue-900">
              Lorem, ipsum dolor.
            </h2>
            <p className=" text-lg font-bold leading-8 text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur deserunt tenetur debitis expedita in non velit
              voluptate soluta perspiciatis et fugiat omnis magni perferendis
              nostrum, minima suscipit fugit nisi at?
            </p>
          </div>
          <div className="mx-auto m-10 flex flex-row items-center justify-evenly">
            <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img className="h-full w-full" src="/mc.svg" alt="ayurveda" />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  lorem
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur similique, voluptate magni eaque asperiores iste
                  odit esse dolorum accusantium sed iusto voluptates porro,
                  consequuntur voluptatum, quaerat ipsum tempore culpa
                  consequatur?
                </p>
              </div>
              <div className="p-6 pt-0">
                <button
                  data-ripple-light="true"
                  type="button"
                  className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                  <a target="_blank" href="#">
                    Read More
                  </a>
                </button>
              </div>
            </div>
            <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img className="h-full w-full" src="/mc.svg" alt="ayurveda" />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  lorem
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur similique, voluptate magni eaque asperiores iste
                  odit esse dolorum accusantium sed iusto voluptates porro,
                  consequuntur voluptatum, quaerat ipsum tempore culpa
                  consequatur?
                </p>
              </div>
              <div className="p-6 pt-0">
                <button
                  data-ripple-light="true"
                  type="button"
                  className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                  <a target="_blank" href="#">
                    Read More
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
