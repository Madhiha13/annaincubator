import React ,{useEffect,useState,useRef} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Header.css';
import Bulb from "../../assets/bulb_xxx9no_pqt1up.png"
import Plant from "../../assets/plant_ds1uho_brfgbm.png"
import Tree from "../../assets/tree_l4ufjr_vkvprf.png"
import Mentor from "../../assets/Mentors.gif"
import Resources from "../../assets/resources.gif"
import Networks from "../../assets/networks.gif"
import Funds from "../../assets/funds.gif"
import Logo1 from "../../assets/logo1.png"
import Logo2 from "../../assets/logo2.png"
import Search from "../../assets/search.gif"
gsap.registerPlugin(ScrollTrigger);
const Header = () => {
  const images = [Bulb, Plant, Tree];
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current image index

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < images.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1); // Move to the next image
      } else {
        clearInterval(interval); // Stop sliding after the last image
      }
    }, 1000); // Wait for 1 second before moving to the next image

    return () => clearInterval(interval); // Cleanup interval
  }, [currentIndex, images.length]);
  const getImageClass = (index, currentIndex, totalImages) => {
    if (index === currentIndex) return "visible"; // The image currently visible
    if (index < currentIndex) return "slide-left"; // Images that have moved left
    if (index === totalImages - 1 && currentIndex === totalImages - 1) return "stop"; // Last image
    return "hidden"; // Images that haven't appeared yet
  };

useEffect(() => {
  // GSAP Animations
  gsap.fromTo(
    ".animate-header",
    { opacity: 0, y: -50 },
    { opacity: 1, y: 0, duration: 1, delay: 0.2 }
  );
  gsap.fromTo(
    ".animate-bounce",
    { y: 0 },
    { y: -10, yoyo: true, repeat: -1, duration: 0.5 }
  );


}, []);
const myRef = useRef(null);
useEffect(() => {
  if (!myRef.current) return;
  const sections = document.querySelectorAll('.section');
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.scroll-container',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      pin: true,
    },
  });

  window.addEventListener('load', () => {
    const firstTd = document.querySelector('td'); // Get the first <td> element
    const html = document.documentElement;
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // When the first td reaches the center, enable horizontal scrolling
            html.style.overflowX = 'auto'; // Enable horizontal scrolling
          }
        });
      },
      {
        root: null, // Use the viewport as the root
        threshold: 0.5 // Enable scroll when 50% of the td is in view (centered)
      }
    );
  
    observer.observe(firstTd); // Start observing the first <td>
  });
  
  

  sections.forEach((section, index) => {
    tl.fromTo(
      section,
      { x: '100%' }, // Start each section from the right
      {
        x: '-100%', // Move each section to the left
        duration: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
          toggleActions: 'play none none reverse',
        },
      }
    );
  });
}, []);

const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  
  return (
    <header className="header">
     <div className="incubation-section"  style={{ background: "rgb(233, 243, 238)" }}>
  {/* Left Content: Text */}
 
  <div className="text-content">
        <h1 className="heading">Innovate.</h1>
        <h1 className="heading">Incubate.</h1>
        <h1 className="heading highlight">Impact.</h1>
        <div className="button-group">
          <a className="btn btn-green" href="/incubation-form/">
            Incubate me
          </a>
          <a className="btn btn-outline" href="#what-our-incubatees-get">
            Learn more
          </a>
        </div>
      </div>

      {/* Right Content: Image Gallery */}
      <div className="image-gallery">
        <div className="images-wrapper"  > 
        
        {images.map((image, index) => (
          <div className="">
            <img
              key={index}
              src={image}// eslint-disable-next-line
              alt=""
              className={`gallery-image ${getImageClass(index, currentIndex, images.length)}`}
            />
         
              <div
              className={`loader ${index === currentIndex ? (index === images.length - 1 ? "last-active" : "active") : ""}`}
            ></div>
      
            </div>
          ))}
        </div>
      </div>




</div>
  <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#fafafa",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: isVisible ? "24px" : "0px",
        height: isVisible ? "auto" : "0px",
        opacity: isVisible ? "1" : "0",
        overflow: "hidden",
        transition: "all 0.3s ease-in-out",
        zIndex: 50,
        fontFamily: "__Inter_aaf875, __Inter_Fallback_aaf875, sans-serif"
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          padding: "12px 116px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            fill="#F4A626"
            viewBox="0 0 256 256"
            style={{ marginRight: "auto" }}
          >
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path>
          </svg>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
            }}
          >
            <div
              style={{
                color: "#2d2d2d",
                fontSize: "28px",
                fontWeight: 600,
                lineHeight: "40px",
                fontStyle:"bold"
              }}
            >
              Please Note!
            </div>
            <div
              style={{
                color: "#2d2d2d",
                fontSize: "18px",
                lineHeight: "24px",
              }}
            >
              In-person inquiries are accommodated exclusively on{" "}
              <b>Tuesdays</b> and <b>Thursdays</b>. Thank you for your
              cooperation.
            </div>
          </span>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2892146e6322babde639e4b4ddc14cef8d596e851773a6fc20055c37760459c?"
          alt="Close button"
          onClick={handleClose}
          style={{
            aspectRatio: "1",
            display: "block",
            position: "absolute",
            top: 0,
            right: "188px",
            objectFit: "contain",
            objectPosition: "center",
            width: "32px",
            overflow: "hidden",
            flexShrink: 0,
            maxWidth: "100%",
            margin: "auto",
            cursor: "pointer",
          }}
        />
      </div>
    </div>

<div className="scroll-indicator animate-bounce"  style={{
display: "flex",
flexDirection: "column",
alignItems: "center",
justifyContent: "center",
background: "rgb(233, 243, 238)",
paddingBottom:"4%"

}}>
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256">
    <path d="M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,160a48.05,48.05,0,0,1-48,48H112a48.05,48.05,0,0,1-48-48V80a48.05,48.05,0,0,1,48-48h32a48.05,48.05,0,0,1,48,48ZM136,64v48a8,8,0,0,1-16,0V64a8,8,0,0,1,16,0Z"></path>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256">
    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
  </svg>
</div>




<div
style={{
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  overflowX: 'hidden',
  backgroundColor: '#1a1a1a',
  fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
}}
>
<div
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '32px 0',
    
  }}
>
  <h1
    style={{
      fontWeight: 'bold',
      fontSize: '64px',
      color: 'white',
      textAlign: 'center',
      marginBottom: '16px',
    }}
  >
    What our Incubatees get
  </h1>
  <p
    style={{
      fontSize: '24px',
      color: 'white',
      textAlign: 'center',
    }}
  >
    Consider us as your Swiss army knife.
  </p>
</div>

<div className="horizontal-scroll-container" style={{ overflowX: 'auto', overflowY: 'hidden', width: '100vw' }}>
  <div className="scroll-content" style={{ display: 'flex', flexDirection: 'row', minWidth: 'max-content' }}>

    <div className="section w-[100vw] h-[100vh] flex justify-center items-center bg-blue-500">
      <div className="content w-[80vw] lg:w-[50vw] text-center lg:text-left">
        <h2 className="text-[#5eff5e]" style={{ fontSize: '45px', fontWeight: 'bold' , color: '#5eff5e' }}>
          Access to Mentors
        </h2>
        <p className="text-white" style={{ fontSize: '18px', marginBottom: '40px'  ,color:'white'}}>
          Our Incubatees are closely guided by expert mentors with real <br />
          world experience and are provided with invaluable insight,<br />
          feedback and support.
        </p>
      </div>
      <div className="image-container" style={{ marginTop: '40px' }}>
        <img className="lg:w-[600px]" src={Mentor} alt="Mentor Access" style={{ width: '350px', borderRadius: '16px' }} />
      </div>
    </div>

    <div className="section w-[100vw] h-[100vh] flex justify-center items-center bg-green-500">
      <div className="content w-[80vw] lg:w-[50vw] text-center lg:text-left">
        <h2 className="text-[#5eff5e]" style={{ fontSize: '45px', fontWeight: 'bold', color: '#5eff5e' }}>
          Access to Funds
        </h2>
        <p className="text-white" style={{ fontSize: '18px', marginBottom: '40px' ,color:'white' }}>
          Our Incubatees get to secure Government Grants, CSR funds,<br />
          Seed Funds and Investments for scaling and growth through our<br />
          network of Investors and Investor Forums.
        </p>
      </div>
      <div className="image-container" style={{ marginTop: '40px' }}>
        <img className="lg:w-[600px]" src={Funds} alt="Access to Funds" style={{ width: '250px', borderRadius: '16px' }} />
      </div>
    </div>

    <div className="section w-[100vw] h-[100vh] flex justify-center items-center bg-red-500">
      <div className="content w-[80vw] lg:w-[50vw] text-center lg:text-left">
        <h2 className="text-[#5eff5e]" style={{ fontSize: '45px', fontWeight: 'bold', color: '#5eff5e'  }}>
          Access to Networks
        </h2>
        <p className="text-white" style={{ fontSize: '18px', marginBottom: '40px'  ,color:'white'}}>
          Our Incubatees can tap into our extensive network of Alumni, our <br />
          Community of students all over Tamil Nadu, Investors, and<br />
          Founders to build lasting relationships.
        </p>
      </div>
      <div className="image-container" style={{ marginTop: '40px' }}>
        <img className="lg:w-[600px]" src={Networks} alt="Access to Networks" style={{ width: '350px', borderRadius: '16px' }} />
      </div>
    </div>

    <div className="section w-[100vw] h-[100vh] flex justify-center items-center bg-purple-500">
      <div className="content w-[80vw] lg:w-[50vw] text-center lg:text-left">
        <h2 className="text-[#5eff5e]" style={{ fontSize: '45px', fontWeight: 'bold', color: '#5eff5e'  }}>
          Access to Resources
        </h2>
        <p className="text-white" style={{ fontSize: '18px', marginBottom: '40px' ,color:'white' }}>
          Our Incubatees can avail the abundant resources being offered <br />
          including the access to the labs of Anna University housing 3D <br />
          printers to Fabrication machines.
        </p>
      </div>
      <div className="image-container" style={{ marginTop: '40px' }}>
        <img className="lg:w-[600px]" src={Resources} alt="Access to Resources" style={{ width: '400px', borderRadius: '16px' }} />
      </div>
    </div>

    <div className="section w-[100vw] h-[100vh] flex justify-center items-center bg-yellow-500">
      <div className="content w-[80vw] lg:w-[50vw] text-center lg:text-left">
        <h2 className="text-[#5eff5e]" style={{ fontSize: '45px', fontWeight: 'bold', color: '#5eff5e'  }}>
          Access to Opportunities
        </h2>
        <p className="text-white" style={{ fontSize: '18px', marginBottom: '40px' ,color:'white'}}>
          We connect our Incubatees with exciting opportunities in <br />
          startup accelerators, competitions, government initiatives, <br />
          and global entrepreneurship programs.
        </p>
      </div>
      <div className="image-container" style={{ marginTop: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', width: '66.666667%', maxWidth: '100%', '@media(min-width: 768px)': { width: '25%' }, '@media(min-width: 1024px)': { width: '50%' } }}>
  <div style={{ opacity: 1, transition: '1s ease-out 0.2s' }}>
    <div style={{ position: 'relative' }}>
      <div style={{ border: 'none', display: 'none', '@media(min-width: 1024px)': { display: 'block' }, width: '10000px', height: '10000px', zIndex: 40, position: 'absolute', top: 0, transform: 'translateY(-49.7%) translateX(1.5%)', transition: 'all 0.3s', backgroundColor: '#EFFFF4', opacity: 0 }}></div>
      <svg style={{ width: '33.333333%', margin: '0 auto' }} viewBox="0 0 114 344" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="46.3438" y="25" width="11.2768" height="28" fill="#C3E1CC"></rect>
        <path d="M29.9492 24.4004H73.6028V55.6545H29.9492V24.4004ZM72.6293 25.255H30.9227V54.7999H72.6293V25.255Z" fill="#727170"></path>
        <path d="M65.8506 24.8182L64.9375 54.9004L65.9105 54.9232L66.8235 24.8409L65.8506 24.8182Z" fill="#727170"></path>
        <path d="M52.9639 24.8182L52.0508 54.9004L53.0238 54.9232L53.9368 24.8409L52.9639 24.8182Z" fill="#727170"></path>
        <path d="M40.0732 24.8182L39.1602 54.9004L40.1331 54.9232L41.0462 24.8409L40.0732 24.8182Z" fill="#727170"></path>
        <path d="M78.8721 53.43H79.8456V44.1412L79.4912 44.0532C79.1944 43.9791 49.4832 36.766 22.6515 44.0563L22.3086 44.1494V53.0514H23.282V44.7803C48.1657 38.1407 75.4606 44.0083 78.8721 44.7922V53.43Z" fill="#727170"></path>
        <path d="M22.9153 49.15C54.4654 41.7516 78.9486 49.0657 79.1924 49.1404L79.5137 48.3338C79.2675 48.2582 54.5184 40.8551 22.6641 48.3242L22.9153 49.15Z" fill="#727170"></path>
        <path d="M22.9153 52.2906C54.4654 44.8918 78.9486 52.2065 79.1924 52.281L79.5137 51.4744C79.2675 51.3989 54.5184 43.9957 22.6641 51.4648L22.9153 52.2906Z" fill="#727170"></path>
        <rect x="28.043" y="52.873" width="46.2674" height="30.2111" fill="#009933"></rect>
        <path d="M74.0921 61.2207H59.7594V52.8724H80.1758L74.0921 61.2207Z" fill="#009933"></path>
        <path d="M28.0485 61.2207H42.3812V52.8724H21.9648L28.0485 61.2207Z" fill="#009933"></path>
        <path d="M98.9132 85.2069H100.155V70.4334L99.7031 70.3211C99.1925 70.1946 48.1127 57.7943 1.98834 70.325L1.55078 70.4438V84.2447H2.7928V71.2485C46.1357 59.6298 93.7732 70.0703 98.9132 71.2632V85.2069Z" fill="#727170"></path>
        <path d="M2.32831 78.7207C56.7065 65.9687 98.9054 78.5796 99.3253 78.7085L99.7353 77.6793C99.312 77.5492 56.7748 64.8249 2.00781 77.6671L2.32831 78.7207Z" fill="#727170"></path>
        <path d="M2.32862 84.1307C56.7083 71.3787 98.9053 83.9896 99.3256 84.1185L99.7356 83.0893C99.3123 82.9594 56.7751 70.2351 2.00781 83.0771L2.32862 84.1307Z" fill="#727170"></path>
        <path d="M20.1172 110.828H67.0242V343.72H0.207031L20.1172 110.828Z" fill="#C3E1CC"></path>
        <path d="M81.8711 110.828H34.9641V83.5065H101.781L81.8711 110.828Z" fill="#C3E1CC"></path>
        <path d="M81.8711 110.828H34.9641V343.72H101.781L81.8711 110.828Z" fill="#C3E1CC"></path>
        <path d="M20.1172 110.828H67.0242V83.5065H0.207031L20.1172 110.828Z" fill="#C3E1CC"></path>
        <path d="M69.862 16.832H49.9709V25.3906H74.6055L69.862 16.832Z" fill="#009933"></path>
        <path d="M33.9661 16.832H50.8201V25.3906H29.2227L33.9661 16.832Z" fill="#009933"></path>
        <rect x="33.9453" y="10.248" width="35.9395" height="6.74811" fill="#009933"></rect>
        <path d="M38.6687 13.5352L65.3828 13.5352V0.906887L38.6687 0.906887V13.5352Z" fill="#059948"></path>
        <path d="M32.2672 343.66H51.7891L51.7891 303.971H32.2672L32.2672 343.66Z" fill="white"></path>
        <path d="M66.1669 343.661L67.1943 298.56L55.4513 285.932H42.5352L51.7824 299.334L52.7016 343.217" fill="#62BD7F"></path>
        <path d="M78.8414 343.66H98.3633V303.971H78.8414V343.66Z" fill="white"></path>
        <path d="M112.741 343.661L113.769 298.56L102.026 285.932H89.1094L98.3566 299.334L99.2758 343.217" fill="#62BD7F"></path>
      </svg>
    </div>
  </div>
</div>
      </div>
    </div>


    <div style={{ width: '100vw', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom: '10px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative', zIndex: 50, color: 'white', textAlign: 'center' }}>
        <h2 style={{ fontWeight: 'bold', fontSize: '24px', lineHeight: '32px', maxWidth: '506px', width: '100%', textAlign: 'center' }}>
          Checkout our Incubation offerings
        </h2>
        <a 
          href="/incubation-form/" 
          style={{ border: '2px solid white', display: 'block', width: 'fit-content', margin: '0 auto', padding: '12px 20px', borderRadius: '4px', transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out', textDecoration: 'none', color: 'white' }}
          onMouseOver={(e) => { e.target.style.backgroundColor = 'black'; e.target.style.color = 'white'; }}
          onMouseOut={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'white'; }}
        >
          Incubate me!
        </a>
      </div>
    </div>
  </div>
</div>









      {/* <div
        className="lg:flex-row md:h-[100vh] w-[100vw]"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px',
        }}
      >
        <div
          className="w-[80vw] lg:w-[50vw] text-center lg:text-left"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h2
            className="text-[#5eff5e]"
            style={{ fontSize: '48px', fontWeight: 'bold', color: '#5eff5e' }}
          >
            Access to Oppurtunities
          </h2>
          <p
            className="text-white"
            style={{ fontSize: '24px', color: 'white' }}
          >
            We open the gates of opportunities including prompt invites to startup events,
          </p>
          <p
            className="text-white"
            style={{ fontSize: '24px', color: 'white',margin: '16px 0' }}
          >
            pitches with investors and a meaningful connect with startup communities.
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', width: '66.666667%', maxWidth: '100%', '@media(min-width: 768px)': { width: '25%' }, '@media(min-width: 1024px)': { width: '50%' } }}>
  <div style={{ opacity: 1, transition: '1s ease-out 0.2s' }}>
    <div style={{ position: 'relative' }}>
      <div style={{ border: 'none', display: 'none', '@media(min-width: 1024px)': { display: 'block' }, width: '10000px', height: '10000px', zIndex: 40, position: 'absolute', top: 0, transform: 'translateY(-49.7%) translateX(1.5%)', transition: 'all 0.3s', backgroundColor: '#EFFFF4', opacity: 0 }}></div>
      <svg style={{ width: '33.333333%', margin: '0 auto' }} viewBox="0 0 114 344" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="46.3438" y="25" width="11.2768" height="28" fill="#C3E1CC"></rect>
        <path d="M29.9492 24.4004H73.6028V55.6545H29.9492V24.4004ZM72.6293 25.255H30.9227V54.7999H72.6293V25.255Z" fill="#727170"></path>
        <path d="M65.8506 24.8182L64.9375 54.9004L65.9105 54.9232L66.8235 24.8409L65.8506 24.8182Z" fill="#727170"></path>
        <path d="M52.9639 24.8182L52.0508 54.9004L53.0238 54.9232L53.9368 24.8409L52.9639 24.8182Z" fill="#727170"></path>
        <path d="M40.0732 24.8182L39.1602 54.9004L40.1331 54.9232L41.0462 24.8409L40.0732 24.8182Z" fill="#727170"></path>
        <path d="M78.8721 53.43H79.8456V44.1412L79.4912 44.0532C79.1944 43.9791 49.4832 36.766 22.6515 44.0563L22.3086 44.1494V53.0514H23.282V44.7803C48.1657 38.1407 75.4606 44.0083 78.8721 44.7922V53.43Z" fill="#727170"></path>
        <path d="M22.9153 49.15C54.4654 41.7516 78.9486 49.0657 79.1924 49.1404L79.5137 48.3338C79.2675 48.2582 54.5184 40.8551 22.6641 48.3242L22.9153 49.15Z" fill="#727170"></path>
        <path d="M22.9153 52.2906C54.4654 44.8918 78.9486 52.2065 79.1924 52.281L79.5137 51.4744C79.2675 51.3989 54.5184 43.9957 22.6641 51.4648L22.9153 52.2906Z" fill="#727170"></path>
        <rect x="28.043" y="52.873" width="46.2674" height="30.2111" fill="#009933"></rect>
        <path d="M74.0921 61.2207H59.7594V52.8724H80.1758L74.0921 61.2207Z" fill="#009933"></path>
        <path d="M28.0485 61.2207H42.3812V52.8724H21.9648L28.0485 61.2207Z" fill="#009933"></path>
        <path d="M98.9132 85.2069H100.155V70.4334L99.7031 70.3211C99.1925 70.1946 48.1127 57.7943 1.98834 70.325L1.55078 70.4438V84.2447H2.7928V71.2485C46.1357 59.6298 93.7732 70.0703 98.9132 71.2632V85.2069Z" fill="#727170"></path>
        <path d="M2.32831 78.7207C56.7065 65.9687 98.9054 78.5796 99.3253 78.7085L99.7353 77.6793C99.312 77.5492 56.7748 64.8249 2.00781 77.6671L2.32831 78.7207Z" fill="#727170"></path>
        <path d="M2.32862 84.1307C56.7083 71.3787 98.9053 83.9896 99.3256 84.1185L99.7356 83.0893C99.3123 82.9594 56.7751 70.2351 2.00781 83.0771L2.32862 84.1307Z" fill="#727170"></path>
        <path d="M20.1172 110.828H67.0242V343.72H0.207031L20.1172 110.828Z" fill="#C3E1CC"></path>
        <path d="M81.8711 110.828H34.9641V83.5065H101.781L81.8711 110.828Z" fill="#C3E1CC"></path>
        <path d="M81.8711 110.828H34.9641V343.72H101.781L81.8711 110.828Z" fill="#C3E1CC"></path>
        <path d="M20.1172 110.828H67.0242V83.5065H0.207031L20.1172 110.828Z" fill="#C3E1CC"></path>
        <path d="M69.862 16.832H49.9709V25.3906H74.6055L69.862 16.832Z" fill="#009933"></path>
        <path d="M33.9661 16.832H50.8201V25.3906H29.2227L33.9661 16.832Z" fill="#009933"></path>
        <rect x="33.9453" y="10.248" width="35.9395" height="6.74811" fill="#009933"></rect>
        <path d="M38.6687 13.5352L65.3828 13.5352V0.906887L38.6687 0.906887V13.5352Z" fill="#059948"></path>
        <path d="M32.2672 343.66H51.7891L51.7891 303.971H32.2672L32.2672 343.66Z" fill="white"></path>
        <path d="M66.1669 343.661L67.1943 298.56L55.4513 285.932H42.5352L51.7824 299.334L52.7016 343.217" fill="#62BD7F"></path>
        <path d="M78.8414 343.66H98.3633V303.971H78.8414V343.66Z" fill="white"></path>
        <path d="M112.741 343.661L113.769 298.56L102.026 285.932H89.1094L98.3566 299.334L99.2758 343.217" fill="#62BD7F"></path>
      </svg>
    </div>
  </div>
</div>

      </div> */}

    </div>
    
    <section style={{ backgroundColor: "#E9F3EE", padding: "120px 0", paddingTop: "116px" , fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}}> 
  <div style={{ opacity: 1, transition: "1s ease-out 0.2s" }}>
    <div
      style={{
        display: "flex",
        flexDirection: "row", // Makes the layout horizontal with text on the left and image on the right
        gap: "10px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ flex: "1", textAlign: "left",paddingLeft:"110px" }}>
        <h2
          style={{
            fontWeight: "bold",
            fontSize: "50px",
            lineHeight: "1.5",
            maxWidth: "550px",
            marginBottom: "20px",
          }}
        >
          Our Value Partners
        </h2>
        <p
          style={{
            fontWeight:"normal",
            fontSize: "22px",
            lineHeight: "1.4",
            maxWidth: "600px",
          }}
        >
          Our value partners empowering our community of Incubatees in their journey with free startup credits and discounts.
        </p>
      </div>
      <div style={{ flex: "1", display: "flex", justifyContent: "center" }}>
        <img
          alt="/assets/anna-incubator/logos_ncgkex_fescyt.png"
          loading="lazy"
          width="500"
          height="300"
          decoding="async"
          style={{ color: "transparent" }}
          src={Logo1}
        />
      </div>
    </div>
  </div>
</section>


<section style={{ backgroundColor: "#E9F3EE", padding: "16px 0", paddingBottom: "90px" , fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}}>
<div style={{ opacity: 1, transition: "1s ease-out 0.2s" }}>
<div
      style={{
        display: "flex",
        flexDirection: "row", // Makes the layout horizontal with text on the left and image on the right
        gap: "10px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ flex: "1", textAlign: "left",paddingLeft:"110px" }}>
      <h2
          style={{
            fontWeight: "bold",
            fontSize: "50px",
            lineHeight: "1.5",
            maxWidth: "550px",
            marginBottom: "20px",
          }}
        >
          Banking Partners
        </h2>
        <p
          style={{
            fontWeight:"normal",
            fontSize: "22px",
            lineHeight: "1.4",
            maxWidth: "600px",
          }}
        >
          Our value partners empowering our community of Incubatees in their journey with free startup credits and discounts.
        </p>
      </div>
      <div style={{ flex: "1", display: "flex", justifyContent: "center" }}>
      <img
          alt="/assets/anna-incubator/logos_ncgkex_fescyt.png"
          loading="lazy"
          width="500"
          height="300"
          decoding="async"
          style={{ color: "transparent" }}
          src={Logo2}
        />
      </div>
    </div>
  </div>
</section>
<section style={{ backgroundColor: "#1B1A1A", color: "white", padding: "20px 0" , fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}}>
  <div style={{ opacity: 1, transition: "1s ease-out 0.2s" }}>
    <div
      style={{
        display: "flex",
        flexDirection: "row", // Text on the left, image on the right
        gap: "20px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ flex: "1", display: "flex", flexDirection: "column", justifyContent: "center" ,paddingLeft:"180px"}}>
        <h2
          style={{
            fontWeight: "bold",
            fontSize: "48px",
            lineHeight: "1.5",
            maxWidth: "100%",
            marginBottom: "10px",
          }}
        >
          Discover our Startups
        </h2>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "40px" }}>
          <a
            style={{
              color: "white",
              textAlign: "center",
              backgroundColor: "#28a745", // Green color
              padding: "10px 20px",
              textDecoration: "none",
            }}
            href="/portfolio/"
          >
            Explore
          </a>
        </div>
      </div>
      <figure style={{ flex: "1", marginLeft: "auto", width: "75%", height: "auto", position: "relative" }}>
        <img
          alt="/assets/anna-incubator/search---glass_v8qqhv_avsjbh.gif"
          loading="lazy"
         
          decoding="async"
          style={{ color: "transparent", width: "100%", height: "auto" }}
          src={Search}
        />
      </figure>
    </div>
  </div>
</section>

<section
  style={{
    padding: "4rem 0",
    backgroundColor: "rgb(233, 243, 238)",
    marginTop: "-2.5rem",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  }}
>
  <div style={{ opacity: 1, transition: "1s ease-out 0.2s" }}>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "2.5rem",
      }}
    >
      {/* Left Text Content */}
      <div style={{ flex: 1, textAlign: "left", paddingLeft: "180px" }}>
        <h2
          style={{
            fontWeight: "bold",
            fontSize: "48px",
            lineHeight: "2",
            maxWidth: "375px",
            marginBottom: "1.25rem",
          }}
        >
          Who can apply?
        </h2>
        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.5",
            fontWeight: "normal",
            maxWidth: "700px",
          }}
        >
          We are stage and industry agnostic. If you are an entrepreneur with
          gumption &amp; an innovative tech-enabled idea, we are ALL IN!
        </p>
      </div>

      {/* Right Anchor Tag */}
      <a
        style={{
          color: "white",
          textAlign: "center",
          backgroundColor: "green",
          padding: "0.75rem 1.5rem",
          textDecoration: "none",
          marginRight: "180px", // Moves the anchor tag 50px to the right
        }}
        href="/incubation-form/"
      >
        Incubate me
      </a>
    </div>
  </div>
</section>



    </header>



  );
};

export default Header;
