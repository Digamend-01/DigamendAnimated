import React, { useState } from 'react'
import ellipse_rivw from '../assets/ellipse rivw.png';
import rivw_letter from '../assets/rivw letter.png';
import ellipse from '../assets/Ellipse.png';
import man_vr from '../assets/manVR1.png';

const ProductScreen = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="flex justify-center items-center p-24">
            <div className="flex items-center justify-end border-2 border-black rounded-lg w-full relative overflow-hidden group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div
                    className={`absolute left-0 top-0 h-full bg-white transition-transform duration-500 ease-in-out ${isHovered ? 'translate-x-0' : '-translate-x-full'
                        }`}
                    style={{ width: '40%' }}
                >
                    <div className="p-3 pt-5 left-6">
                        <p className="text-sm leading-relaxed">
                            Embark on a journey like no other as we invite you to explore the infinite realms of the virtual universe. Our platform is your gateway to immersive experiences, where boundaries blur and imagination knows no limit. Dive into a kaleidoscope of virtual worlds each offering its own wonders and adventures. From bustling futuristic cities to serene natural landscapes, there’s something for every explorer to discover. Ready to embark on the ultimate virtual reality world tour? The future of exploration is here. Step into the virtual reality metaverse world tour and prepare to be amazed. Welcome to a world without limits. Welcome to the future adventure!!! Welcome to the future adventure!!!
                        </p>
                        <div className="mt-2 text-lg font-bold text-black">
                            Welcome to the future adventure!!!
                        </div>
                    </div>
                </div>
                <div className="flex items-center w-2/5 transition-transform duration-500 ease-in-out group-hover:translate-x-full">
                    <div className="flex-col items-center pr-26 ">
                        <img src={rivw_letter} alt="First" className="w-full" />
                        <p className="mt-4 text-center">Immersive VR/Metaverse Experience</p>
                    </div>
                    <img src={ellipse_rivw} alt="" className="w-1/4 ml-15 transition-transform duration-500 ease-in-out group-hover:translate-x-full" />
                </div>
                <div className="w-2/4 relative transition-transform duration-500 ease-in-out group-hover:translate-x-full">
                    <img src={man_vr} alt="Second" className="w-full" />
                    <img src={ellipse} alt="Inside" className="absolute left-0 w-1/5" style={{ top: '20%' }} />
                </div>

            </div>
        </div>

    )
}

export default ProductScreen