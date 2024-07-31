import React, { useState } from 'react';
import ellipse_rivw from '../assets/ellipse rivw.png';
import rivw_letter from '../assets/rivw letter.png';
import ellipse from '../assets/Ellipse.png';
import man_vr from '../assets/manVR1.png';

const ProductScreen = () => {
  const [isRivwHovered, setIsRivwHovered] = useState(false);
  const [onRiwvVisit, setOnRiwvVisit] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className={`relative ${
          isRivwHovered ? 'shadow-[0_5px_10px_rgba(107,106,106,0.5)]' : ''
        } bg-white border-2 border-[#072B49] rounded-2xl overflow-hidden`}
        style={{ width: '80%', maxWidth: '1200px', height: window.innerHeight / 1.6 }}
      >
        <div
          onMouseEnter={() => setIsRivwHovered(true)}
          onMouseLeave={() => setIsRivwHovered(false)}
          className="flex"
        >
          <div
            className={`transition-all duration-1000 ease-in-out ${
              isRivwHovered ? 'flex-1' : 'flex-0'
            } bg-white rounded-l-2xl`}
          >
            <div
              className={`flex items-center justify-center h-full ${
                isRivwHovered ? `w-[${window.innerWidth / 3.3}px]` : 'w-0'
              }`}
            >
              {isRivwHovered && (
                <div className="transition-opacity duration-[19000ms] opacity-100 ease-in-out p-4">
                  <p className="text-ellipsis overflow-hidden leading-7" style={{ fontSize: `${window.innerWidth * 0.011}px` }}>
                    Embark on a journey like no other as we invite you to explore the infinite realms of the virtual universe. Our platform is your gateway to immersive experiences, where boundaries blur and imagination knows no limit. Dive into a kaleidoscope of virtual worlds each offering its own wonders and adventures. From bustling futuristic cities to serene natural landscapes, there’s something for every explorer to discovers. Ready to embark on the ultimate virtual reality world tour? The future of exploration is here. Step in to the virtual reality metaverse world tour and prepare to be amazed. Welcome to a world without limits. Welcome to the future adventure!!!Welcome to the future adventure!!!
                  </p>
                  <p className="mt-2 font-bold" style={{ fontSize: `${window.innerWidth * 0.012}px` }}>
                    Welcome to the future adventure!!!
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="bg-white rounded-r-2xl flex flex-col items-center justify-center" style={{ width: window.innerWidth / 2.4, height: '100%' }}>
            <div className="flex flex-col items-center justify-center p-4 ">
              <img
                src={rivw_letter}
                alt="RIVW Logo"
                className="w-[350px]"
              />
              <p className="mt-2" style={{ fontSize: `${window.innerWidth * 0.0113}px`, color: '#143274', fontWeight: 600 }}>
                Immersive VR/Metaverse Experience
              </p>
              {isRivwHovered && (
                <div
                  onMouseEnter={() => setOnRiwvVisit(true)}
                  onMouseLeave={() => setOnRiwvVisit(false)}
                  className={`transition-opacity duration-[3000ms] opacity-100 ease-in-out mt-2 px-4 py-1.5 border-2 ${
                    onRiwvVisit ? 'border-gradient-to-r from-[#FF5F6A] to-[#143274]' : 'border-black'
                  } rounded-md shadow-md`}
                >
                  <p style={{ fontSize: `${window.innerWidth * 0.0113}px` }}>Visit</p>
                </div>
              )}
            </div>
            <img
              src={ellipse_rivw}
              alt="Ellipse"
              className="absolute top-[${window.innerHeight / 1}px] right-0 w-[${window.innerWidth / 11.2}px]"
            />
          </div>
          <div className={`transition-all duration-1000 ease-in-out ${isRivwHovered ? 'flex-0' : 'flex-1'} rounded-r-2xl relative`}>
            <img
              src={man_vr}
              alt="Man VR"
              className="w-full h-full object-cover rounded-r-2xl"
            />
            <img
              src={ellipse}
              alt="Ellipse"
              className="absolute top-[${window.innerHeight / 7.4}px] left-0 w-[${window.innerWidth / 11.2}px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;









const ProductScreen = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisiting, setIsVisiting] = useState(false);

  return (
    <div
      className={`p-4 ${isHovered ? 'shadow-lg' : ''} border-2 border-[#072B49] rounded-2xl bg-white transition-all duration-300`}
      style={{ width: 'calc(100% - 16px)', height: 'calc(100vh / 1.6)' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex ${isHovered ? 'flex-row' : 'flex-row-reverse'}`}>
        <div
          className={`transition-all duration-1000 ${isHovered ? 'w-1/3' : 'w-0'} bg-white rounded-l-lg overflow-hidden`}
          style={{ height: '100%' }}
        >
          <div
            className={`transition-opacity duration-19000 ${isHovered ? 'opacity-100' : 'opacity-0'} p-2`}
            style={{ marginLeft: 'calc(100vw / 50)' }}
          >
            <p className="text-sm leading-relaxed">
              Embark on a journey like no other as we invite you to explore the infinite realms of the virtual universe. Our platform is your gateway to immersive experiences, where boundaries blur and imagination knows no limit. Dive into a kaleidoscope of virtual worlds each offering its own wonders and adventures. From bustling futuristic cities to serene natural landscapes, there’s something for every explorer to discover. Ready to embark on the ultimate virtual reality world tour? The future of exploration is here. Step into the virtual reality metaverse world tour and prepare to be amazed. Welcome to a world without limits. Welcome to the future adventure!!!Welcome to the future adventure!!!
            </p>
            <div className="mt-2 text-lg font-bold">
              Welcome to the future adventure!!!
            </div>
          </div>
        </div>
        <div
          className={`relative ${isHovered ? 'rounded-r-lg' : ''}`}
          style={{ width: 'calc(100vw / 2.4)', height: '100%' }}
        >
          <div className="flex flex-col items-center justify-center h-full px-4">
            <img
              src={rivw_letter}
              alt="Rivw Letter"
              className="w-1/4"
            />
            <div className="my-4 text-lg font-semibold text-[#143274]">
              Immersive VR/Metaverse Experience
            </div>
            {isHovered && (
              <div
                className={`transition-opacity duration-3000 ${isHovered ? 'opacity-100' : 'opacity-0'} cursor-pointer`}
                onMouseEnter={() => setIsVisiting(true)}
                onMouseLeave={() => setIsVisiting(false)}
              >
                <button
                  className={`py-2 px-4 rounded border-2 transition-all ${isVisiting ? 'border-gradient-to-r from-[#FF5F6A] to-[#143274]' : 'border-black'} ${isVisiting ? 'shadow-md' : ''}`}
                >
                  Visit
                </button>
              </div>
            )}
          </div>
          <img
            src={ellipse_rivw}
            alt="Ellipse"
            className="absolute right-0 top-1/7 w-1/11"
          />
        </div>
        <div
          className={`transition-all duration-1000 ${isHovered ? 'w-0' : 'w-1/3'} rounded-r-lg overflow-hidden`}
          style={{ height: '100%' }}
        >
          <img
            src={man_vr}
            alt="Man VR"
            className="object-cover w-full h-full"
          />
          <div
            className={`absolute top-1/7 right-0 ${isHovered ? 'h-0' : 'h-1/15'} transition-all duration-2000`}
          >
            <img src={ellipse} alt="Ellipse" className="w-1/11" />
          </div>
        </div>
      </div>
    </div>
  );
};