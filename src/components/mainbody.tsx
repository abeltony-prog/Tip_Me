import React from "react";

export default function MainBody(){
    return(
        <>
     
     <div className="flex flex-col md:flex-row space-y-4 md:mt-[233px] md:ml-[360px] sm:ml-[34px] md:space-y-0 md:space-x-4">
     <div className="w-[433px] h-[433px] flex justify-center items-center">
    <div className="absolute w-80 h-96 ml-[50px] rotate-6 rounded-2xl bg-gray-400 transform scale-200"></div>

    <div className="w-80 h-96 rotate-6 space-y-6 rounded-2xl bg-gray-100 p-6 transition duration-300 hover:rotate-0 transform scale-200">
        <div className="flex justify-end">
            <div className="h-4 w-4 rounded-full bg-gray-900"></div>
        </div>

        <header className="text-center text-xl font-extrabold text-gray-600">2021.09.01</header>

        <div>
            <p className="text-center text-5xl font-extrabold text-gray-900">Online Test (Physics)</p>
            <p className="text-center text-4xl font-extrabold text-[#FE5401]">2 hours</p>
        </div>

        <footer className="mb-10 flex justify-center">
            <button className="flex items-baseline gap-2 rounded-lg bg-[#FE5401] px-4 py-2.5 text-xl font-bold text-white hover:bg-[#FF7308]">
                <span>Start</span>
                <i className="fas fa-hand-peace text-xl"></i>
            </button>
        </footer>
    </div>
</div>


    <div className="w-[433px] place-items-center h-[433px]">
    <div className="absolute w-80 h-96 ml-[25px] rotate-6 rounded-2xl bg-gray-400 transform scale-200"></div>

<div className="w-80 h-96 rotate-6 space-y-6 rounded-2xl bg-gray-100 p-6 transition duration-300 hover:rotate-0 transform scale-200">
    <div className="flex justify-end">
        <div className="h-4 w-4 rounded-full bg-gray-900"></div>
    </div>

    <header className="text-center text-xl font-extrabold text-gray-600">2021.09.01</header>

    <div>
        <p className="text-center text-5xl font-extrabold text-gray-900">Online Test (Physics)</p>
        <p className="text-center text-4xl font-extrabold text-[#FE5401]">2 hours</p>
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
    )
}