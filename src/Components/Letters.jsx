import React from "react";
import { Carousel } from "flowbite-react";

const Letters = () =>{

    return(
        <div className="w-full flex flex-col p-2 md:p-10">
            <p className="text-4xl md:text-5xl font-semibold mx-auto my-10 uppercase text-center"> Благодарственные письма</p>
            <div className="hidden md:block h-56 sm:h-64 xl:h-80 2xl:h-96 w-full lg:w-1/2 md:w-4/5 mx-auto">
                <Carousel slide={false}>
                    <div className="w-full h-full flex justify-center items-center text-3xl font-bold bg-indigo-200 flex-col p-10">
                        <p className="text-3xl lettertext">Благодарственное письмо от благодарной компании</p>
                        <p className="text-3xl lettertext">За успешные проекты Chess Student Cup 2022</p>
                        <p className="text-xl text-gray-600">Art K Digital</p>
                        <img className="h-1/4 w-auto mt-5" src="https://avatars.yandex.net/get-music-content/143117/85d32703.a.7578840-1/m1000x1000" alt="" />
                    </div>
                    <div className="w-full h-full flex justify-center items-center text-3xl font-bold bg-indigo-200 flex-col">
                        <p className="text-3xl font-bold">Благодарственное письмо от благодарной компании</p>
                        <p className="text-xl text-gray-600">ОАО "ММММ"</p>
                        <img className="h-1/6 w-auto mt-5" src="https://pngimg.com/uploads/adidas/adidas_PNG8.png" alt="" />
                    </div>
                    <div className="w-full h-full flex justify-center items-center text-3xl font-bold bg-indigo-200 flex-col">
                        <p className="text-3xl font-bold">Благодарственное письмо от благодарной компании</p>
                        <p className="text-xl text-gray-600">ОАО "ММММ"</p>
                        <img className="rounded-full h-1/4 w-auto" src="https://avatars.yandex.net/get-music-content/143117/85d32703.a.7578840-1/m1000x1000" alt="" />
                    </div>
                    <img src="https://avatars.yandex.net/get-music-content/143117/85d32703.a.7578840-1/m1000x1000" alt="" />
                    <img src="https://avatars.yandex.net/get-music-content/143117/85d32703.a.7578840-1/m1000x1000" alt="" />
                </Carousel>
            </div>
            
            <div className="w-full p-10 md:hidden">
                <div className="flex justify-center items-center text-3xl font-bold bg-white flex-col p-5 rounded-xl drop-shadow-xl">
                    <p className="text-3xl lettertext">Благодарственное письмо от благодарной компании</p>
                    <p className="text-3xl lettertext">За успешные проекты Chess Student Cup 2022</p>
                    <p className="text-xl text-gray-600">Art K Digital</p>
                    <img className="h-32 w-auto mt-5" src="https://avatars.yandex.net/get-music-content/143117/85d32703.a.7578840-1/m1000x1000" alt="" />
                </div>
            </div>

            <div className="w-full p-10 md:hidden">
                <div className="flex justify-center items-center text-3xl font-bold bg-white flex-col p-5 rounded-xl drop-shadow-xl">
                    <p className="text-3xl lettertext">Благодарственное письмо от благодарной компании</p>
                    <p className="text-3xl lettertext">За успешные проекты Chess Student Cup 2022</p>
                    <p className="text-xl text-gray-600">Art K Digital</p>
                    <img className="h-32 w-auto mt-5" src="https://avatars.yandex.net/get-music-content/143117/85d32703.a.7578840-1/m1000x1000" alt="" />
                </div>
            </div>

            <div className="w-full p-10 md:hidden">
                <div className="flex justify-center items-center text-3xl font-bold bg-white flex-col p-5 rounded-xl drop-shadow-xl">
                    <p className="text-3xl lettertext">Благодарственное письмо от благодарной компании</p>
                    <p className="text-3xl lettertext">За успешные проекты Chess Student Cup 2022</p>
                    <p className="text-xl text-gray-600">Art K Digital</p>
                    <img className="h-32 w-auto mt-5" src="https://avatars.yandex.net/get-music-content/143117/85d32703.a.7578840-1/m1000x1000" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Letters;