/* eslint-disable @next/next/no-img-element */
export default function Home() {
  const menu = ["Rankings", "Data", "Solution", "Pricing", "Resources"];

  const features = [
    {
      icon: "/icons/speakerphone.svg",
      title: "Know your Club",
    },
    {
      icon: "/icons/shopping-bag.svg",
      title: "Grow Community",
    },
    {
      icon: "/icons/chip.svg",
      title: "Manage NFTs",
    },
    {
      icon: "/icons/chart.svg",
      title: "Plan the Future",
    },
  ];

  return (
    <>
      <div className="overflow-hidden w-full min-h-screen font-sans bg-gray-900">
        <div className="relative">
          <img className="absolute opacity-70" src="/img/bg-1.svg" alt="" />
          <div className="relative py-10 px-8 mx-auto max-w-7xl">
            <nav className="flex justify-between items-center">
              <a href="#" className="text-2xl font-semibold text-white">
                NiftyGuild
              </a>

              <button className="hidden py-3 px-6 font-medium tracking-wider leading-5 text-white rounded-md border-2 border-gray-800 transition md:inline-block hover:bg-teal-300 hover:text-gray-900 hover:shadow-lg">
                Enter App
              </button>
            </nav>
          </div>
          <div className="relative py-10 px-8 mx-auto max-w-7xl">
            <div className="flex flex-col gap-y-12 md:flex-row">
              <div className="md:w-1/2">
                <h1 className="relative z-10 pt-10 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                  Join{" "}
                  <span className="relative after:bottom-2 after:left-0 after:bg-gradient-to-l after:from-teal-300 after:absolute after:w-80 after:h-5 after:-z-10">
                    NiftyGuid
                  </span>{" "}
                  to connect with your fellow NFT holders.
                </h1>
                <p className="pt-2 max-w-lg text-xl tracking-wide leading-relaxed text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <div className="flex gap-x-6 items-center pt-12">
                  <button className="py-4 px-6 font-medium tracking-wide bg-teal-200 rounded-lg shadow-md transition hover:bg-teal-300">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="flex items-center md:justify-center md:pl-24 md:w-1/2">
                <img
                  className="max-w-md lg:max-w-xl drop-shadow-2xl"
                  src="/img/hero-3.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img className="absolute opacity-70" src="/img/bg-2.svg" alt="" />
          <div className="relative py-16 px-8 mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center md:gap-x-10">
              <span className="font-semibold tracking-wider text-white uppercase whitespace-nowrap">
                Created With
              </span>
              <div className="flex flex-wrap gap-y-4 gap-x-14 items-center pt-6 -mx-2 lg:flex-nowrap md:pt-0 md:mx-0">
                <span className="font-semibold text-2xl text-white opacity-75 cursor-pointer hover:opacity-100">
                  Textile.io
                </span>
                <span className="font-semibold text-2xl text-white opacity-75 cursor-pointer hover:opacity-100">
                  Filecoine
                </span>
                <span className="font-semibold text-2xl text-white opacity-75 cursor-pointer hover:opacity-100">
                  Polygon
                </span>
                <span className="font-semibold text-2xl text-white opacity-75 cursor-pointer hover:opacity-100">
                  Covalent
                </span>
              </div>
            </div>
          </div>
          <div className="relative py-16 px-8 mx-auto max-w-7xl">
            <div className="flex flex-col gap-x-8 justify-between md:flex-row">
              <div className="md:w-1/2">
                <h2 className="text-5xl font-bold leading-tight text-white">
                  Lorem ipsum dolor sit amet
                </h2>
              </div>
              <div className="md:w-1/2">
                <p className="pt-6 text-xl leading-relaxed text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <button className="py-4 px-8 mt-8 font-medium tracking-wide bg-teal-200 rounded-lg transition hover:bg-teal-300">
                  Get Started
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 items-start py-16 w-full md:grid-cols-4 md:gap-x-8">
              {features.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex overflow-hidden relative flex-col items-start p-6 bg-gray-800 rounded-lg transition duration-300 cursor-pointer group hover:bg-white"
                  >
                    <span className="absolute top-0 right-0 w-24 h-24 bg-teal-200 transition-transform ease-out rotate-45 translate-x-20 -translate-y-20 group-hover:translate-x-14 group-hover:-translate-y-14" />
                    <div className="p-2 bg-gray-900 rounded-md transition duration-300 group-hover:bg-teal-200">
                      <div className="w-6 h-6 text-white transition duration-300 group-hover:text-gray-800">
                        <img
                          className="text-white group-hover:text-gray-800"
                          src={item.icon}
                          alt=""
                        />
                      </div>
                    </div>
                    <span className="inline-block pt-6 text-2xl font-medium tracking-wide text-white transition duration-300 group-hover:text-gray-800">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="relative py-10 px-8 mx-auto max-w-7xl">
          <div className="flex flex-col gap-y-12 md:flex-row">
            <div className="md:w-1/2">
              <img
                className="max-w-md lg:max-w-xl drop-shadow-2xl"
                src="/img/hero-2.png"
                alt=""
              />
            </div>
            <div className="flex flex-col items-start md:justify-center md:pl-24 md:w-1/2">
              <h1 className="relative z-10 pt-10 text-2xl font-bold leading-tight text-white md:text-2xl lg:text-4xl">
                Join{" "}
                <span className="relative after:bottom-2 after:left-0 after:bg-gradient-to-l after:from-teal-300 after:absolute after:w-80 after:h-1 after:-z-10">
                  NiftyGuid
                </span>{" "}
                to connect with your fellow NFT holders.
              </h1>
              <p className="pt-10 max-w-lg text-xl text-left tracking-wide leading-relaxed text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
              <div className="flex gap-x-6 items-start justify-start pt-12">
                <button className="py-4 px-6 font-medium tracking-wide bg-teal-200 rounded-lg shadow-md transition hover:bg-teal-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative py-10 px-8 mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-y-12 md:flex-row">
            <div className="md:w-1/2">
              <h1 className="relative z-10 pt-10 text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
                Join{" "}
                <span className="relative after:bottom-2 after:left-0 after:bg-gradient-to-l after:from-teal-300 after:absolute after:w-80 after:h-1 after:-z-10">
                  NiftyGuid
                </span>{" "}
                to connect with your fellow NFT holders.
              </h1>
              <p className="pt-2 max-w-lg text-xl tracking-wide leading-relaxed text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
            <div className="flex items-center md:justify-center md:pl-24 md:w-1/2">
              <img
                className="max-w-md lg:max-w-xl drop-shadow-2xl"
                src="/img/hero.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
