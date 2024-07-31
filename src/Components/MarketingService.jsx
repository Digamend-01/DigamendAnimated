import "../index.css"
// import { useEffect } from "react";
function MarketingService() {

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const videoContainer = document.querySelector('.video-container');
    //         const videoContainerRect = videoContainer.getBoundingClientRect();
    //         const nextDiv = document.querySelector('.content3');
    //         const nextDivRect = nextDiv.getBoundingClientRect();
        
    //         // Add the .zoomed class when the video container is scrolled up
    //         if (videoContainerRect.top <= 0) {
    //           videoContainer.classList.add('zoomed');
    //         } else {
    //           videoContainer.classList.remove('zoomed');
    //         }
        
    //         // Optional: Remove zoom when next section is scrolled into view
    //         if (nextDivRect.top <= window.innerHeight) {
    //           videoContainer.classList.remove('zoomed');
    //         }
    //       };
        
    //       window.addEventListener('scroll', handleScroll);
        
    //       return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //       };
    //     }, []);



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

      <div>Content4-Component</div>
      <div className="font-glimmer-of-light font-normal text-[24px] lg:text-[48px] leading-[1.2] lg:leading-[100px] text-center text-custom-blue"
        
        >Graphic<sub>Design</sub> </div>
      <div className="w-[1016px] h-[116px] mt-[50px] ml-[135px] gap-0 text-center font-light text-custom leading-custom mb-paragraph">Creating visual content to communicate information or messages to a specific audience. Graphic design can be used in a wide variety of applications, such as branding, advertising, web design, print media, and more.</div>
      <div>content7-componet</div>
      <div className="font-glimmer-of-light font-normal text-[24px] lg:text-[48px] leading-[1.2] lg:leading-[100px] text-center text-custom-blue"
        
        >Web & Mobile<sub>Development</sub> </div>
      <div className="w-[1016px] h-[116px] mt-[50px] ml-[135px] gap-0 text-center font-light text-custom leading-custom mb-paragraph">Creating software or applications by writing code and programming languages. It involves a variety of tasks, including designing the system architecture, writing and testing code, debugging, and deploying the final product.</div>
      <div>content10-component</div>
    </div>
  )
}

export default MarketingService
