import React from "react";

export default function MainBody() {
  return (
    <>
      <div className="flex flex-col space-y-4 md:mt-[233px] md:ml-[460px] md:flex-row md:space-y-0 md:space-x-4">
        <div className="flex h-[433px] w-[433px] items-center justify-center">
          <div className="scale-200 absolute ml-[50px] h-96 w-80 rotate-6 transform rounded-2xl bg-gray-400"></div>

          <div className="scale-200 h-96 w-80 rotate-6 transform space-y-6 rounded-2xl bg-gray-100 p-6 transition duration-300 hover:rotate-0">
            <div className="flex justify-end">
              <div className="h-4 w-4 rounded-full bg-gray-900"></div>
            </div>

            <header className="text-center text-xl font-extrabold text-gray-600">
              2021.09.01
            </header>

            <div>
              <p className="text-center text-5xl font-extrabold text-gray-900">
                Tip (Me)
              </p>
              <p className="text-center text-4xl font-extrabold text-[#FE5401]">
                waiter / chef
              </p>
            </div>

            <footer className="mb-10 flex justify-center">
              <button className="flex items-baseline gap-2 rounded-lg bg-[#FE5401] px-4 py-2.5 text-xl font-bold text-white hover:bg-[#FF7308]">
                <span>Start</span>
                <i className="fas fa-hand-peace text-xl"></i>
              </button>
            </footer>
          </div>
        </div>

        <div className="h-[433px] w-[433px] place-items-center sm:ml-[134px]">
          <div className="scale-200 absolute ml-[25px] h-96 w-80 rotate-6 transform rounded-2xl bg-gray-400"></div>

          <div className="scale-200 h-96 w-80 rotate-6 transform space-y-6 rounded-2xl bg-gray-100 p-6 transition duration-300 hover:rotate-0">
            <div className="flex justify-end">
              <div className="h-4 w-4 rounded-full bg-gray-900"></div>
            </div>

            <header className="text-center text-xl font-extrabold text-gray-600">
              2021.09.01
            </header>

            <div>
              <p className="text-center text-5xl font-extrabold text-gray-900">
                Rate Us (Survey)
              </p>
              <p className="text-center text-4xl font-extrabold text-[#FE5401]">
                Restaurant
              </p>
            </div>

            <footer className="mb-10 flex justify-center">
              <button className="flex items-baseline gap-2 rounded-lg bg-[#FE5401] px-4 py-2.5 text-xl font-bold text-white hover:bg-[#FF7308]">
                <span>Start</span>
                <i className="fas fa-hand-peace text-xl"></i>
              </button>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
