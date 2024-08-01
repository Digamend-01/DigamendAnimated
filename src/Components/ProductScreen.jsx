import React, { useState } from 'react';
import ellipse_rivw from '../assets/ellipse rivw.png';
import rivw_letter from '../assets/rivw letter.png';
import ellipse from '../assets/Ellipse.png';
import man_vr from '../assets/manVR1.png';
import { HiArrowNarrowRight } from "react-icons/hi";
import ellipse_left from '../assets/Ellipse_left.png';
import ellipse_lostcontinent from '../assets/ellipse_lostcontinent.png';
import letter_lostcontinent from '../assets/letter_lostcontinent.png';
import lostcontinent_img from '../assets/lostcontinent_img.png';
import ellipse_corlmart from '../assets/ellipse_corlmart.png';
import corlmart_img from '../assets/corlmart_img.png';
import corlmart_letter from '../assets/corlmart_letter.png';
import corllel_gif from '../assets/corllelani.gif'

const ProductScreen = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

    return (
        <>
            <img src={corllel_gif} alt="" className='w-full mt-20' />

            <p className='text-center font-jost text-lg px-24 font-light leading-relaxed'>At corlel we are passionate about creating unforgettable experiences that transport you to new realms and redefine the boundaries of entertainment & innovation. Whether you are a gaming enthusiast, a VR adventures, or simply seeking immersive entertainment, we have something extraordinary for you. Get ready to experience the best in- class.

            </p>
            <div
                className={`mt-7  flex justify-center   ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                    }`}
            >
                <button className="flex items-center font-jost font-light px-6 py-2 bg-white border border-black text-black rounded-full hover:bg-blue-900 hover:text-white transition-colors duration-300">
                    Visit
                    <HiArrowNarrowRight className="ml-2" />
                </button>
            </div>

            <div>
                <div className="relative content3 mt-20" >
                    <div className="font-glimmer-of-light font-normal text-[24px] lg:text-[48px] leading-[1.2] lg:leading-[100px] text-center text-custom-blue"

                    >Our <sub>Products</sub> </div>
                </div>
            </div>

            <div className="flex justify-center items-center mt-10 px-24 w-auto">
                <div
                    className={`flex items-center justify-end border-2 border-blue-900 rounded-lg w-full relative overflow-hidden group transition-shadow duration-300 ${isHovered ? 'shadow-lg shadow-gray-500' : ''
                        }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div
                        className={`absolute left-0 top-0 h-full bg-white transition-transform duration-700 ease-in-out ${isHovered ? 'translate-x-0' : '-translate-x-full'
                            }`}
                        style={{ width: '51%' }}
                    >
                        <div className="p-3 pt-5 left">
                            <p
                                className={`text-base font-jost font-light leading-relaxed transition-transform duration-700 ease-in-out ${isHovered ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                                    }`}
                            >
                                Embark on a journey like no other as we invite you to explore the infinite realms of the virtual universe. Our platform is your gateway to immersive experiences, where boundaries blur and imagination knows no limit. Dive into a kaleidoscope of virtual worlds each offering its own wonders and adventures. From bustling futuristic cities to serene natural landscapes, there’s something for every explorer to discover. Ready to embark on the ultimate virtual reality world tour? The future of exploration is here. Step into the virtual reality metaverse world tour and prepare to be amazed. Welcome to a world without limits. Welcome to the future adventure!!! Welcome to the future adventure!!!
                            </p>
                            <div
                                className={`mt-2 text-lg font-bold text-black transition-transform duration-700 ease-in-out ${isHovered ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                                    }`}
                            >
                                Welcome to the future adventure!!!
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center w-2/5 transition-transform duration-700 ease-in-out group-hover:translate-x-full">
                        <div className="flex-col items-center pr-26 transition-transform duration-700 ease-in-out group-hover:translate-x-16">
                            <img src={rivw_letter} alt="First" className="w-full" />
                            <p className="mt-4 text-center">Immersive VR/Metaverse Experience</p>
                            <div
                                className={`mt-4 transition-transform duration-700 ease-in-out ${isHovered ? 'translate-x-28 opacity-100' : '-translate-x-0 opacity-0'
                                    }`}
                            >
                                <button className="flex items-center px-6 py-2 bg-white border border-black text-black rounded-full hover:bg-blue-900 hover:text-white transition-colors duration-300">
                                    Visit
                                    <HiArrowNarrowRight className="ml-2" />
                                </button>
                            </div>
                        </div>
                        <img
                            src={ellipse_rivw}
                            alt=""
                            className="w-1/4 ml-15 transition-transform duration-700 ease-in-out group-hover:translate-x-full"
                        />
                    </div>
                    <div className="w-2/4 relative transition-transform duration-700 ease-in-out group-hover:translate-x-full">
                        <img src={man_vr} alt="Second" className="w-full" />
                        <img
                            src={ellipse}
                            alt="Inside"
                            className="absolute left-0 w-1/5"
                            style={{ top: '20%' }}
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center mt-10 px-24 w-auto">
                <div
                    className={`flex items-center justify-start border-2 border-blue-900 rounded-lg w-full relative overflow-hidden group transition-shadow duration-300 ${isHovered1 ? 'shadow-lg shadow-gray-500' : ''
                        }`}
                    onMouseEnter={() => setIsHovered1(true)}
                    onMouseLeave={() => setIsHovered1(false)}
                >
                    <div
                        className={`absolute right-0 top-0 h-full bg-white transition-transform duration-700 ease-in-out ${isHovered1 ? 'translate-x-0' : 'translate-x-full'
                            }`}
                        style={{ width: '51%' }}
                    >
                        <div className="p-3 pt-5 right">
                            <p
                                className={`text-base text-right font-jost font-light leading-relaxed transition-transform duration-700 ease-in-out ${isHovered1 ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                                    }`}
                            >
                                Gear up, adventure ! It’s time to embark on epic journey through time and space in search of lost treasures scattered across forgotten continents. Prepare to heart-pounding battles, thrilling challenges, and untold riches as you navigate the treacherous landscapes of our immersive combat lost continent game. Step in to the shoe of a fearless explorer and traverse ancient civilizations lost to the sands of time. From the mysterious jungles of Atlantis to the crumbling ruins of Eldorado & Chola kingdom each continent holds secrets waiting to be unearthed. Welcome to the treasure hunt of lost continents-where legends are born and fortunes are won.
                            </p>
                            <div
                                className={`mt-2 justify-end text-lg text-right font-bold text-black transition-transform duration-700 ease-in-out ${isHovered1 ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                                    }`}
                            >
                                Let the hunt begin!!!
                            </div>
                        </div>
                    </div>
                    <div className="w-2/4 relative transition-transform duration-700 ease-in-out group-hover:-translate-x-full">
                        <img src={lostcontinent_img} alt="Second" className="w-full" />
                        <img
                            src={ellipse_left}
                            alt="Inside"
                            className="absolute right-0 w-1/5"
                            style={{ top: '20%' }}
                        />
                    </div>
                    <div className="flex items-center w-2/5 transition-transform duration-700 ease-in-out group-hover:-translate-x-full">
                        <img
                            src={ellipse_lostcontinent}
                            alt=""
                            className="w-1/4  transition-transform duration-700 ease-in-out group-hover:-translate-x-full"
                        />
                        <div className="flex-col items-center pl-26 transition-transform duration-700 ease-in-out group-hover:-translate-x-16">

                            <img src={letter_lostcontinent} alt="First" className="w-full" />
                            <p className="mt-4 text-center">Gaming Excellence</p>
                            <div
                                className={`mt-4 ml-24  transition-transform duration-700 ease-in-out ${isHovered1 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                                    }`}
                            >
                                <button className="flex items-center px-6 py-2 bg-white border border-black text-black rounded-full hover:bg-blue-900 hover:text-white transition-colors duration-300">
                                    Visit
                                    <HiArrowNarrowRight className="ml-2" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="flex justify-center items-center mt-10 px-24 w-auto  mb-10">
                <div
                    className={`flex items-center justify-end border-2 border-blue-900 rounded-lg w-full relative overflow-hidden group transition-shadow duration-300 ${isHovered2 ? 'shadow-lg shadow-gray-500' : ''
                        }`}
                    onMouseEnter={() => setIsHovered2(true)}
                    onMouseLeave={() => setIsHovered2(false)}
                >
                    <div
                        className={`absolute left-0 top-0 h-full bg-white transition-transform duration-700 ease-in-out ${isHovered2 ? 'translate-x-0' : '-translate-x-full'
                            }`}
                        style={{ width: '51%' }}
                    >
                        <div className="p-3 pt-5 left">
                            <p
                                className={`text-base pt-14 font-jost font-light leading-relaxed transition-transform duration-700 ease-in-out ${isHovered2 ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                                    }`}
                            >
                                Empowering your 3D dreams, looking to  elevate your projects to the next dimension? Explore our vast collection of meticulously crafted 3D models designed to meet your creative needs. Whether you are an architect, designer, game developer or hobbyist, we have the perfect 3D assets to bring your vision to life. We are passionate about bridging the gap between imagination and reality.

                            </p>
                            <div
                                className={`mt-2 text-lg font-bold text-black transition-transform duration-700 ease-in-out ${isHovered2 ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                                    }`}
                            >
                                A masterpiece in every dimension
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center w-2/5 transition-transform duration-700 ease-in-out group-hover:translate-x-full">
                        <div className="flex-col items-center pr-26 transition-transform duration-700 ease-in-out group-hover:translate-x-16">
                            <img src={corlmart_letter} alt="First" className="w-full" />
                            <p className="mt-4 text-center">Immersive VR/Metaverse Experience</p>
                            <div
                                className={`mt-4 transition-transform duration-700 ease-in-out ${isHovered2 ? 'translate-x-28 opacity-100' : '-translate-x-0 opacity-0'
                                    }`}
                            >
                                <button className="flex items-center px-6 py-2 bg-white border border-black text-black rounded-full hover:bg-blue-900 hover:text-white transition-colors duration-300">
                                    Visit
                                    <HiArrowNarrowRight className="ml-2" />
                                </button>
                            </div>
                        </div>
                        <img
                            src={ellipse_corlmart}
                            alt=""
                            className="w-1/4 ml-15 transition-transform duration-700 ease-in-out group-hover:translate-x-full"
                        />
                    </div>
                    <div className="w-2/4 relative transition-transform duration-700 ease-in-out group-hover:translate-x-full">
                        <img src={corlmart_img} alt="Second" className="w-full" />
                        <img
                            src={ellipse}
                            alt="Inside"
                            className="absolute left-0 w-1/5"
                            style={{ top: '20%' }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductScreen;
