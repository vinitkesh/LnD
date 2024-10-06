import React, { useEffect,useState } from 'react';
import Crows from './Crows';
import Banner from './assets/banner.png';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import gsap from 'gsap';
import './App.css';


// "predeploy": "npm run build",
// "deploy": "gh-pages -d dist"

const App = () => {

  gsap.registerPlugin(ScrollToPlugin);

  const page1Ref = React.useRef(null);

  const scrollToPage1 = () => {
    console.log('Scrolling to Page 1');
    page1Ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const returnWindowWidth = () => {
    console.log(window.innerWidth);
    return window.innerWidth;
  }

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

  const [iframeHeight, setIframeHeight] = useState('1000px');


  useEffect(() => {
    gsap.to('.logo', { delay: 1, duration: 1, opacity: 1, ease: 'power2.inOut' });
    gsap.to('.est', { delay: 1.2, duration: 1, opacity: 1, ease: 'power2.inOut' });
    gsap.to('.butt', { delay: 1.4, duration: 1, opacity: 1, ease: 'power2.inOut' });

    const adjustIframeHeight = () => {
      const iframe = document.getElementById('googleFormIframe');
      if (iframe) {
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
      }
    };

    window.addEventListener('resize', adjustIframeHeight);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', adjustIframeHeight);
    };
  }, []);

  return (
    <div className='App overflow-x-hidden '>
      <div className='hero flex items-center justify-center flex-col w-screen h-screen overflow-x-hidden'>
        <Crows />
        <img src={Banner} alt="banner" className='lg:w-[80%] m:w-full opacity-0 logo' />
        <p className="est  opacity-0 lg:text-3xl m:text-2xl">Est. 1961</p>

        { isPC() ? 
        <a
          href="#"
          className='butt opacity-0 p-5 m-5 text-white bg-gray-900  rounded-xl m:text-xl lg:text-2xl hover:scale-110 transition-all'
          onClick={scrollToPage1}
        >
          Inducting Now
        </a> : <p className='butt text-yellow-800 '>{"Scroll to Begin"}</p>
        }
      </div>

      {/* Page 1 */}
      <div className="page1 flex items-center justify-center w-screen min-h-screen flex-col bg-gray-800 p-5" ref={page1Ref}>
        <img src="./LOGOtransparentWhite (1).png" alt=""  className='w-[30%] min-w-60 p-6 m-5'/>
        {/* <h1 className="text-white max-w-[1000px] text-4xl p-5">Welcome to the LnD Inductions 2024</h1> */}
        <img src="./poster.PNG" alt="poster"  className='poster w-[50%] min-w-80 max-w-xl' />
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6ubtZLaKeRE?si=i7big2NN-BgQ2hDz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='w-96 p-5'></iframe>
        <p  className="text-white max-w-[1000px] text-xl  p-5">Established in 1961, The Literary and Debating Club (LnD), is the oldest club in the institution. All our
            initiatives have a long and cherished legacy of striving for free expression and helping this college
            understand its student community a little better every day. We were awarded the 'Best Cultural Club' for
            the year 2022. Find us at  <a href="https://www.instagram.com/donttellthewarden/" className='text-yellow-400'>@donttellthewarden</a>.</p> 
        <h1 className=" max-w-[1000px] text-3xl text-yellow-400  p-5"> About Us </h1>
        <h1 className="text-white max-w-[1000px] text-3xl w-full text-start  p-5">Crowtalks </h1>
        <p  className="text-white max-w-[1000px] text-xl  p-5"> Looking through the eyes of the beloved crows perched on the trees, Crowtalks was initiated
          to spread awareness about the everyday happenings of the campus, with a dash of satire. With every
          article resonating with the student minds and trying its best to justify our motto of "Voice out of the noise",
          Crowtalks is definitely the crow'n jewel of LnD. Access Crowtalks <a href="https://nitcrowtalks.wordpress.com/" className='text-yellow-400'> here</a>. </p>
        <h1 className="text-white max-w-[1000px] text-3xl w-full text-start  p-5">Sunset by the Main </h1>
        <p  className="text-white max-w-[1000px] text-xl  p-5"> With the crowd swaying along to the performances in the open mic and laughter
        echoing from games played, Sunset by the Main is always an evening to remember. </p>
        <h1 className="text-white max-w-[1000px] text-3xl w-full text-start  p-5">Kaapikootam </h1>
        <p  className="text-white max-w-[1000px] text-xl  p-5">  An initiative to foster conversations and open discussion among students about issues
          pertaining to campus and the GSB. In every Kaapikootam, people can gather, sip kaapi and make their
          opinions heard. </p>
        <h1 className="text-white max-w-[1000px] text-3xl w-full text-start  p-5">Book Club: </h1>
        <p  className="text-white max-w-[1000px] text-xl  p-5">  Staying true to our appreciation for literature, LnD conducts book club meetings monthly,
          hoping to unite all bibliophiles across the campus. We aim to foster a good reading culture among our
          students. The book club website can be accessed <a href="https://bookclub.lndnitc.org/" className='text-yellow-400'> here</a>. </p>   
      </div>

      <div id='page4' className="page2 flex items-center justify-center w-screen min-h-screen h-max flex-col bg-gray-800 p-5" >
        <h1 className="text-white max-w-[1000px] text-3xl w-full text-start  p-5">HONIT (<a href="https://www.instagram.com/humansofnitcalicut/" className='text-yellow-400'>Humans of NITC</a>)</h1>
        <p  className="text-white max-w-[1000px] text-xl  p-5">As the name suggests, HONITs are all about the people who bring life to the
          campus. The HONIT page on Instagram showcases interesting stories within the student community and
          inspiring anecdotes of all those people who impact the lives in NITC. </p>
        <h1 className="text-white max-w-[1000px] text-3xl w-full text-start  p-5">Awareness Initiatives</h1>
        <p  className="text-white max-w-[1000px] text-xl  p-5">LnD has always been an ally of the LGBTQIA community, actively demanding
          and working towards an inclusive environment on campus. Mental Health Awareness Week is a series of
          social media content released in the month of May. We put out numerous articles and initiatives in our
          strive to raise awareness and create a safe space.</p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        <h1 className="text-white max-w-[1000px] text-3xl w-full text-start  p-5">Volunteering at KLF</h1>
        <p  className="text-white max-w-[1000px] text-xl  p-5">LnD collaborated with KLF and multiple members participated in the runtime
          committees of KLF 2024.</p>

        <h1 className="text-white max-w-[1000px] text-3xl w-full text-start p-5">Collaboration with NITCAA:</h1>
        <p  className="text-white max-w-[1000px] text-xl  p-5">LnD collaborated with NITCAA and travelled to multiple cities taking
        interviews of the first graduating batch of REC Calicut</p>
      </div>

      <div id='page5' className="page2 flex items-center justify-center w-screen h-[50vh] p-10 h flex-col bg-gray-800 text-white" >
          Join us at LnD, the oldest club in the institution, and be a part of the legacy.
          <button className='w-max h-max p-5 m-5 text-2xl rounded-[1000px] text-black bg-yellow-400' onClick={() => {window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSedM9JyonUvKyib4tN5QzdtYkqjGRrGuZfEXQodzKEJvLOo3A/viewform?usp=sf_link';}}>Fill The Form</button>
  
      </div>
    </div>
    
  );
};

export default App;
