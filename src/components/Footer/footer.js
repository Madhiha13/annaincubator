import React from 'react'; 
import Blacklogo from "../../assets/blacklogo.svg";
import { Linkedin, Instagram, Twitter } from "lucide-react"; // Importing icons from lucide-react
import VizdaleLogo from "../../assets/vizdaleLogo.svg"
const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: 'rgb(27, 26, 26)',
        padding: '2rem',
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      }}
    >
      <footer style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ color: 'white' ,marginRight:"160px"}}>
            <h3 style={{ fontWeight: 'bold', fontSize: '26px' ,marginLeft:"-180px"}}>Join our Newsletter</h3>
            <p style={{ fontSize: '16px', marginTop: '-20px',fontWeight:"normal",marginLeft:"-180px" }}>
              To stay up to date on features and release
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <div style={{ width: '50%' }}>
              <form style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    
                    padding:"0.9rem",
                    paddingRight: '3.2rem',
                    paddingLeft:"2rem",
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    flex: 1,
                    border: 'none',
                    borderRadius: '8px',
                  }}
                  required=""
                />
                <button
                  style={{
                    padding: '0.8rem 1.5rem',
                    border: '1px solid #fff',
                    color: 'white',
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                   
                    fontWeight: 'bold',
                  }}
                >
                  Subscribe
                </button>
              </form>
              <p style={{ color: 'white', fontSize: '12px', margin: "5px" ,maxWidth:"440px"}}>
                By subscribing, you agree to our Privacy Policy and provide consent to receive updates from our organisation.
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6rem' }}>
          <div style={{ flexDirection: 'column', width: '60%' }}>
            <div>
              <a href="/" style={{ textDecoration: 'none' }}>
                <img
                  alt="/assets/anna-incubator/black-logo_ue4yq9.svg"
                 
                  src={Blacklogo}
                  style={{ width: '15%', objectFit: 'contain' ,marginLeft:"100px"}}
                />
              </a>
              <p style={{ color: 'white', fontSize: '15px', maxWidth: '500px', marginTop: '01rem' ,marginLeft:"100px"}}>
                A section 8 company hosted by the Anna University with the grant from Atal Innovation Mission, Niti Aayog, Government of India to build a vibrant innovation and startup ecosystem in the country.
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', textAlign: 'left',marginRight:"70px" }}>
            <a href="/incubation-form/" style={{ color: 'white', fontSize: '14px', textDecoration: 'none', fontWeight: 'bold' }}>
              Incubation
            </a>
            <a href="/about/" style={{ color: 'white', fontSize: '14px', textDecoration: 'none', fontWeight: 'bold' }}>
              About Us
            </a>
            <a href="/contact/" style={{ color: 'white', fontSize: '14px', textDecoration: 'none', fontWeight: 'bold' }}>
              Contact Us
            </a>
            <a href="/equity/" style={{ color: 'white', fontSize: '14px', textDecoration: 'none', fontWeight: 'bold' }}>
              Equity Calculator
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', textAlign: 'left' ,marginRight:"70px"}}>
            <a href="/coworking-form/" style={{ color: 'white', fontSize: '14px', textDecoration: 'none', fontWeight: 'bold' }}>
              Coworking
            </a>
            <a href="/people/" style={{ color: 'white', fontSize: '14px', textDecoration: 'none', fontWeight: 'bold' }}>
              People
            </a>
            <a href="/portfolio/" style={{ color: 'white', fontSize: '14px', textDecoration: 'none', fontWeight: 'bold' }}>
              Portfolio
            </a>
            <a href="/credits/" style={{ color: 'white', fontSize: '14px', textDecoration: 'none', fontWeight: 'bold' }}>
              Credits
            </a>
          </div>
          

<div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginRight: "120px" }}>
  <a href="https://www.linkedin.com/company/aic-anna-incubator/" 
     target="_blank" 
     rel="noreferrer" 
     style={{ 
       color: 'white', 
       fontSize: '14px', 
       textDecoration: 'none', 
       fontWeight: 'bold', 
       display: 'flex', 
       alignItems: 'center', 
       gap: '0.5rem' 
     }}>
    <Linkedin size={20} color="white" />
    LinkedIn
  </a>
  <a href="https://www.instagram.com/annaincubator/" 
     target="_blank" 
     rel="noreferrer" 
     style={{ 
       color: 'white', 
       fontSize: '14px', 
       textDecoration: 'none', 
       fontWeight: 'bold', 
       display: 'flex', 
       alignItems: 'center', 
       gap: '0.5rem' 
     }}>
    <Instagram size={20} color="white" />
    Instagram
  </a>
  <a href="https://twitter.com/annaincubator" 
     target="_blank" 
     rel="noreferrer" 
     style={{ 
       color: 'white', 
       fontSize: '14px', 
       textDecoration: 'none', 
       fontWeight: 'bold', 
       display: 'flex', 
       alignItems: 'center', 
       gap: '0.5rem' 
     }}>
    <Twitter size={20} color="white" />
    Twitter
  </a>
</div>

        </div>

        <div style={{ borderTop: '1px solid #969696', marginTop: '2rem', paddingTop: '1rem',marginLeft:"100px",marginRight:"100px" }}></div>

        <div style={{ padding: '1rem 0', backgroundColor: 'rgb(27, 26, 26)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ color: '#969696', fontSize: '12px',marginLeft:"100px" }}>
              <p>© Anna Incubator 2025 · All rights reserved ·</p>
              <a href="/privacy-policy/" style={{ color: '#969696', fontSize: '12px', textDecoration: 'none', fontWeight: 'bold' }}>
                Privacy Policy
              </a>
            </div>
            <div>
              <figure style={{ display: 'flex', alignItems: 'center' ,marginRight:"100px"}}>
                <p style={{ fontSize: '12px', color: '#969696', margin: '0 0.5rem 0 0' }}>Powered by</p>
                <a target="_blank" rel="noreferrer" href="https://www.vizdale.com">
                  <img
                    alt="/assets/anna-incubator/vizdale-logo_mc1eb4.svg"
                    width="90"
                    height="24"
                    src={VizdaleLogo}
                    style={{ color: 'transparent' }}
                  />
                </a>
              </figure>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
