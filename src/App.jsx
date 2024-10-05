import React, { useEffect } from 'react';
import Crows from './Crows';
import Banner from './assets/banner.png';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import gsap from 'gsap';

// "predeploy": "npm run build",
// "deploy": "gh-pages -d dist"

const App = () => {

  gsap.registerPlugin(ScrollToPlugin);

  const page1Ref = React.useRef(null);
  const page2Ref = React.useRef(null);

  const scrollToPage1 = () => {
    console.log('Scrolling to Page 1');
    page1Ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const isPC = () => {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  };

  const scrollToPage2 = () => {
    gsap.to('.page2', { duration: 1, scrollTo:'#page2', ease: 'power2.inOut' });
  };

  useEffect(() => {
    gsap.to('.logo', { delay: 1, duration: 1, opacity: 1, ease: 'power2.inOut' });
    gsap.to('.est', { delay: 1.2, duration: 1, opacity: 1, ease: 'power2.inOut' });
    gsap.to('a', { delay: 1.4, duration: 1, opacity: 1, ease: 'power2.inOut' });
  }, []);

  return (
    <div className='overflow-x-hidden'>
      <div className='hero flex items-center justify-center flex-col w-screen h-screen'>
        <Crows />
        <img src={Banner} alt="banner" className='lg:w-[80%] m:w-full opacity-0 logo' />
        <p className="est font-serif opacity-0 lg:text-3xl m:text-xl p-5">Est. 1961</p>

        { isPC() ? 
        <a
          href="#"
          className='opacity-0 p-5 m-5 text-white bg-gray-900 font-serif rounded-xl m:text-xl lg:text-2xl hover:scale-110 transition-all'
          onClick={scrollToPage1}
        >
          Inducting Now
        </a> : 
        <p className=" text-sm font-serif p-5">'Scroll Down'</p>
        }
      </div>

      {/* Page 1 */}
      <div className="page1 flex items-center justify-center w-screen min-h-screen flex-col bg-gray-800" ref={page1Ref}>
        <h1 className="text-white text-4xl font-serif p-5">Welcome to the LnD inductions</h1>
        <p className="text-white text-xl font-serif p-5">The inductions will span for 3 days, 7th-9th October 2024</p>
        <p className="text-white text-xl font-serif p-5">The inductions will be held at the NLHC</p>
        <p className="text-white text-xl font-serif p-5">One of the phases of the inductions are tasks (link below)</p>
        <p className="text-white text-xl font-serif p-5">The other is Group Discussions and Debates (Will be held at NLHC)</p>

        <a
          href="#"
          className='p-5 m-5 text-white bg-gray-900 font-serif rounded-xl m:text-xl lg:text-2xl hover:scale-110 transition-all'
          onClick={scrollToPage2}
        >
          Apply Now
        </a>
      </div>

      {/* Page 2 */}
      <div id='page2' className="page2 flex items-center justify-center w-screen min-h-screen flex-col bg-gray-800" ref={page2Ref}>
        <p className="text-white text-xl font-serif p-5">Fill out the form to complete your application.</p>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSedM9JyonUvKyib4tN5QzdtYkqjGRrGuZfEXQodzKEJvLOo3A/viewform?embedded=true" width="640" height="2160" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>

      <div className="page3 h-screen flex items-center justify-center">
      </div>
    </div>
  );
};

export default App;
