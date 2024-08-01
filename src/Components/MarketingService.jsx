import "../index.css"
import image from '../assets/Frame 1321315476 1.svg'
import { useEffect } from "react";
function MarketingService() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://codepen.io/bramus/pen/ZEqMOLz/cccfe67c2b9cdfbeb5fb59083dbd0a64.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        };
      }, []);

    useEffect(() => {
        const handleScroll = () => {
            const videoContainer = document.querySelector('.video-container');
            const videoContainerRect = videoContainer.getBoundingClientRect();
            const nextDiv = document.querySelector('.content3');
            const nextDivRect = nextDiv.getBoundingClientRect();
        
            // Add the .zoomed class when the video container is scrolled up
            if (videoContainerRect.top <= 0) {
              videoContainer.classList.add('zoomed');
            } else {
              videoContainer.classList.remove('zoomed');
            }
        
            // Optional: Remove zoom when next section is scrolled into view
            if (nextDivRect.top <= window.innerHeight) {
              videoContainer.classList.remove('zoomed');
            }
          };
        
          window.addEventListener('scroll', handleScroll);
        
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);



  return (
    //flex justify-center items-center
    <div className="flex flex-col justify-center items-center min-h-screen p-4">
      <div className="relative w-full lg:w-[891px] h-[200px] lg:h-[200px] flex items-center justify-center">
        <div className="font-glimmer-of-light font-normal text-[24px] lg:text-[48px] leading-[1.2] lg:leading-[100px] text-center text-custom-blue">Extraordinary Digital <br /> Experience Unleashed</div>
      </div>





      <div>
        <div className="video-container">
            <video className="video" src="/src/assets/DigAmenD full service 2.mp4" controls></video>
        </div>
      </div>
      <div>
        <div className="relative content3" >
        <div className="font-glimmer-of-light font-normal text-[24px] lg:text-[48px] leading-[1.2] lg:leading-[100px] text-center text-custom-blue"
        
        >UI UX <sub>Design</sub> </div>
        </div>
      </div>
      
  <div  className="w-[1016px] h-[116px] mt-[50px] ml-[135px] gap-0 text-center font-light text-custom leading-custom mb-paragraph">
    Range of strategies and techniques, such as improving the navigation and layout of a website or application, simplifying complex tasks, optimizing load times, or providing more personalized experiences. The goal of user experience enhancement is to create a positive, memorable, and effective user experience that meets the needs and expectations of users
 
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
        
        >Graphic<sub>Design</sub> </div>
      <div className="w-[1016px] h-[58px] mt-[50px] ml-[135px] gap-0 text-center font-light text-custom leading-custom mb-paragraph">Creating visual content to communicate information or messages to a specific audience. Graphic design can be used in a wide variety of applications, such as branding, advertising, web design, print media, and more.</div>
     
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
        
        >Web & Mobile<sub>Development</sub> </div>
      <div className="w-[1016px] h-[58px] mt-[50px] ml-[135px] gap-0 text-center font-light text-custom leading-custom mb-paragraph">Creating software or applications by writing code and programming languages. It involves a variety of tasks, including designing the system architecture, writing and testing code, debugging, and deploying the final product.</div>
     
     
     
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

export default MarketingService
