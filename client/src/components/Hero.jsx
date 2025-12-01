import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const [vantaLoaded, setVantaLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    
    const loadVanta = async () => {
      if (vantaEffect.current || !vantaRef.current) return;
      
      try {
        console.log('Starting to load Vanta...');
        
        // Wait for THREE to be available from CDN
        if (!window.THREE) {
          console.log('Waiting for THREE.js from CDN...');
          await new Promise(resolve => {
            const checkTHREE = setInterval(() => {
              if (window.THREE) {
                clearInterval(checkTHREE);
                resolve();
              }
            }, 50);
          });
        }
        
        console.log('THREE.js is available:', window.THREE);
        
        // Small delay to ensure DOM is ready
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Load Vanta Birds
        const VANTA = await import('vanta/dist/vanta.birds.min.js');
        console.log('Vanta loaded:', VANTA);
        
        if (!isMounted || !vantaRef.current) return;
        
        // Initialize Vanta - it will use the global THREE
        vantaEffect.current = VANTA.default({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.00,
          minWidth: 200.00,
          backgroundAlpha: 1.00,
          color1: 0xff5f6d,
          color2: 0xffc371,
          wingSpan: 20.0,
          speedLimit: 4.0,
          separation: 30.0,
          alignment: 20.0,
          cohesion: 20.0,
          quantity: 5.0
        });
        
        if (isMounted) {
          setVantaLoaded(true);
          console.log('✅ Vanta Birds initialized successfully!');
        }
      } catch (err) {
        console.error('❌ Error loading Vanta:', err);
      }
    };
    loadVanta()
  
  }, []);

  return (
    <section className="hero" ref={vantaRef}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Welcome to My World</h1>
        <p className="hero-subtitle">
          Exploring life, creativity, and everything in between
        </p>
        <div className="hero-buttons">
          <Link to="/blog" className="btn btn-primary">
            Read Blog
          </Link>
          <Link to="/about" className="btn btn-secondary">
            About Me
          </Link>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll Down</span>
        <div className="scroll-icon"></div>
      </div>
    </section>
  );
}

export default Hero;
