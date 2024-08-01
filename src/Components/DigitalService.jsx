import "../index.css"
import image from '../assets/Frame 1321315476 1.svg'
import { useEffect } from "react";
function DigitalService() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://codepen.io/bramus/pen/ZEqMOLz/cccfe67c2b9cdfbeb5fb59083dbd0a64.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        };
      }, []);

    //   useEffect(() => {
    //     const handleScroll = () => {
    //       const video = document.querySelector('.video');
    //       const nextDiv = document.querySelector('.content3');
    
    //       if (video && nextDiv) {
    //         const videoRect = video.getBoundingClientRect();
    //         const nextDivRect = nextDiv.getBoundingClientRect();
    
    //         console.log('videoRect:', videoRect);
    //         console.log('nextDivRect:', nextDivRect);
    
    //         if (videoRect.bottom < 0) {
    //           console.log('Adding zoomed class');
    //           video.classList.add('zoomed');
    //         } else if (videoRect.top >= 0 && videoRect.bottom <= window.innerHeight) {
    //           console.log('Removing zoomed class');
    //           video.classList.remove('zoomed');
    //         }
    //       }
    //     };
    
    //     window.addEventListener('scroll', handleScroll);
    
    //     return () => {
    //       window.removeEventListener('scroll', handleScroll);
    //     };
    //   }, []);



  return (
    //flex justify-center items-center
    <div className="flex flex-col justify-center items-center min-h-screen p-4">
      <div className="relative w-full lg:w-[891px] h-[200px] lg:h-[200px] flex items-center justify-center">
        <div className="font-glimmer-of-light font-normal text-[24px] lg:text-[48px] leading-[1.2] lg:leading-[100px] text-center text-custom-blue">Transforming Ideas Into <br /> Market Success</div>
      </div>





      <div>
        <div className="video-container">
            <video className="video" src="/src/assets/DigAmenD full service 2.mp4" controls></video>
        </div>
      </div>
      <div>
        <div className="relative content3" >
        <div className="font-glimmer-of-light font-normal text-[24px] lg:text-[48px] leading-[1.2] lg:leading-[100px] text-center text-custom-blue"
        
        >Facebook & <sub><small>Instagram Ads</small></sub> </div>
        </div>
      </div>
      
  <div  className="w-[1016px] h-[116px] mt-[50px] ml-[135px] gap-0 text-center font-light text-custom leading-custom mb-paragraph">
  We specialize in creating impactful Facebook and Instagram ad campaigns tailored to boost your brand’s visibility, engagement, and conversions. With strategic targeting and compelling creatives, we help you connect with your target audience effectively on two of the largest social media platforms.
 
</div>


{/* card1 */}

      <ul id="cards">
        {/* card11 */}
        <li className="card" id="card_1">
        <div className="card__content w-[1366px] h-[567px]">
      <div className="relative w-[1140px] h-[450px] top-[59px] left-[113px] rounded-[66px] bg-[#6C85C3] flex justify-center items-center">
      <div className=" w-[478px] h-[374px] top-[-7px] left-[-3px]">
        <img src={image} alt="SVG Image" className="w-full h-full rounded-[40px]" />
      </div>

      <div className=" flex flex-col justify-center items-center w-[535px] h-[280px] top-[85px] left-[560px] gap-[24px] ml-5">
        <div className="flex justify-center items-center w-full h-[46px] font-jost font-medium text-[30px] leading-[34.68px] text-white">
          Corllel
        </div>
        <div className="flex justify-center items-center text-center w-full h-[210px] font-jost text-[24px] leading-[34.68px] p-4 text-white ">
          Corllel is a Website that promotes the VR Products where reality blends seamlessly with the virtual, where imagination knows no bounds – welcome to the future of immersive technology. It's a gateway to boundless possibilities, revolutionizing how we perceive and interact with our World.
        </div>
      </div>
    </div>
  </div>
        </li>
        {/* card12 */}
        <li className="card" id="card_2">
        <div className="card__content w-[1366px] h-[567px]">
      <div className="relative w-[1140px] h-[450px] top-[59px] left-[113px] rounded-[66px] bg-[#CA256D] flex justify-center items-center">
      <div className=" w-[478px] h-[374px] top-[-7px] left-[-3px]">
        <img src={image} alt="SVG Image" className="w-full h-full rounded-[40px]" />
      </div>

      <div className=" flex flex-col justify-center items-center w-[535px] h-[280px] top-[85px] left-[560px] gap-[24px] ml-5">
        <div className="flex justify-center items-center w-full h-[46px] font-jost font-medium text-[30px] leading-[34.68px] text-white">
          Corllel
        </div>
        <div className="flex justify-center items-center text-center w-full h-[210px] font-jost text-[24px] leading-[34.68px] p-4 text-white ">
          Corllel is a Website that promotes the VR Products where reality blends seamlessly with the virtual, where imagination knows no bounds – welcome to the future of immersive technology. It's a gateway to boundless possibilities, revolutionizing how we perceive and interact with our World.
        </div>
      </div>
    </div>
  </div>
        </li>
      </ul>








      <div className="font-glimmer-of-light font-normal text-[24px] lg:text-[48px] leading-[1.2] lg:leading-[100px] text-center text-custom-blue"
        
        >Social Media<sub><small>Marketing</small></sub> </div>
      <div className="w-[1016px] h-[58px] mt-[50px] ml-[135px] gap-0 text-center font-light text-custom leading-custom mb-paragraph">Harness the power of social media with targeted campaigns that resonate with your audience. We leverage data-driven insights and creative strategies to build brand awareness, drive traffic, and boost conversions across platforms like Facebook, Instagram, Twitter, and LinkedIn.</div>
     
     {/* card2 */}
  
     
     <ul id="cards">
        {/* card21 */}
        <li className="card" id="card_1">
            
      <div className="w-[1366px] h-[567px]">
      <div className="relative w-[1140px] h-[450px] top-[59px] left-[113px] rounded-[66px] bg-[#6C85C3] flex justify-center items-center">
     
      <div className=" w-[478px] h-[374px] top-[-7px] left-[-3px]">
        <img src={image} alt="SVG Image" className="w-full h-full rounded-[40px]" />
      </div>

      <div className=" flex flex-col justify-center items-center w-[535px] h-[280px] top-[85px] left-[560px] gap-[24px] ml-5">
        <div className="flex justify-center items-center w-full h-[46px] font-jost font-medium text-[30px] leading-[34.68px] text-white">
          Corllel
        </div>
        <div className="flex justify-center items-center text-center w-full h-[210px] font-jost text-[24px] leading-[34.68px] p-4 text-white ">
          Corllel is a Website that promotes the VR Products where reality blends seamlessly with the virtual, where imagination knows no bounds – welcome to the future of immersive technology. It's a gateway to boundless possibilities, revolutionizing how we perceive and interact with our World.
        </div>
      </div>
    </div>
  </div>
        </li>
{/* card22  */}
        <li className="card" id="card_2">
            
      <div className="w-[1366px] h-[567px]">
      <div className="relative w-[1140px] h-[450px] top-[59px] left-[113px] rounded-[66px] bg-[#CA256D] flex justify-center items-center">
     
      <div className=" w-[478px] h-[374px] top-[-7px] left-[-3px]">
        <img src={image} alt="SVG Image" className="w-full h-full rounded-[40px]" />
      </div>

      <div className=" flex flex-col justify-center items-center w-[535px] h-[280px] top-[85px] left-[560px] gap-[24px] ml-5">
        <div className="flex justify-center items-center w-full h-[46px] font-jost font-medium text-[30px] leading-[34.68px] text-white">
          Corllel
        </div>
        <div className="flex justify-center items-center text-center w-full h-[210px] font-jost text-[24px] leading-[34.68px] p-4 text-white ">
          Corllel is a Website that promotes the VR Products where reality blends seamlessly with the virtual, where imagination knows no bounds – welcome to the future of immersive technology. It's a gateway to boundless possibilities, revolutionizing how we perceive and interact with our World.
        </div>
      </div>
    </div>
  </div>
        </li>
     </ul>






      <div className="font-glimmer-of-light font-normal text-[24px] lg:text-[48px] leading-[1.2] lg:leading-[100px] text-center text-custom-blue"
        
        > 3D <sub><small>Modelling</small></sub> </div>
      <div className="w-[1016px] h-[58px] mt-[50px] ml-[135px] gap-0 text-center font-light text-custom leading-custom mb-paragraph">We specialize in transforming concepts into visually compelling 3D models that enhance your product presentation and marketing efforts. Whether you’re in manufacturing, retail, or e-commerce, our 3D modeling services ensure your products shine with realism and precision.</div>
     
     
     
     {/* card 3 */}
     
     <ul id="cards">
        {/* card31 */}
        <li className="card" id="card_1">
        <div className="w-[1366px] h-[567px]">
      <div className="relative w-[1140px] h-[450px] top-[59px] left-[113px] rounded-[66px] bg-[#6C85C3] flex justify-center items-center">
      <div className=" w-[478px] h-[374px] top-[-7px] left-[-3px]">
        <img src={image} alt="SVG Image" className="w-full h-full rounded-[40px]" />
      </div>

      <div className=" flex flex-col justify-center items-center w-[535px] h-[280px] top-[85px] left-[560px] gap-[24px] ml-5">
        <div className="flex justify-center items-center w-full h-[46px] font-jost font-medium text-[30px] leading-[34.68px] text-white">
          Corllel
        </div>
        <div className="flex justify-center items-center text-center w-full h-[210px] font-jost text-[24px] leading-[34.68px] p-4 text-white ">
          Corllel is a Website that promotes the VR Products where reality blends seamlessly with the virtual, where imagination knows no bounds – welcome to the future of immersive technology. It's a gateway to boundless possibilities, revolutionizing how we perceive and interact with our World.
        </div>
      </div>
    </div>
  </div>
        </li>
        {/* card32  */}
        <li className="card" id="card_2"><div className="w-[1366px] h-[567px]">
      <div className="relative w-[1140px] h-[450px] top-[59px] left-[113px] rounded-[66px] bg-[#CA256D] flex justify-center items-center">
      <div className=" w-[478px] h-[374px] top-[-7px] left-[-3px]">
        <img src={image} alt="SVG Image" className="w-full h-full rounded-[40px]" />
      </div>

      <div className=" flex flex-col justify-center items-center w-[535px] h-[280px] top-[85px] left-[560px] gap-[24px] ml-5">
        <div className="flex justify-center items-center w-full h-[46px] font-jost font-medium text-[30px] leading-[34.68px] text-white">
          Corllel
        </div>
        <div className="flex justify-center items-center text-center w-full h-[210px] font-jost text-[24px] leading-[34.68px] p-4 text-white ">
          Corllel is a Website that promotes the VR Products where reality blends seamlessly with the virtual, where imagination knows no bounds – welcome to the future of immersive technology. It's a gateway to boundless possibilities, revolutionizing how we perceive and interact with our World.
        </div>
      </div>
    </div>
  </div></li>
      </ul>




      <div className="font-glimmer-of-light font-normal text-[24px] lg:text-[48px] leading-[1.2] lg:leading-[100px] text-center text-custom-blue"
        
        >2D & 3D <sub><small>Motion Graphics</small></sub> </div>
      <div className="w-[1016px] h-[58px] mt-[50px] ml-[135px] gap-0 text-center font-light text-custom leading-custom mb-paragraph">Bring your brand story to life with dynamic motion graphics that captivate and inform. From animated infographics to promotional videos, we create visually striking content that communicates your message effectively and drives viewer engagement.</div>
     
     
     
     {/* card 3 */}
     
     <ul id="cards">
        {/* card31 */}
        <li className="card" id="card_1">
        <div className="w-[1366px] h-[567px]">
      <div className="relative w-[1140px] h-[450px] top-[59px] left-[113px] rounded-[66px] bg-[#6C85C3] flex justify-center items-center">
      <div className=" w-[478px] h-[374px] top-[-7px] left-[-3px]">
        <img src={image} alt="SVG Image" className="w-full h-full rounded-[40px]" />
      </div>

      <div className=" flex flex-col justify-center items-center w-[535px] h-[280px] top-[85px] left-[560px] gap-[24px] ml-5">
        <div className="flex justify-center items-center w-full h-[46px] font-jost font-medium text-[30px] leading-[34.68px] text-white">
          Corllel
        </div>
        <div className="flex justify-center items-center text-center w-full h-[210px] font-jost text-[24px] leading-[34.68px] p-4 text-white ">
          Corllel is a Website that promotes the VR Products where reality blends seamlessly with the virtual, where imagination knows no bounds – welcome to the future of immersive technology. It's a gateway to boundless possibilities, revolutionizing how we perceive and interact with our World.
        </div>
      </div>
    </div>
  </div>
        </li>
        {/* card32  */}
        <li className="card" id="card_2"><div className="w-[1366px] h-[567px]">
      <div className="relative w-[1140px] h-[450px] top-[59px] left-[113px] rounded-[66px] bg-[#CA256D] flex justify-center items-center">
      <div className=" w-[478px] h-[374px] top-[-7px] left-[-3px]">
        <img src={image} alt="SVG Image" className="w-full h-full rounded-[40px]" />
      </div>

      <div className=" flex flex-col justify-center items-center w-[535px] h-[280px] top-[85px] left-[560px] gap-[24px] ml-5">
        <div className="flex justify-center items-center w-full h-[46px] font-jost font-medium text-[30px] leading-[34.68px] text-white">
          Corllel
        </div>
        <div className="flex justify-center items-center text-center w-full h-[210px] font-jost text-[24px] leading-[34.68px] p-4 text-white ">
          Corllel is a Website that promotes the VR Products where reality blends seamlessly with the virtual, where imagination knows no bounds – welcome to the future of immersive technology. It's a gateway to boundless possibilities, revolutionizing how we perceive and interact with our World.
        </div>
      </div>
    </div>
  </div></li>
      </ul>




      <div className="font-glimmer-of-light font-normal text-[24px] lg:text-[48px] leading-[1.2] lg:leading-[100px] text-center text-custom-blue"
        
        > 2D & 3D Product <sub><small>Video Animation</small></sub> </div>
      <div className="w-[1016px] h-[58px] mt-[50px] ml-[135px] gap-0 text-center font-light text-custom leading-custom mb-paragraph">Tell your brand’s narrative through engaging animation videos that resonate with your audience. Whether it’s explainer videos, product demos, or storytelling animations, we deliver high-quality animations that entertain, educate, and inspire action.</div>
     
     
     
     {/* card 3 */}
     
     <ul id="cards">
        {/* card31 */}
        <li className="card" id="card_1">
        <div className="w-[1366px] h-[567px]">
      <div className="relative w-[1140px] h-[450px] top-[59px] left-[113px] rounded-[66px] bg-[#6C85C3] flex justify-center items-center">
      <div className=" w-[478px] h-[374px] top-[-7px] left-[-3px]">
        <img src={image} alt="SVG Image" className="w-full h-full rounded-[40px]" />
      </div>

      <div className=" flex flex-col justify-center items-center w-[535px] h-[280px] top-[85px] left-[560px] gap-[24px] ml-5">
        <div className="flex justify-center items-center w-full h-[46px] font-jost font-medium text-[30px] leading-[34.68px] text-white">
          Corllel
        </div>
        <div className="flex justify-center items-center text-center w-full h-[210px] font-jost text-[24px] leading-[34.68px] p-4 text-white ">
          Corllel is a Website that promotes the VR Products where reality blends seamlessly with the virtual, where imagination knows no bounds – welcome to the future of immersive technology. It's a gateway to boundless possibilities, revolutionizing how we perceive and interact with our World.
        </div>
      </div>
    </div>
  </div>
        </li>
        {/* card32  */}
        <li className="card" id="card_2"><div className="w-[1366px] h-[567px]">
      <div className="relative w-[1140px] h-[450px] top-[59px] left-[113px] rounded-[66px] bg-[#CA256D] flex justify-center items-center">
      <div className=" w-[478px] h-[374px] top-[-7px] left-[-3px]">
        <img src={image} alt="SVG Image" className="w-full h-full rounded-[40px]" />
      </div>

      <div className=" flex flex-col justify-center items-center w-[535px] h-[280px] top-[85px] left-[560px] gap-[24px] ml-5">
        <div className="flex justify-center items-center w-full h-[46px] font-jost font-medium text-[30px] leading-[34.68px] text-white">
          Corllel
        </div>
        <div className="flex justify-center items-center text-center w-full h-[210px] font-jost text-[24px] leading-[34.68px] p-4 text-white ">
          Corllel is a Website that promotes the VR Products where reality blends seamlessly with the virtual, where imagination knows no bounds – welcome to the future of immersive technology. It's a gateway to boundless possibilities, revolutionizing how we perceive and interact with our World.
        </div>
      </div>
    </div>
  </div></li>
      </ul>

      <div className="font-glimmer-of-light font-normal text-[24px] lg:text-[48px] leading-[1.2] lg:leading-[100px] text-center text-custom-blue"
        
        > Influencer <sub> <small>Marketing</small></sub> </div>
      <div className="w-[1016px] h-[58px] mt-[50px] ml-[135px] gap-0 text-center font-light text-custom leading-custom mb-paragraph">We specialize in creating impactful influencer marketing campaigns that elevate your brand awareness, engagement, and conversions. With strategic partnerships and authentic influencer collaborations, we connect your brand with targeted audiences across various platforms.</div>
     
     
     
     {/* card 3 */}
     
     <ul id="cards">
        {/* card31 */}
        <li className="card" id="card_1">
        <div className="w-[1366px] h-[567px]">
      <div className="relative w-[1140px] h-[450px] top-[59px] left-[113px] rounded-[66px] bg-[#6C85C3] flex justify-center items-center">
      <div className=" w-[478px] h-[374px] top-[-7px] left-[-3px]">
        <img src={image} alt="SVG Image" className="w-full h-full rounded-[40px]" />
      </div>

      <div className=" flex flex-col justify-center items-center w-[535px] h-[280px] top-[85px] left-[560px] gap-[24px] ml-5">
        <div className="flex justify-center items-center w-full h-[46px] font-jost font-medium text-[30px] leading-[34.68px] text-white">
          Corllel
        </div>
        <div className="flex justify-center items-center text-center w-full h-[210px] font-jost text-[24px] leading-[34.68px] p-4 text-white ">
          Corllel is a Website that promotes the VR Products where reality blends seamlessly with the virtual, where imagination knows no bounds – welcome to the future of immersive technology. It's a gateway to boundless possibilities, revolutionizing how we perceive and interact with our World.
        </div>
      </div>
    </div>
  </div>
        </li>
        {/* card32  */}
        <li className="card" id="card_2"><div className="w-[1366px] h-[567px]">
      <div className="relative w-[1140px] h-[450px] top-[59px] left-[113px] rounded-[66px] bg-[#CA256D] flex justify-center items-center">
      <div className=" w-[478px] h-[374px] top-[-7px] left-[-3px]">
        <img src={image} alt="SVG Image" className="w-full h-full rounded-[40px]" />
      </div>

      <div className=" flex flex-col justify-center items-center w-[535px] h-[280px] top-[85px] left-[560px] gap-[24px] ml-5">
        <div className="flex justify-center items-center w-full h-[46px] font-jost font-medium text-[30px] leading-[34.68px] text-white">
          Corllel
        </div>
        <div className="flex justify-center items-center text-center w-full h-[210px] font-jost text-[24px] leading-[34.68px] p-4 text-white ">
          Corllel is a Website that promotes the VR Products where reality blends seamlessly with the virtual, where imagination knows no bounds – welcome to the future of immersive technology. It's a gateway to boundless possibilities, revolutionizing how we perceive and interact with our World.
        </div>
      </div>
    </div>
  </div></li>
      </ul>
    </div>
  )
}

export default DigitalService
